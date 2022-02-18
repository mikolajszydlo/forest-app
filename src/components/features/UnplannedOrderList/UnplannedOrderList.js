import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TaskList from '../../common/TaskList/TaskList';
import IconButton from '@mui/material/IconButton';
import Cancel from '@mui/icons-material/Cancel';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from './UnplannedOrderList.module.scss';

const UnplannedOrderList = ({handleCompVisibility, taskDate, teamNo, unplannedTasks, changeTaskParams}) => {
  const taskParams = {};

  const setTaskParams = (taskId) => {
    taskParams.id = taskId;
    taskParams.date = taskDate;
    taskParams.team = teamNo;
    taskParams.plan = true;
  };

  const handleTaskParamsChange = () => {
    changeTaskParams(taskParams);
    handleCompVisibility({open: false});
  };

  return (
    <Card className={styles.container} elevation={6}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#2e7d32' }}>T{teamNo}</Avatar>
        }
        action={
          <IconButton onClick={() => handleCompVisibility({open: false})} aria-label="cancel">
            <Cancel color="error"/>
          </IconButton>
        }
        title={taskDate}
        subheader={`TEAM-${teamNo + 1}`}
      >
      </CardHeader>
      <CardContent>
        <Typography variant='h5'>Add new task</Typography>
        <Divider />
        <Box sx={{ mb: 2, mt: 2 }}>
          <TextField
            id="client"
            label="Client"
          />
        </Box>
        <Divider />
        <Box sx={{ mb: 2, mt: 2 }}>
          <TextField
            id="dest-city"
            label="City"
          />
        </Box>
        <Divider />
        <Box sx={{ mb: 2, mt: 2 }}>
          <TextField
            id="dest-street"
            label="Street"
            sx={{ pr: 2 }}
          />
          <TextField
            id="dest-number"
            label="Number"
          />
        </Box>
        <Divider />
        <TaskList listArr={unplannedTasks} setTaskParams={setTaskParams}/>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'end', p: 2 }}>
        <Button variant="contained" color="success" onClick={() => handleTaskParamsChange()}>Save</Button>
      </CardActions>
    </Card>
  );
};

UnplannedOrderList.propTypes = {
  handleCompVisibility: PropTypes.func,
  taskDate: PropTypes.string,
  teamNo: PropTypes.number,
  unplannedTasks: PropTypes.array,
  changeTaskParams: PropTypes.func,
};


export default UnplannedOrderList;
