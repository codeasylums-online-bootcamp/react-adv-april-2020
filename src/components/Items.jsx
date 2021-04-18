import React,{useContext} from 'react'

import {deleteItem} from '../actions'
import {storeContext} from '../context'

function Item(props) {

    const context = useContext(storeContext)

    const handleDeleteItem  = () => {
        const {itemIdx, listIdx} = props
        const {dispatch} = context;
        // console.log(deleteItem(listIdx,itemIdx));
        dispatch(deleteItem(listIdx,itemIdx));
    }
   
        const {item} = props
            return(
                <div>
                    {item}<button onClick={handleDeleteItem}>Delete item</button>
                </div>
            );
        }
    

export default Item;