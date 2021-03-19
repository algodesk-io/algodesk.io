import React from 'react';
import "./header.scss"
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import QRCode from 'qrcode.react';

const styles = (theme) => ({
    primaryText: {
        color: theme.palette.primary.main
    },
    dialog: {
        position: 'absolute',
        top: 150
    }
});

const mapStateToProps = state => {
    return { };
};

function renderModals() {
    const {classes} = this.props;

    return (<div className='all-modals'>
        {this.state.showDonateModal ?
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={this.state.showDonateModal}
                classes={{
                    paper: classes.dialog
                }}
            >
                <DialogContent>
                    <div className='wallet' style={{marginTop: 10}}>
                        <div className='wallet-header'>Algorand</div>
                        <QRCode value={'KJRDDME3ZIFJFB2M6B7ZCMEDAB6BAQLTSQASNV2NUBDCDZFBUPWWJISL5I'} size={256}/>
                        <div className='wallet-address'>
                            KJRDDME3ZIFJFB2M6B7ZCMEDAB6BAQLTSQASNV2NUBDCDZFBUPWWJISL5I
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        this.setState({...this.state, showDonateModal: false});
                    }} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog> : ''}

    </div>);
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.renderModals = renderModals.bind(this);
        this.state = {
            showDonateModal: false
        };
    }

    render() {
        const { classes } = this.props;

        return (<div className="header-wrapper">
            <div className="header-container">
                <Grid container spacing={2}>
                    <Grid item xs={2} sm={2} md={2} xl={2}>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} xl={6}>
                        <div className={"logo"}>
                            <span className={classes.primaryText}>Algodesk.io</span>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} xl={4}>
                            <Button variant="text"
                                    style={{marginTop: 10}}
                                    color={"primary"}
                                    onClick={() => {
                                        window.location.href = "mailto:admin@algodesk.io";
                                    }}
                            >
                                admin@algodesk.io
                            </Button>
                        <Button variant="text"
                                color={"primary"}
                                style={{marginTop: 10, marginLeft: 10}}
                                onClick={() => {
                                    window.open('https://github.com/algodesk-io/algodesk.io/issues', '_blank');
                                }}
                        >
                            Report issues
                        </Button>

                        <Button color={"primary"}
                                style={{marginTop: 10, marginLeft: 10}}
                                onClick={() => {
                                    console.log(42342);
                                    this.setState({...this.state, showDonateModal: true});
                                }}
                        >
                            Donate
                        </Button>

                    </Grid>
                </Grid>

            </div>
            {this.renderModals()}
        </div>);
    }
}
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));