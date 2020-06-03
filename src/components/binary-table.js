import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  table: {
    maxWidth: 400
  },
});

function createData(k4, k3, k2, k1, symbol) {
  return { k4, k3, k2, k1, symbol };
}

const rows = [
  createData(0,0,0,1,'m1'),
  createData(0,0,1,0,'m2'),
  createData(0,0,1,1,'k4'),
  createData(0,1,0,0,'m3'),
  createData(0,1,0,1,'k3'),
  createData(0,1,1,0,'k2'),
  createData(0,1,1,1,'k1')
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>K4</TableCell>
            <TableCell align="right">K3</TableCell>
            <TableCell align="right">K2</TableCell>
            <TableCell align="right">K1</TableCell>
            <TableCell align="right">Символы кода</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {row.k4}
              </TableCell>
              <TableCell align="right">{row.k3}</TableCell>
              <TableCell align="right">{row.k2}</TableCell>
              <TableCell align="right">{row.k1}</TableCell>
              <TableCell align="right">{row.symbol}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
