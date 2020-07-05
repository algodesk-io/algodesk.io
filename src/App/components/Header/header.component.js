import React from 'react';
import "./header.scss"
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    select: {
        '&:before': {
            borderColor:'#fff',
        },
        '&:after': {
            borderColor:'#fff',
        },
        textColor: '#fff'
    },
    icon: {
        fill: '#fff',
    },
    root: {
        textColor: '#fff',
        color: '#fff'
    }
});

const mapStateToProps = state => {
    return { };
};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="header-wrapper">
            <div className="header-container">
                <Grid container spacing={2}>
                    <Grid item xs={2} sm={2} xl={2}>
                        <div className="logo">
                            Algodesk.io
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={8} xl={8}></Grid>
                    <Grid item xs={2} sm={2} xl={2}>

                    </Grid>
                </Grid>

            </div>
        </div>);
    }
}
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));