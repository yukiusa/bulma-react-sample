/**
 * app.jp
 * @author yukiusa
 */
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import style from './app.scss'

export const Welcome = () => <div>
    <div>
        <h1 className="title is-2 mytitle">React with Bulma Sample!</h1>
        <h2 className="subtitle is-5">食用ではございません </h2>

        <nav className="nav has-shadow">
            <div className="container">
                <div className="nav-left">
                    <a className="nav-item">
                        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
                    </a>
                    <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
                    <a className="nav-item is-tab is-hidden-mobile">Features</a>
                    <a className="nav-item is-tab is-hidden-mobile">Pricing</a>
                    <a className="nav-item is-tab is-hidden-mobile">About</a>
                </div>
                <span className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className="nav-right nav-menu">
                    <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
                    <a className="nav-item is-tab is-hidden-tablet">Features</a>
                    <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
                    <a className="nav-item is-tab is-hidden-tablet">About</a>
                    <a className="nav-item is-tab">
                        <figure className="image is-16x16">
                            <img src="http://bulma.io/images/jgthms.png" />
                        </figure>
                        Profile
                    </a>
                    <a className="nav-item is-tab">Log out</a>
                </div>
            </div>
        </nav>
        <a className="button is-primary ">Primary</a>
        <progress className="progress is-danger" value="90" max="100">90%</progress>
    </div>
</div>
const app = document.getElementById('app');
ReactDOM.render( <div><Welcome /></div> , app );
