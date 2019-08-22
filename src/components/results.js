import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  loading: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  result: {
    borderBottom: '1px solid black'
  },
  resultRow: {
    display: 'flex'
  }
});

const Result = ({ result, classes }) => (
  <div className={`${classes.result} result`}>
    {Object.entries(result.output).map(([key, value], index) => {
      return <div key={index} className={classes.resultRow}>
        <Typography>{key}: </Typography>
        <Typography>{value}</Typography>
      </div>
    })}
  </div>
)

const Results = ({ loading, results, classes }) => {

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress size={50} />
      </div>
    )
  }

  return (
    <div>
      {Object.values(results).map((result, index) => <Result key={index} result={result} classes={classes} />)}
     </div>
  )

}

export default withStyles(styles)(Results);
