import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper,CircularProgress, TextField,Button } from '@material-ui/core';
import ButtonAppBar from './navBar.js'
import DatePickers from './dob'
import BarChart from './BarChart';
import PieChart from './pie'
const useStyles = makeStyles((theme) => ({
  
  paper: {
    width: 400,
    margin: '0 auto',
    marginTop: 100,
    textAlign: 'center',
    
    padding: 50,
  },
  input: {
    width: '94%',
    marginBottom: '10px'
  }
}));


function App() {

  const classes = useStyles();
  return (
    <div className={classes.root} >
      <ButtonAppBar/>

      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />

          <TextField label="Enter Password" className={classes.input}/>
          <DatePickers />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>

        </form>
        <CircularProgress  />
      </Paper>

      <BarChart />
      <PieChart />

    </div>
  );
}

export default App;
 