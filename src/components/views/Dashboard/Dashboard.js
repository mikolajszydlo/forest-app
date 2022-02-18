import React from 'react';
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
import UnplannedOrderList from './../../features/UnplannedOrderList/UnplannedOrderList';

import styles from './Dashboard.module.scss';

import data from './../../../db/data.json';

const tableHeaderValues = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Dashboard = () => {
  const [unplannedTaskValues, setUnplannedTaskValues] = React.useState({
    open: false,
    dayNo: '',
    teamNo: '',
  });

  const displayedWeek = {
    firstDayOfWeek: new Date('2022-02-12'),
    lastDayOfWeek: new Date('2022-02-19'),
  };

  const addUnplannedTask = (teamNo, dayNo) => {
    setUnplannedTaskValues({open: true, dayNo, teamNo});
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

  const getTaskData = (teamNo, dayNo) => (
    data.find(
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
      {unplannedTaskValues.open && <UnplannedOrderList handleCompVisibility={setUnplannedTaskValues} dayNo={unplannedTaskValues.dayNo} teamNo={unplannedTaskValues.teamNo}/>}
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
                    {getTaskData(teamNo, dayNo) ?
                      <Tile taskData={getTaskData(teamNo, dayNo)}/>
                      :
                      <IconButton color="success" aria-label="upload picture" component="span" onClick={() => addUnplannedTask(teamNo+1, dayNo)}>
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

export default Dashboard;

