import React from 'react'
import {createStore} from 'redux';

// import Parent from './components/Parent'
import Main from './components/Main'
import {Provider} from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer)

function App() {
  return (
    <div style={{margin:"100px"}}>
      {/* <Parent/> */}
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
