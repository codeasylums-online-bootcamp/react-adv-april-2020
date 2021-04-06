import React,{Component} from 'react'

import Child from './Child'

class Parent extends Component {

    constructor(props){
        super(props)
        this.state = {
            value:"test1", // test2
            showChild:true
        }
    }

    handleClick = () => {
        const {value} = this.state
        if (value==="test1"){
            this.setState({value:"test2"},()=>{console.log(this.state)})
        }
        else{
            this.setState({value:"test1"},()=>{console.log(this.state)})
        }
    }

    toggleChild = () => {
        const {showChild} = this.state
        this.setState({showChild:!showChild})
    }

    render(){
        return(
            <div>
                Parent Component
                <br/>
                <button onClick={this.handleClick}>Change value</button>
                <button onClick={this.toggleChild}>Toggle child</button>
                {this.state.showChild && <Child defaultValue={this.state.value} />}
            </div>
        );
    }
}

export default Parent