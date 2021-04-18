import React, { useState, useContext } from 'react'

import Item from './Items'

import {deleteList, addItem} from '../actions'
import {storeContext} from '../context'

function List(props){
    const [state, setState] = useState({newItemName:"",})
    const context = useContext(storeContext);

    const handleChange = (e) => {
        setState({newItemName:e.target.value})
    }

    const handleAddNewItem = () => {
        const {newItemName} = state;
        const {idx} = props;
        const {dispatch} = context;
        // this.setState({newItemName:""})
        // this.props.addItem(idx, newItemName);
        setState({newItemName:""});
        dispatch(addItem(idx, newItemName));
    }

    const handleListDelete = (idx) => {
        const {dispatch} = context;
        dispatch(deleteList(idx));
    }

        const {name, idx, items} = props
        const {newItemName} = state
        return(
            <div>
                {name}<button onClick={()=> handleListDelete(idx)}>Delete List</button><br/>
                <input type="text" value={newItemName} onChange={handleChange}/> <button onClick={handleAddNewItem}>Add Item</button>
                {items.map((item, itemIdx) => <Item key={item} item={item} listIdx={idx} itemIdx={itemIdx}/>)}
            </div>
        );
}

export default List;