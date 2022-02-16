import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import styles from './Header.module.scss';

const Header = () => (
  <AppBar position="static">
    <Toolbar disableGutters>
      <Container className={styles.navContainer}>
        <Button color="inherit">Login</Button>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
