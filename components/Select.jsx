import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
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
  }
}));

export default function SimpleSelect(props) {
  const { type, data, onCategoryChange, currentValue } = props;
  const classes = useStyles();

  // eslint-disable-next-line no-shadow
  const handleChange = name => event => {
    event.preventDefault();
    onCategoryChange(name, event.target.value, event.currentTarget.dataset.journal);
  };

  const renderSelectList = () => {
    return data.map(({ name, value, journal }) => (
      <MenuItem key={value} value={value} data-journal={journal}>
        {name}
      </MenuItem>
    ));
  };

  return (
    <form className={classes.root}>
      <FormControl className={classes.formControl} disabled={!data}>
        <InputLabel shrink htmlFor={type}>
          {type}
        </InputLabel>
        <Select
          value={currentValue}
          onChange={handleChange(type)}
          displayEmpty={type === 'Enchantment'}
          input={<Input name={type} id={type} />}
        >
          {/* {type !== 'Enchantment' && (
            <MenuItem value="" className={classes.option}>{`Select ${type}`}</MenuItem>
          )} */}
          {data && renderSelectList()}
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
