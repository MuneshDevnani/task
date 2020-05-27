import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

export class Dashboard extends Component {
    render() {
        return (
                <h1>You are loged in: {this.props.auth.username}</h1>
        )
    }
}
const mapStateToProps= state =>{
    return {
      auth: state.auth
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return {
  
    }
  }
export default connect(
 mapStateToProps,
 mapDispatchToProps
)(withRouter(Dashboard));
