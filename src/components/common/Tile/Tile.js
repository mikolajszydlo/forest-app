import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import styles from './Tile.module.scss';

const Tile = ({taskData}) => (
  <Card>
    <div className={styles.cardContent}>
      <div className={styles.row}>
        <Typography variant='h2' sx={{ fontSize: '.8rem', color: 'cornflowerblue' }}>Task-{taskData.id}</Typography>
        <Typography variant='button'>{taskData.client}</Typography>
      </div>
      <Typography variant='body'>{`${taskData.dest.city}, `}</Typography>
      <Typography variant='body'>{`${taskData.dest.street} `}</Typography>
      <Typography variant='body'>{taskData.dest.number}</Typography>
    </div>
  </Card>
);

Tile.propTypes = {
  taskData: PropTypes.object,
};

export default Tile;
