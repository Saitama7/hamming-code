import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginTop: 10
  },
  table: {
    maxWidth: 600
  },
  mistake: {
    background: 'red'
  }
});

export default function DenseTable({ code, title, mistake }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <h2>{title}</h2>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>m1(1)</TableCell>
            <TableCell align="right">m2(2)</TableCell>
            <TableCell align="right">k4(3)</TableCell>
            <TableCell align="right">m3(4)</TableCell>
            <TableCell align="right">k3(5)</TableCell>
            <TableCell align="right">k2(6)</TableCell>
            <TableCell align="right">k1(7)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" className={clsx({[classes.mistake]: mistake === 'm1'})}>
              {code.m1}
            </TableCell>
            <TableCell align="right" className={clsx({[classes.mistake]: mistake === 'm2'})}>
              {code.m2}
            </TableCell>
            <TableCell align="right" className={clsx({[classes.mistake]: mistake === 'k4'})}>
              {code.k4}
            </TableCell>
            <TableCell align="right" className={clsx({[classes.mistake]: mistake === 'm3'})}>
              {code.m3}
            </TableCell>
            <TableCell align="right" className={clsx({[classes.mistake]: mistake === 'k3'})}>
              {code.k3}
            </TableCell>
            <TableCell align="right" className={clsx({[classes.mistake]: mistake === 'k2'})}>
              {code.k2}
            </TableCell>
            <TableCell align="right" className={clsx({[classes.mistake]: mistake === 'k1'})}>
              {code.k1}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
