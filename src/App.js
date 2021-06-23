import './App.css';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { render } from '@testing-library/react';
import routesConfig from './routesConfig'

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/poke">Pokemon</Link>
        </div>
        {routesConfig.map((value, key) => {
          return (
            <Route
              key={key}
              component={value.component}
              path={value.path}
              exact={value.exact}>
            </Route>
          )
        })}
      </div>

    );
  }
}

export default App;
