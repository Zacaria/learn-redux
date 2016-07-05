import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/(:filter)" component={App}/>
        </Router>
      </Provider>
    );
  }
}
export default Root;
