import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '10ch',
    },
  },
}));

const initState = {
  k4: '',
  k3: '',
  k2: '',
  k1: ''
}

export default function BasicTextFields({onSubmit}) {
  const classes = useStyles();
  const [state, setState] = useState(initState)

  const handleChange = event => {
    const { name, value } = event.target
    console.log(typeof value)

    setState(prevState => ({
      ...prevState,
      [name]: value === '0' || value === '1' ? value : ''
    }))
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label="k4" name="k4" value={state.k4} onChange={handleChange} />
      <TextField label="k3" name="k3" value={state.k3} onChange={handleChange} />
      <TextField label="k2" name="k2" value={state.k2} onChange={handleChange} />
      <TextField label="k1" name="k1" value={state.k1} onChange={handleChange} />
      <Button size="medium" color="primary" onClick={() => onSubmit(state)}>Решить</Button>
    </form>
  );
}
