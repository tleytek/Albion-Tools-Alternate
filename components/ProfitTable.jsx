import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  },
  table: {
    width: '100%',
    // overflowX: 'auto',
    marginTop: theme.spacing(2)
  },
  button: {
    color: theme.palette.secondary
  }
}));

const createData = (name, value) => {
  return { name, value };
};

const ProfitTable = props => {
  const classes = useStyles();
  // Object Destructuring
  const {
    UsageFee,
    SubTotal,
    ReturnDiscountMin,
    TotalCost,
    SellTax,
    Profit,
    LaborDiscount,
    fetchPrices,
    calculateProfit
  } = props;

  // Creates an array of objects
  const rows = [
    createData('Usage Fee', UsageFee),
    createData('Material Cost', SubTotal),
    createData('Material Return Discount', `-${ReturnDiscountMin}`),
    createData('Sell Tax', SellTax),
    createData('Total Crafting Cost', TotalCost),
    createData('Laborer Return Discount', `-${LaborDiscount}`),
    createData('Profit', Profit)
  ];

  return (
    <Grid container item xs className={classes.root}>
      <Grid container item xs={12} justify="space-evenly">
        <ButtonGroup variant="contained" fullWidth color="secondary">
          <Button onClick={fetchPrices}>Get Prices</Button>
          <Button onClick={calculateProfit}>Calculate</Button>
        </ButtonGroup>
      </Grid>
      <Paper className={classes.table}>
        <Table>
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
    </Grid>
  );
};

export default ProfitTable;
