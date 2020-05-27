import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import history from '../history';

class pagewraper extends Component {
    logout = (e) => {
        e.preventDefault();
        localStorage.clear("token");
        // const { history } = this.props;
        // history.push('/');
        window.location.assign('/')
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Task</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            {this.props.auth.token ? 
                            <li className="nav-item">
                            <Link className="nav-link" onClick={this.logout}>Logout</Link>
                        </li>
                        :
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Signin</Link>
                            </li>
                            </ul>
                         }
                            

                        </ul>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(pagewraper));