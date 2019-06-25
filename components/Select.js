import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    marginTop: theme.spacing(2)
  }
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ age: '' });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const renderSelectList = () => {
    return props.data.map(tier => <option value={tier}>{tier}</option>);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          {props.name}
        </InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange('age')}
          input={<Input name="age" id="age-native-label-placeholder" />}>
          <option value="" />
          {renderSelectList()}
        </NativeSelect>
        <FormHelperText>Select your Tier</FormHelperText>
      </FormControl>
    </div>
  );
}
