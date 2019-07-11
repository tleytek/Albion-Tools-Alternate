import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginRight: theme.spacing(3)
  },
  FormControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

const RadioButtonGroup = props => {
  const classes = useStyles();
  const { name, data, onCategoryChange } = props;
  const [value, setValue] = React.useState('');

  const onChange = event => {
    console.log(event.target.name);
    setValue(event.target.value);
    onCategoryChange(event.target.name, _.replace(event.target.value, ' ', ''));
  };

  const renderList = () =>
    data.map(category =>
      name === 'ItemType' ? (
        <FormControlLabel
          key={category.partialUniqueName}
          value={category.partialUniqueName}
          control={<Radio />}
          label={category.itemType}
        />
      ) : (
        <FormControlLabel key={category} value={category} control={<Radio />} label={category} />
      )
    );

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{name}</FormLabel>
        <RadioGroup
          aria-label={name}
          name={name}
          className={classes.group}
          value={value}
          onChange={onChange}
        >
          {renderList()}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired
};

export default RadioButtonGroup;
