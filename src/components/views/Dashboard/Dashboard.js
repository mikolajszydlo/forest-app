import React from 'react';
import shortid from 'shortid';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styles from './Dashboard.module.scss';

import data from './../../../db/data';
const tableHeaderValues = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Dashboard = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
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
              <TableRow key={shortid.generate()}>
                <TableCell sx={{ textAlign: 'center', padding: .75 }}>TEAM-{teamNo + 1}</TableCell>
                {[...Array(tableHeaderValues.length - 1)].map((item, index) => (
                  <TableCell key={shortid.generate()} sx={{ padding: .75 }}>
                    <Card>
                      <CardContent className={styles.cardContent}>
                        <Typography sx={{ color: 'blue', textDecoration: 'underline'}}>Task-{Math.floor(Math.random() * 99 + 101)}</Typography>
                        <Typography>{data.cities[Math.floor(Math.random() * data.cities.length)]},</Typography>
                        <Typography>
                          {`${data.streets[Math.floor(Math.random() * data.cities.length)]} ${Math.floor(Math.random() * 99 + 101)}`}
                        </Typography>
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
  );
};

export default Dashboard;

