import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import shortid from 'shortid';


import styles from './MainLayout.module.scss';

const tableHeaderValues = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MainLayout = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Container className={styles.navContainer}>
            <Button color="inherit">Login</Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Container className={styles.contentContainer}>
        <Paper className={styles.paperContainer} elevation={6}>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaderValues.map(item => (
                  <TableCell key={shortid.generate()} sx={{ width: 1/8, textAlign: 'center', padding: .75 }}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(12)].map((item, teamNo) => (
                <TableRow key={shortid.generate()} sx={{ verticalAlign: 'top'}}>
                  <TableCell sx={{ textAlign: 'center', padding: .75 }}>TEAM-{teamNo + 1}</TableCell>
                  {[...Array(tableHeaderValues.length - 1)].map((item, index) => (
                    <TableCell key={shortid.generate()} sx={{ padding: .75 }}>
                      <Card>
                        <CardContent className={styles.cardContent}>
                          <Accordion
                            TransitionProps={{ unmountOnExit: true }}
                            expanded={expanded === '' + teamNo + index}
                            onChange={handleChange('' + teamNo + index)}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography sx={{ color: 'text.secondary' }}>Norrköping</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>Client: Client name</Typography>
                              <Typography>Details: Task details</Typography>
                            </AccordionDetails>
                          </Accordion>
                        </CardContent>
                      </Card>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </>
  );
};

export default MainLayout;
