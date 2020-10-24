import React,  { Component } from 'react';

class Feedback extends Component {
    state = {
        id:"feedbackmodel"
    }
    onClick = () => {
        this.props.openModel(this.state.id)
    }
    render() {
        // console.log(this.props.openModel)
        return (
           <div className="feedbackcontainer" onClick={this.onClick}>
                <div>
                    <button className="feedbackbtn">
                        <i className="fas fa-comments"></i>
                        <small>Feedback</small>
                    </button>
                </div>
           </div>
        );
    }
}

export default Feedback;