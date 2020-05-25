import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            modalIsOpen : false
        }; 
    }
    openModalHandler = () =>{
        this.setState({modalIsOpen: true}); 
    }
    closeModalHandler = () =>{
        this.setState({modalIsOpen: false})
    }
    render() {
        return (
            <div>
                <header className="header">
                    <img src={logo} className="app-logo" alt="app-logo" />
                    <div className="loginBtn">
                        <Button  variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>  
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModalHandler} contentLabel="Login"> 

                </Modal>
            </div>
            
        )
    }
}

export default Header;