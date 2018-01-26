import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Btn extends Component {
    render() {
        const style = {
            width:'100%',
            margin: '15px 0',
            'textAlign': 'center'
        }
        return (
            <div style={style} >
                <button type="button" className="btn btn_section" onClick={this.props.funcion}> {this.props.text} </button>
            </div>
           
        )
    }
}

Btn.propTypes = {
    funcion: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}
