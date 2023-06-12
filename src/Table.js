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
  createData('1', 'Mount Washington', '2014, 2017','7/5/2014', "6288'", 'None', '...', '...', 'Tuckerman Ravine -> Summit -> Shuttle & Lion Head'),
  createData('2', 'Moosilauke', '2016, 2019', '7/3/2016', '4802', 'None',	'7.5 & 10', '...', '...'),
  createData('3', 'Tecumseh', '2016',	'N/A', "4003'", 'None', 'N/A', 'N/A', 'N/A'),
  createData('4', 'Lincoln', '2016', 'N/A', "5089'", 'Lafayette, Haystack', '8.6', '8-9', 'N/A'),
  createData('5', 'Lafayette', '2016', 'N/A',	"5260'", 'Lincoln, Haystack',	'8.6', '8-9',	'N/A'),
  createData('6', 'Osceola', '2016, 2020', 'N/A', "4340'", 'East Osceola', 'N/A',	'N/A', 'Carried Lucy down until she saw a cat in a backpack, which gave her a 2nd wind'),
  createData('7', 'East Osceola', '2016',	'?', "4156'", 'Osceola', 'N/A', 'N/A', 'N/A'),
  createData('8', 'Pierce',	'2017', '9/23/2017', "4310'",	'Eisenhower',	'N/A', 'N/A',	'N/A'),
  createData('9', 'Cannon',	'2017',	'9/9/2017',	"4100'",	'None',	'N/A',	'N/A',	'N/A'),
  createData('10','Eisenhower',	'2017',	'9/23/2017',	"4780'",	'Pierce',	'N/A',	'N/A',	'N/A'),
  createData('11','Garfield',	'2017',	'9/24/2017',	"4500'",	'None',	'N/A',	'N/A',	'N/A'),
  createData('12','Jackson',	'2017',	'5/21/2017',	"4052'",	'Webster',	'N/A',	'N/A',	'N/A'),
  createData('13','Galehead',	'2017',	'9/10/2017',	"4024'",	'None',	'N/A',	'N/A',	'N/A')
// 14	Field	2018	7/8/2018	4340'	Tom, Avalon	N/A	7 hours, 15 minutes	Avalon Trail
// 15	Tom	2018	7/8/2018	4051'	Field, Avalon	N/A	7 hours, 15 minutes	Avalon Trail
// 16	Waumbek	2018	7/7/2018	4006'	None	6.9	N/A	Starr King
// 17	Monroe	2019	9/17/2019	5384'	None	6.8	7 hours, 25 minutes	Ammonoosuc Ravine Trail
// 18	North Kinsman	2020	8/8/2020	4293'	South Kinsman	9.4	8 hours, 25 minutes	Lonesome Lake Trail -> Fishin Jimmy Trail -> Kinsman Ridge Trail
// 19	South Kinsman	2020	8/8/2020	4358'	North Kinsman	9.4	8 hours, 25 minutes	Lonesome Lake Trail -> Fishin Jimmy Trail -> Kinsman Ridge Trail
// 20	Liberty	2021	6/26/2021	4459'	Flume		7 hours, 50 minutes	Liberty Spring Trails out and back
// 21	Flume	2021	6/26/2021	4328'	Liberty		7 hours, 50 minutes	Liberty Spring Trails out and back
// 22	Willey	2021	10/9/2021	4285	None - out and back	4.8	4 hours, 30 minutes	Ethan Pond Trail -> Willey Range Trail
// 23	Hale	2021	10/10/2021	4054'	None - out and back	4	3 hours, 10 minutes	Hale Brook Trail
// 24	North Hancock	2022	7/3/2022	4380'	South Hancock	9.1	6 hours, 10 minutes	Hancock trail. Went to North Hancock first, then South Hancock
// 25	South Hancock	2022	7/3/2022	4278'	North Hancock	9.1	6 hours, 10 minutes	Hancock trail. Went to North Hancock first, then South Hancock
// 26	Carrigain	2022	10/1/2022	4683'	None	10.1	6 hours, 35 minutes	"Signal Ridge Trail - Canada Jay tried to take my peanut butter sandwhich. Also attacked Michelles head"
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