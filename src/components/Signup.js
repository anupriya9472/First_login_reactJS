import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

const link="login";

class Signup extends Component{
    render(){
        return(
            <div className="div1">
                <h3>Sign Up</h3><hr/>
                <form>
                <input type="text" placeholder="First Name..." className="txtbox" defaultValue=""/>
                <input type="text" placeholder="Last Name..." className="txtbox" defaultValue=""/>
                <br/><br/>
                <input type="text" placeholder="Username..." className="txtbox" defaultValue=""/>
                <br/>
                <small>You can pick your Email or Mobile number as username</small>
                <br/><br/>
                <input type="password" placeholder="Password..." className="txtbox" defaultValue=""/>
                <br/><br/>
                <input type="password" placeholder="Confirm..." className="txtbox" defaultValue=""/><br/>
                <br/>
                <small>I have an account <a href={link}>Login</a>
                </small><br/>
                <button className="butn">Sign Up</button>
                </form>
            </div>
        );
    };

}

export default Signup;