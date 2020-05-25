import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <img src={logo} className="app-logo" alt="app-logo" />
                    <div className="loginBtn">
                        <Button  variant="contained" color="default">Login</Button>
                    </div>  
                </header>
            </div>
            
        )
    }
}

export default Header;