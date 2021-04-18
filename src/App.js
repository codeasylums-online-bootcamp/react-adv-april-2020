import React,{useReducer} from 'react'

import Main from './components/Main'
import reducer,{defaultState} from './reducer'
import {storeContext} from './context'

function App() {

  const [store, dispatch] = useReducer(reducer, defaultState);

  return (
    <div style={{margin:"100px"}}>
      {/* <Parent/> */}
      <storeContext.Provider value={{store:store, dispatch:dispatch}}>
        <Main />
      </storeContext.Provider>
    </div>
  );
}

export default App;
