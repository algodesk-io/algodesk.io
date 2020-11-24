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

const mapStateToProps = state => {
    return { };
};

function getPage() {
    return (<div className="home-wrapper">
        <div className="home-container">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2} md={2} xl={2}></Grid>
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                            <div className={"intro"}>Build. Test. Deploy
                             {/*<AutorenewIcon className={'main-icon'} color={"primary"} fontSize={"large"}></AutorenewIcon>*/}
                            </div>
                            <div className={"sub-intro"}>Algodesk provides open-source and developer-friendly tools to build decentralized apps and smart contracts on Algorand network.</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                                <Button fullWidth variant="outlined" color="primary"
                                        className="home-button"
                                        style={{textTransform: "capitalize"}}
                                        startIcon={<AppsIcon></AppsIcon>}
                                        onClick={() => {
                                            window.open('https://applicationmanager.algodesk.io', '_blank');
                                        }}>
                                    Application Manager
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                                <Button fullWidth variant="outlined" color="primary"
                                        className="home-button"
                                        style={{textTransform: "capitalize"}}
                                        startIcon={<SubjectIcon></SubjectIcon>}
                                        onClick={() => {
                                            window.open('https://teal.algodesk.io', '_blank');
                                        }}>
                                    TEAL IDE
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                            <Button fullWidth variant="contained" color="primary"
                                    style={{textTransform: "capitalize"}}
                                    startIcon={<CallToActionIcon></CallToActionIcon>}
                                    className="home-button" onClick={() => {
                                window.open('https://asa.algodesk.io', '_blank');
                            }}>
                                Asset Manager
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                                <Button fullWidth variant="contained" color="primary"
                                        className="home-button"
                                        style={{textTransform: "capitalize"}}
                                        startIcon={<AccountBalanceWalletIcon></AccountBalanceWalletIcon>}
                                        onClick={() => {
                                            window.open('https://wallet.algodesk.io', '_blank');
                                        }}>
                                    Web Wallet
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                                <Button fullWidth variant="outlined" color="secondary"
                                        className="home-button"
                                        startIcon={<BugReportIcon></BugReportIcon>}
                                        onClick={() => {
                                            window.open('https://github.com/algodesk-io/algodesk.io/issues', '_blank');
                                        }}
                                >
                                    Report issue / Request feature
                                </Button>
                        </Grid>
                        <Grid item xs={12} md={1} xl={1}>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <div>
                        {/*<img className='algo-logo' src={require('../../styles/images/' + this.state.imgs[this.state.currentImgIndex])}/>*/}
                        <img src={require('../../styles/images/Algorand.png')}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Home));