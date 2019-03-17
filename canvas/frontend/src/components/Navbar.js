import React,{Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
class Navbar extends Component{
    logOut(e){
        //e.prventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render(){
        const loginReglink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                        SignUp
                    </Link>
                </li>
                </ul>
)
const userLink=( 
    <ul className="navbar-nav">
    <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                   
                        <Link to="" onClick={this.logOut.bind(this)} className="nav-link">
                        logOut
                        </Link>
                    
                </li>
            </ul>
        )
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                 <button className="navbar-toggler"
                 type="button"
                 data-toggle="collapse"
                 data-target="#navbar1"
                 aria-controls="navbar1"
                 aria-expanded="false"
                 area-label="Toggle navigation"
                 >
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar 1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                            Dashboard
                            </Link>
                        </li>

                    </ul>
                    {localStorage.usertoken ? userLink:loginReglink}
                    </div>
            </nav>

        )
    }
}
export default withRouter(Navbar)
