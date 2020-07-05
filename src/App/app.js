import React from 'react';
import "./app.scss";
import Header from "./components/Header/header.component";
import { connect } from "react-redux";
import AlgoPortal from "./components/AlgoPortal/algoPortal.component";
import {Redirect, Route, Switch} from "react-router-dom";

const mapStateToProps = state => {
    return { };
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<div className="app-root">
            <Header/>
            <Switch>
                <Route path="/portal">
                    <AlgoPortal />
                </Route>
                <Route exact path="/" render={() => <Redirect to="/portal/algodesk" />} />
            </Switch>
        </div>);
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);