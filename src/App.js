import React, {Component} from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'
import Layout from "containers/Layout";
import Phone from "./containers/Phone";
import NotFound from "./containers/NotFound";
import Phones from "./containers/Phones";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

library.add(faCartPlus, faSearch);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

class App extends Component {

    render() {
        const withLayout = Component => {
            return props => {
                return <Layout><Component {...props} /></Layout>
            }
        };

        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route path="/" component={withLayout(Phones)} exact/>
                        <Route path="/phones/:id" component={Phone}  exact/>
                        <Route component={NotFound}/>
                    </Switch>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
