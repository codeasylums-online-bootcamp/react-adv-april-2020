import React, {useState,useContext} from 'react'

import List from './List'

import {createList} from '../actions'
import {storeContext} from '../context'

function Main(props) {

    const context = useContext(storeContext);
    const [state, setState] = useState({ newListName: ""})

    const handleNewListNameChange = (e) => {
        setState({...state, newListName:e.target.value})
    }

    const handleClick = () => {
        const {newListName} = state
        const {dispatch} = context
        if (newListName) {
            setState({newListName:""})
            dispatch(createList(newListName));
        }
    }
    

    const {lists} = context.store
    return(
        <div>
            <input type="text" value={state.newListName} onChange={handleNewListNameChange}/> <button onClick={handleClick}>Create List</button>
            {lists.map((list,idx)=> <List {...list} 
                idx={idx} 
                key={list.name}  />)}
            <button onClick={()=>{/*doingsomething*/}}>Submit</button>
        </div>
    );
}

export default Main;


// login

// username
// password => within the state of the component

// reducer:

// client receives a JWT -> store JWT in localstorage

// we clear localstorage if someone clicks logout