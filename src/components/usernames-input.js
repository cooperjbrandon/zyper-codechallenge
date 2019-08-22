import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  usernamesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  usernamesTextInput: {
    width: '100%'
  }
});

const UsernamesInput = ({ loading, onSubmit, classes }) => {

  const [usernames, setUsernames] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const buttonDisabled = loading || !usernames.length;

  const handleChange = (event) => {
    setUsernames(event.target.value);
  }

  const handleCheckedChange = (event) => {
    setIsChecked(event.target.checked);
  }

  const onClick = () => {
    onSubmit(usernames, isChecked);
  }

  return (
    <div className={classes.usernamesContainer}>
      <TextField
        label="Enter usernames (separated by commas) "
        multiline
        rowsMax="4"
        value={usernames}
        onChange={handleChange}
        margin="normal"
        className={classes.usernamesTextInput}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleCheckedChange}
            color="primary"
          />
        }
        label="tick to list all accounts individually"
      />

      <Button variant="contained" color="primary" disabled={buttonDisabled} onClick={onClick}>
         Submit
       </Button>
    </div>
  )

}

export default withStyles(styles)(UsernamesInput);
