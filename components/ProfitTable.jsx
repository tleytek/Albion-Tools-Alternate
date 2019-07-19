import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    // minWidth: 650
  }
}));

const createData = (name, value) => {
  return { name, value };
};

const ProfitTable = props => {
  const classes = useStyles();
  const { UsageFee, SubTotal, ReturnDiscountMin, TotalCost, Profit } = props;

  const rows = [
    createData('Usage Fee', UsageFee),
    createData('SubTotal', SubTotal),
    createData('Return Discount', `-${ReturnDiscountMin}`),
    createData('Total', TotalCost),
    createData('Profit', Profit)
  ];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Crafting Costs</TableCell>
            <TableCell align="right">Silver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ProfitTable;
