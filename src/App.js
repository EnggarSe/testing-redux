import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import Views from './Mojo/component/View'

function App() {
  return (

   <Provider store = {store}>
      <Views/>
   </Provider>
  );
}

export default App;
