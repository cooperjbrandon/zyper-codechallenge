import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';

import UsernamesInput from './components/usernames-input';
import Results from './components/results';


const DATA_FETCH_STATUS_PENDING = 202;
const FETCH_TIMEOUT = 1500; // ms

const styles = theme => ({
  container: {
    padding: 20
  }
});

class Main extends Component {

  state = {
    loading: false,
    results: {}
  }

  submitUsernames = async (username='', individual=false) => {
    try {
      this.setState({ loading: true, results: {} });
      const url = 'https://fe-test-zyper-engagement.herokuapp.com/start';
      const response = await axios.post(url, { username, individual });
      this.fetchData(response.data);
    } catch (error) {
      const message = `Something went wrong POSTing usernames: ${error.toString()}`;
      this.props.enqueueSnackbar(message, { variant: 'error' });
      this.setState({loading: false});
    }
  }

  fetchData = async (jobId) => {
    try {
      const url = `https://fe-test-zyper-engagement.herokuapp.com/results/${jobId}`;
      const response = await axios.get(url);
      if (response.status === DATA_FETCH_STATUS_PENDING) {
        // try fetching data again 1.5 seconds later
        setTimeout(() => {
          this.fetchData(jobId);
        }, FETCH_TIMEOUT)
      } else {
        this.setState({
          loading: false,
          results: response.data
        });
      }
    } catch (error) {
      const message = `Something went wrong GETing data: ${error.toString()}`;
      this.props.enqueueSnackbar(message, { variant: 'error' });
      this.setState({loading: false});
    }
  }

  render() {
    const { classes } = this.props;
    const { loading, results } = this.state;

    return (
      <div className={classes.container}>
        <UsernamesInput loading={loading} onSubmit={this.submitUsernames} />
        <Results loading={loading} results={results}/>
      </div>
    );
  }
}

export default withStyles(styles)(withSnackbar(Main));
