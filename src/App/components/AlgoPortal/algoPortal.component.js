import React from 'react';
import "./algoPortal.scss";
import Home from "../Home/home.component";
import {Switch, Route} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

class AlgoPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <div className="algodesk-portal-wrapper">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} xl={12}>
                    <div className="algodesk-portal-container">
                        <Switch>
                            <Route exact path="/portal/home">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Grid>
            </Grid>
        </div>;
    }
}

export default AlgoPortal;