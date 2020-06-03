import React, { useMemo } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    height: 'fit-content',
    marginTop: 10
  },
  table: {
    maxWidth: 400
  },
  mResult: {
    background: 'yellow'
  },
  result: {
    background: 'green',
    color: '#fff'
  }
});

function createData(m, n1, n2, n3) {
  return { m, n1, n2, n3 };
}

const rows = [
  createData('m1','k4','+ k3','+ k1'),
  createData('m2','k4','+ k2','+ k1'),
  createData('m3','k3','+ k2','+ k1'),
];

export default function DenseTable({data}) {
  const classes = useStyles();

  const tableData = useMemo(() => data.length > 0 ? data : rows, [data])

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableBody>
          {tableData.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {row.m}
              </TableCell>
              <TableCell align="right">{row.n1}</TableCell>
              <TableCell align="right">{row.n2}</TableCell>
              <TableCell align="right">{row.n3}</TableCell>
              {row.mResult && (
                <TableCell align="right" className={classes.mResult}>{row.mResult}</TableCell>
              )}
              {row.result && (
                <TableCell align="right" className={classes.result}>{row.result}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DenseTable.propTypes = {
  data: PropTypes.array
}

DenseTable.defaultProps = {
  data: []
}