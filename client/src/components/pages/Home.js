import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component {
    render() {
        return (
            <div>
              <h1>Home Page</h1>
              {this.props.auth.token ? 
             <h3>Well come <b>{this.props.auth.username}</b></h3>
             :
              <h3>Please Login First</h3>}
            </div>
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
)(withRouter(Home));