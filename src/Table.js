import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

function createData(number, name, year, date, height, peakBagged, distance, hikeTime, details) {
  return { number, name, year, date, height, peakBagged, distance, hikeTime, details };
}

const rows = [
  createData('1', 'Mount Washington', '2014, 2017','7/5/2014', "6288'", 'None', '?', '?', 'Tuckerman Ravine -> Summit -> Shuttle & Lion Head'),
  createData('2', 'Moosilauke', '2016, 2019', '7/3/2016', '4802', 'None',	'7.5 & 10', '?', '?')
  // createData('Mount Moosilauke', '7/5/2014', "5000'", 24, 4.0),
  // createData('Mount Tecumseh', '7/5/2014', "5000'", 24, 4.0),
  // createData('Mount Lincoln', '7/5/2014', "5000'", 24, 4.0),
  // createData('Mount Osceola', '7/5/2014', "5000'", 24, 4.0),
];

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "blue"
        },
    }
});

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {/* <TableRow className={classes.root}> */}
          <TableRow>
            {/* <TableCell>Name</TableCell> */}
            <TableCell align="left"><b>#</b></TableCell>
            <TableCell align="left"><b>Mountain</b></TableCell>
            <TableCell align="left"><b>Year</b></TableCell>
            <TableCell align="left"><b>Date</b></TableCell>
            <TableCell align="left"><b>Height</b></TableCell>
            <TableCell align="left"><b>Peak Bagged</b></TableCell>
            <TableCell align="left"><b>Distance</b></TableCell>
            <TableCell align="left"><b>Hike Time</b></TableCell>
            <TableCell align="left"><b>Trail Details</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="left">{row.number}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.year}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.height}</TableCell>
              <TableCell align="left">{row.peakBagged}</TableCell>
              <TableCell align="left">{row.distance}</TableCell>
              <TableCell align="left">{row.hikeTime}</TableCell>
              <TableCell align="left">{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}