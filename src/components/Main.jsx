import React, {Component} from 'react'

import List from './List'

import {createList} from '../actions'

import {connect} from 'react-redux'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            newListName: "",
        }
    }

    handleNewListNameChange = (e) => {
        this.setState({...this.state, newListName:e.target.value})
    }

    handleClick = () => {
        const {newListName} = this.state
        if (newListName) {
            // let newLists = [...this.state.lists,{listName:newListName, items:[]}]
            this.setState({newListName:""})
            this.props.createList(newListName)
        }
    }
    
    render(){
        // if(jwt.length>0){ 0
        //     react router and routes are added for pages after login
        //     '/' => timeline
        // } else {
        //     react router and routes are added for pages before login
        //     '/' => login page
        // }
        const {lists} = this.props
        return(
            <div>
                <input type="text" value={this.state.newListName} onChange={this.handleNewListNameChange}/> <button onClick={this.handleClick}>Create List</button>
                {lists.map((list,idx)=> <List {...list} 
                    idx={idx} 
                    key={list.name}  />)}
                <button onClick={()=>{/*doingsomething*/}}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists:state.lists
    };
}

export default connect(mapStateToProps,{createList})(Main)


// login

// username
// password => within the state of the component

// reducer:

// client receives a JWT -> store JWT in localstorage

// we clear localstorage if someone clicks logout