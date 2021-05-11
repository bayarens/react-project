import React from 'react'
import Button from './Buttons'


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Button handleClick={this.props.handleClick} text={'cars'} />
                <Button handleClick={this.props.handleClick} text={'boats'} />
            </header>
        )
    }
}

export default Header