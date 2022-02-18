import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tile from './../../common/Tile/Tile';
import IconButton from '@mui/material/IconButton';
import AddCircle from '@mui/icons-material/AddCircle';
import UnplannedOrderList from '../../features/UnplannedOrderList/UnplannedOrderListContainer';

import styles from './Dashboard.module.scss';

const tableHeaderValues = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Dashboard = ({tasks}) => {

  const [unplannedTaskValues, setUnplannedTaskValues] = React.useState({
    open: false,
    taskDate: '',
    teamNo: '',
  });

  const displayedWeek = {
    firstDayOfWeek: new Date('2022-02-13'),
    lastDayOfWeek: new Date('2022-02-19'),
  };

  const createDateFromDayNo = dayNo => {
    const newTaskDate = new Date();

    return (new Date(newTaskDate.setDate(displayedWeek.firstDayOfWeek.getDate() + dayNo)))
      .toISOString().substring(0, 10);
  };

  const openUnplannedTasksList = (teamNo, taskDate) => {
    setUnplannedTaskValues({open: true, taskDate, teamNo});
  };

  const getDayNoFromDate = date => (
    new Date(date).getDay()
  );

  const checkDateBoudries = date => {
    const taskDate = new Date(date);

    return (
      taskDate.getTime() >= displayedWeek.firstDayOfWeek.getTime() ||
      taskDate.getTime() <= displayedWeek.lastDayOfWeek.getTime()
    );
  };

  const getTaskDataFromStore = (teamNo, dayNo) => (
    tasks.find(
      item => (item.team === teamNo
      && item.plan
      && !item.completed
      && getDayNoFromDate(item.date) === dayNo
      && checkDateBoudries(item.date)
      )
    )
  );

  return (
    <Container className={styles.contentContainer}>
      {unplannedTaskValues.open && <UnplannedOrderList handleCompVisibility={setUnplannedTaskValues} taskDate={unplannedTaskValues.taskDate} teamNo={unplannedTaskValues.teamNo}/>}
      <Paper className={styles.paperContainer} elevation={6}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 1/16 }}></TableCell>
              {tableHeaderValues.map(item => (
                <TableCell key={shortid.generate()} sx={{ width: 1/8, textAlign: 'center', padding: .75 }}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(12)].map((item, teamNo) => (
              <TableRow key={shortid.generate()} className={styles.row}>
                <TableCell sx={{ textAlign: 'center', padding: .75 }}>TEAM-{teamNo + 1}</TableCell>
                {[...Array(tableHeaderValues.length)].map((item, dayNo) => (
                  <TableCell key={shortid.generate()} sx={{ textAlign: 'center', padding: .75 }} >
                    {getTaskDataFromStore(teamNo, dayNo) ?
                      <Tile taskData={getTaskDataFromStore(teamNo, dayNo)}/>
                      :
                      <IconButton color="success" aria-label="upload picture" component="span" onClick={() => openUnplannedTasksList(teamNo, createDateFromDayNo(dayNo))}>
                        <AddCircle />
                      </IconButton>
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

Dashboard.propTypes = {
  tasks: PropTypes.array,
};

export default Dashboard;

