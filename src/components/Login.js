import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup';

const link="signup";

class Login extends Component{
    render(){
        return(
            <div className="div1">
                <h2>Login</h2><hr/>
                <form>
                <input type="text" placeholder="Enter username..." className="txtbox" defaultValue=""/><br/>
                <br/>
                <input type="password" placeholder="Enter password..." className="txtbox" defaultValue=""/><br/>
                <br/>
                <small>You can join us now by <a href={link}>Sign Up</a>
                </small><br/><br/>
                <button className="butn">Login</button>
                </form>
            </div>
        );
    };

}

export default Login;