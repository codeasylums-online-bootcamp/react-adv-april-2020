import React,{Component} from 'react'

import {deleteItem} from '../actions'

import {connect} from 'react-redux'

class Item extends Component {

    handleDeleteItem  = () => {
        const {itemIdx, listIdx} = this.props
        this.props.deleteItem(listIdx,itemIdx)
    }
    render(){
        const {item} = this.props
            return(
                <div>
                    {item}<button onClick={this.handleDeleteItem}>Delete item</button>
                </div>
            );
        }
    }

export default connect(null,{deleteItem})(Item)