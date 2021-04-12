import React, { Component } from 'react'

import Item from './Items'

import {deleteList, addItem} from '../actions'

import {connect} from 'react-redux'

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            newItemName:"",
        };
    }

    handleChange = (e) => {
        this.setState({newItemName:e.target.value})
    }

    handleAddNewItem = () => {
        const {newItemName} = this.state
        const {idx} = this.props
        // this.setState({newItemName:""})
        // this.props.addItem(idx, newItemName);
        this.setState({newItemName:""})
        this.props.addItem(idx, newItemName)
    }

    handleListDelete = (idx) => {
        this.props.deleteList(idx);
    }

    render(){
        const {name, idx, items} = this.props
        const {newItemName} = this.state
        return(
            <div>
                {name}<button onClick={()=> this.handleListDelete(idx)}>Delete List</button><br/>
                <input type="text" value={newItemName} onChange={this.handleChange}/> <button onClick={this.handleAddNewItem}>Add Item</button>
                {items.map((item, itemIdx) => <Item key={item} item={item} listIdx={idx} itemIdx={itemIdx}/>)}
            </div>
        );
    }
}

export default connect(null,{addItem,deleteList})(List);