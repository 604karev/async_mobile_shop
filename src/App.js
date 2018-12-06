import React, {Component} from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="App">
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
