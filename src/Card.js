import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <span>{this.props.description}</span>
                <img src={this.props.imgSrc} />
            </div>
        )
    }
}

export default Card