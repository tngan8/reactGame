import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


function(e) {
    return o.a.createElement("div", {
        role: "img",
        "aria-label": "click item",
        onClick: function() {
            return e.handleClick(e.id)
        },
        style: {
            backgroundImage: 'url("' + e.image + '")'
        },
        className: "click-item" + (e.shake ? " shake" : "")
    })
}

serviceWorker.unregister();
