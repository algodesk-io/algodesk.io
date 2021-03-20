import React from 'react';
import "./home.scss"
import {connect} from "react-redux";
import {Button, Icon, FormControl, TextField} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from "@material-ui/core/Grid";
import { withTheme } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SubjectIcon from '@material-ui/icons/Subject';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import BugReportIcon from '@material-ui/icons/BugReport';
import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({
    primaryText: {
        color: theme.palette.primary.dark,
    },
    primaryBackColor: {
        backgroundColor: theme.palette.primary.dark,
    },
    appIcon: {
        verticalAlign: 'middle',
        marginRight: 5
    }
});

const mapStateToProps = state => {
    return { };
};

function getPage() {
    const {classes} = this.props;
    const width = 5;
    return (<div className="home-wrapper">
        <div className="home-container">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2} md={2} xl={2}></Grid>
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                            <div className={"intro"}>
                                Create Assets & build Dapps on Algorand network
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={width} md={width} xl={width}>
                            <Button variant="contained" color="primary"
                                    size={"large"}
                                    fullWidth
                                    style={{textTransform: "capitalize"}}
                                    className="home-button" onClick={() => {
                                window.open('https://asa.algodesk.io', '_blank');
                            }}>
                                Asset Manager
                            </Button>









                        </Grid>


                        <Grid item xs={12} sm={width} md={width} xl={width}>
                            <Button variant="contained" color="primary"
                                    className="home-button"
                                    fullWidth
                                    style={{textTransform: "capitalize"}}
                                    size={"large"}
                                    onClick={() => {
                                        window.open('https://applicationmanager.algodesk.io', '_blank');
                                    }}>
                                Application Manager
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={width} md={width} xl={width}>
                            <Button variant="contained" color="primary"
                                    className="home-button"
                                    fullWidth
                                    size={"large"}
                                    style={{textTransform: "capitalize"}}
                                    onClick={() => {
                                        window.open('https://teal.algodesk.io', '_blank');
                                    }}>
                                Contract Buildr
                            </Button>
                        </Grid>


                        <Grid item xs={12} sm={width} md={width} xl={width}>
                            <Button variant="contained" color="primary"
                                    className="home-button"
                                    fullWidth
                                    size={"large"}
                                    style={{textTransform: "capitalize"}}
                                    onClick={() => {
                                        window.open('https://wallet.algodesk.io', '_blank');
                                    }}>
                                Web Wallet
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <div style={{marginTop: 50}}>
                        <img src={require('../../styles/images/back2.svg')} />
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} xl={12}>
                    <div className="disclaimer">
                        <div className="disclaimer-text">

                        </div>
                     </div>
                </Grid>
            </Grid>
        </div>
    </div>);
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.getPage = getPage.bind(this);
        this.state = {
            currentImgIndex: 0,
            imgs: ['teal.png', 'wallet.png', 'apps.png']
        };

        setInterval(() => {
            if (this.state.currentImgIndex == this.state.imgs.length - 1) {
                this.setState({...this.state, currentImgIndex: 0});
            }
            else {
                this.setState({...this.state, currentImgIndex: this.state.currentImgIndex + 1});
            }
        }, 3000);
    }

    render() {
        return this.getPage();
    }
}

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));