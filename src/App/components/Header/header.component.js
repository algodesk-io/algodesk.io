import React from 'react';
import "./header.scss"
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
    primaryText: {
        color: theme.palette.primary.dark
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
                    <Grid item xs={2} sm={2} md={2} xl={2}>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} xl={8}>
                        <div className={"logo"}>
                            <span className={classes.primaryText}>Algodesk.io</span>
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} xl={2}>
                            <Button variant="text"
                                    color={"primary"}
                                    style={{marginTop: 10, fontWeight: 'bold'}}
                                    onClick={() => {
                                        window.location.href = "mailto:admin@algodesk.io";
                                    }}
                            >
                                admin@algodesk.io
                            </Button>
                        <Button variant="text"
                                color={"primary"}
                                style={{marginTop: 10, fontWeight: 'bold'}}
                                onClick={() => {
                                    window.open('https://github.com/algodesk-io/algodesk.io/issues', '_blank');
                                }}
                        >
                            Report issues
                        </Button>
                    </Grid>
                </Grid>

            </div>
        </div>);
    }
}
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));