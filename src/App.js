import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
        </a>

        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Company</a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
                </ul>
            </div>
        </div>

        <div id="main">
            <div className="header">
                <h1>Page Title</h1>
                <h2>A subtitle for your page goes here</h2>
            </div>

            <div className="content">
                <h2 className="content-subhead">How to use this layout</h2>
                <p>
                    To use this layout, you can just copy paste the HTML, along with the CSS in <a href="/css/layouts/side-menu.css" alt="Side Menu CSS">side-menu.css</a>, and the JavaScript in <a href="/js/ui.js">ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> class that makes the menu responsive.
                </p>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
