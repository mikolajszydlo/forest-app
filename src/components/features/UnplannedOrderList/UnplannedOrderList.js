import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TaskList from './../../common/TaskList/TaskList';
import IconButton from '@mui/material/IconButton';
import Cancel from '@mui/icons-material/Cancel';
import Avatar from '@mui/material/Avatar';

import styles from './UnplannedOrderList.module.scss';

import data from './../../../db/data.json';

const tableHeaderValues = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const UnplannedOrderList = ({handleCompVisibility, dayNo, teamNo}) => {
  return (
    <Card className={styles.container} elevation={6}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }}>T{teamNo}</Avatar>
        }
        action={
          <IconButton onClick={() => handleCompVisibility({open: false})} aria-label="cancel">
            <Cancel color="error"/>
          </IconButton>
        }
        title={tableHeaderValues[dayNo]}
        subheader={`TEAM-${teamNo}`}
      >
      </CardHeader>
      <CardContent>
        <TaskList listArr={data.filter(item => !item.plan)} />
      </CardContent>
      <CardActions sx={{ justifyContent: 'end', p: 2 }}>
        <Button variant="contained" color="success">Save</Button>
      </CardActions>
    </Card>
  );
};

UnplannedOrderList.propTypes = {
  handleCompVisibility: PropTypes.func,
  dayNo: PropTypes.number,
  teamNo: PropTypes.number,
};


export default UnplannedOrderList;
