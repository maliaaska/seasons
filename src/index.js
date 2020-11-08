import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message})
    );
  }
  state = { lat: null,  errorMessage: ''}
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
      }
    if (!this.state.errorMessage && this.state.lat) {
    return <SeasonDisplay lat={this.state.lat} />
      }
    if (!this.state.errorMessage && !this.state.lat) {
      return <div>Loading...</div>
      }
  }
}


ReactDom.render(<App />,document.querySelector('#root'))