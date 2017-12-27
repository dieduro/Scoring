import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Btn extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.funcion}> {this.props.text} </button>
            </div>
           
        )
    }
}

Btn.propTypes = {
    funcion: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}
