import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }
    
    clicked = () => {
        let numClicked = this.state.timesClicked + 1

        this.setState({
            timesClicked: numClicked
        })
    }

    render() {
        return (
            <button onClick={this.clicked}>{this.state.timesClicked}</button>
        )
    }
}
