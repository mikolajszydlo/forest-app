import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';

import styles from './TaskList.module.scss';

const TaskList = ({listArr, setTaskParams}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (id, index) => {
    setSelectedIndex(index);
    setTaskParams(id);
  };
  return (
    <>
      <ListSubheader>Select task to plan</ListSubheader>
      <List component="nav" sx={{ overflow: 'auto', position: 'relative', maxHeight: 300 }}>
        {listArr.map((item, index) => (
          <ListItemButton
            className={styles.listButton}
            key={shortid.generate()}
            selected={selectedIndex === (2 + index)}
            onClick={() => handleListItemClick(item.id, 2 + index)}
          >
            <ListItemText sx={{ width: 1 }}>
              <div className={styles.row}>
                <Typography variant='h2' sx={{ fontSize: '.8rem', color: 'cornflowerblue' }}>Task-{item.id}</Typography>
              </div>
              <div className={styles.row}>
                <Typography variant='button'>{item.client}</Typography>
                <div>
                  <Typography variant='body'>{`${item.dest.city}, `}</Typography>
                  <Typography variant='body'>{`${item.dest.street} `}</Typography>
                  <Typography variant='body'>{item.dest.number}</Typography>
                </div>
              </div>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

TaskList.propTypes = {
  listArr: PropTypes.array,
  setTaskParams: PropTypes.func,
};

export default TaskList;
