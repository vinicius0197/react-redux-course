import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ errMessage: err.message })
    );
  }

  componentDidUpdate() {
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <Spinner />;
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);