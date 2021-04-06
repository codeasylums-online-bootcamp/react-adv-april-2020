import React,{Component} from 'react'

class Child extends Component {
    constructor(props){
        super(props)
        console.log("constructor")
        // dont initialize state with props value in constructor
        this.state = {
            value: "",
            useProps:true,
            timeout:null
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        if(state.useProps===false){
            return state
        }

        const {defaultValue} = props

        const newState = {...state, value:defaultValue, useProps:false}
        //default value is in props

        return newState
    }

    componentDidMount(){
        console.log("componentDidMount")
        //API calls
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate")
    }

    handleChange = (e) => {
        this.setState({value:e.target.value})
    }

    render(){
        console.log("render")
        return(
            <div>
                Child Component
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Child