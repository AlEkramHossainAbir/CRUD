import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './container/HomeContainer'
import {Provider} from 'react-redux'
import store from './Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">

      <HomeContainer />

    </div>
    </Provider>
  );
}

export default App;
