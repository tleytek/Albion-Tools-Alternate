import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
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
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
    props.handleCategoryChange(event.target.value, props.data, props.childObj);
  };

  const renderList = () => {
    return _.keys(props.data).map(category => {
      return <FormControlLabel key={_.id} value={category} control={<Radio />} label={category} />;
    });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{props.name}</FormLabel>
        <RadioGroup
          aria-label={props.name}
          name={props.name}
          className={classes.group}
          value={value}
          onChange={handleChange}>
          {renderList()}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButtonGroup;
