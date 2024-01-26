import { render } from "@testing-library/react"
import React from "react"
class statecomponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Udhaya",
            course: "MERN"
        }
    }


changestate = () => {
    console.log("UKR")
}


render(){
    return (
        <div>
            <h1>I am {this.state.name}learning{this.state.course}</h1>
            <button onClick={this.changestate}>click me </button>
        </div>
    );
}
}

export default statecomponent;

