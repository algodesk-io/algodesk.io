import React from 'react';
import "./header.scss"
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
    primaryText: {
        color: theme.palette.primary.main
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
        const { classes } = this.props;

        return (<div className="header-wrapper">
            <div className="header-container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} xl={4}>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <div className={classes.primaryText + " logo"}>
                            Algodesk.io
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>);
    }
}
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));