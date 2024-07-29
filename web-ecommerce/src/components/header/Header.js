import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/reducers/user/userAction';
import './Header.scss';

const Header = () => {

    let userData = {};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useSelector((state)=>{
        userData = state.user;
    });

    const logOut = () => {
        dispatch(logoutUser());
        navigate('/login')
    }

    return(
        <header>
            <div className="header">
                <strong className="logo"><i className="fa fa-coffee" aria-hidden="true"></i></strong>
                <div className="form-group" style={{width:'50%'}}>
                    <input type="email" className="form-control" placeholder="What are you looking for?" />
                </div>
                <nav className="nav-content">
                    <ul className="nav-content-list">
                        <li className="nav-content-item account-login">
                            <label className="open-menu-login-account">
                                <input className="input-menu" id="open-menu-login-account" type="checkbox" name="menu" />
                                <i className="fas fa-user-circle"></i><span className="login-text">Hello, {userData.name}</span> <span className="item-arrow"></span>
                                <ul className="login-list">
                                    <li className="login-list-item"><Link to="#">My account</Link></li>
                                    <li className="login-list-item"><Link to="#">Create account</Link></li>
                                    <li className="login-list-item" onClick={logOut}>logout</li>
                                </ul>
                            </label>
                        </li>
                        <li className="nav-content-item"><Link className="nav-content-link" to="#"><i className="fas fa-heart"></i></Link></li>
                        <li className="nav-content-item"><Link className="nav-content-link" to="#"><i className="fas fa-shopping-cart"></i></Link></li>
                    </ul>
                </nav>
            </div>
            <div className="nav-container">
                <nav className="featured-category">
                    <ul className="nav-row">
                        <li className="nav-row-list"><Link to="#" className="nav-row-list-link">Dashboard</Link></li>
                        <li className="nav-row-list"><Link to="#" className="nav-row-list-link">Cart</Link></li>
                        <li className="nav-row-list"><Link to="#" className="nav-row-list-link">Order</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;