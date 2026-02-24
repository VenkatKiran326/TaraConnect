import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super()

        this.state={
            TextErr:false,
            name:""
        }
    }
    static getDerivedStateFromError(){
        return{
            TextErr:true
        }
    }

    render(){
        if(this.state.TextErr){
            return <h2>Something Went Wrong !!</h2>
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundary