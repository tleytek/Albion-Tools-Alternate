import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    paddingTop: theme.spacing(2)
  }
}));

export default function SimpleSelect(props) {
  const { type, data, onCategoryChange, currentValue } = props;
  const classes = useStyles();

  // eslint-disable-next-line no-shadow
  const handleChange = event => {
    onCategoryChange(event.target.name, event.target.value);
  };

  const renderSelectList = () => {
    return data.map(({ name, value }) => (
      <MenuItem key={value} value={value}>
        {name}
      </MenuItem>
    ));
  };

  return (
    <form className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor={type}>
          {type}
        </InputLabel>
        <Select
          value={currentValue}
          onChange={handleChange}
          displayEmpty={type === 'Enchantment'}
          name={type}
          inputProps={{ name: type, id: type }}
        >
          {renderSelectList()}
        </Select>
      </FormControl>
    </form>
  );
}

SimpleSelect.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  currentValue: PropTypes.string.isRequired
};
