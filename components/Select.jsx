import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ [props.name]: props.default });

  const handleChange = name => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
    props.onCategoryChange(event.target.name, event.target.value);
  };

  const renderSelectList = () => props.data.value.map((el, index) => (
    <option key={el} value={el}>
      {props.data.name[index]}
    </option>
  ));

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor={props.name}>
          {props.name}
        </InputLabel>
        <NativeSelect
          value={state[props.name]}
          onChange={handleChange(`${props.name}`)}
          input={<Input name={props.name} id={props.name} />}
        >
          {props.name == 'Enchantment' && <option value="">.0</option>}
          {renderSelectList()}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
