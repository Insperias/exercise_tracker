import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render(){
        return (
            <nav className="Nav navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Трекер упражнений</Link>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav nav-item-wrapper me-auto my-2 my-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Упражнения</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Создать упражнение</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">Создать пользователя</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}