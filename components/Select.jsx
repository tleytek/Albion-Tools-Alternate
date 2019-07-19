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
    margin: theme.spacing(2),
    minWidth: 120
  },
  option: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

export default function SimpleSelect(props) {
  const { type, data, onCategoryChange, currentValue, parentSelection } = props;
  const classes = useStyles();

  // eslint-disable-next-line no-shadow
  const handleChange = name => event => {
    event.preventDefault();
    onCategoryChange(name, event.target.value);
  };

  const renderSelectList = () => {
    return data.map(({ name, value }) => (
      <option className={classes.option} key={value} value={value}>
        {name}
      </option>
    ));
  };

  return (
    <form className={classes.root}>
      <FormControl className={classes.formControl} disabled={!data}>
        <InputLabel shrink htmlFor={type}>
          {type}
        </InputLabel>
        <Select
          native
          value={currentValue}
          onChange={handleChange(type)}
          displayEmpty={type === 'Enchantment'}
          inputProps={{ name: type, id: type }}
        >
          {type !== 'Enchantment' && (
            <option value="" className={classes.option}>{`Select ${type}`}</option>
          )}
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
