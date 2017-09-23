import React from 'react';
import Header from './Routes/Header';
import Main from './Routes/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Main data={this.props.data} />
      </div>
    );
  }
};

export default App;
