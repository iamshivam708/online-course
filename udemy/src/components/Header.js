import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TrySearch from './TrySearch'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isAuthorised: 'true',
             search:''
        }
    }

    componentDidMount = () =>{
        if(sessionStorage.getItem('isLogin') === this.state.isAuthorised){
            document.getElementById('signup').style.display = "none";
            document.getElementById('login').style.display = "none";
        }else{
            document.getElementById('logout').style.display = "none";
        }
    }

    handleLogout = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('isLogin')
        window.location.reload();
    }
    
    render() {
        return (
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <Link to='/' className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src="/images/logo.png" className="bi me-2" width="60" height="40" alt="logo" />
                        Udemy
                    </Link>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <TrySearch/>
                        </li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <Link to="/login" id="signup" className="btn btn-outline-primary me-2">Login</Link>
                        <Link to="/signup" id="login" className="btn btn-primary">Sign-up</Link>
                        <button className="btn btn-primary" id="logout" onClick={this.handleLogout}>Logout</button>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header