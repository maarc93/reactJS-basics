import React from "react";

export class Home extends React.Component {
    render() {
        return(
            <div>
                <p>In a new Component!</p>
                <p>You name is {this.props.name}</p>
            </div>
        );
    }
}
