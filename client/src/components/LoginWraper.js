import React, { Component } from 'react'
import './assets/css/style.css';

export default class LoginWraper extends Component {
    render() {
        return (
            <div id="admin-page">
                {this.props.children}
            </div>
        )
    }
}
