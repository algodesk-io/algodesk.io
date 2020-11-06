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

const mapStateToProps = state => {
    return { };
};

function getPage() {
    return (<div className="home-wrapper">
        <div className="home-container">
            <Grid container spacing={2}>
                <Grid item xs={12} md={2} xl={2}></Grid>
                <Grid item xs={12} md={4} xl={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                            <div className={"intro"}>Build. Test. Deploy</div>
                            <div className={"sub-intro"}>Algodesk provides open-source and developer-friendly tools to build decentralized apps and smart contracts on Algorand network.</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                                <Button fullWidth variant="contained" color="primary"
                                        className="home-button"
                                        style={{textTransform: "capitalize"}}
                                        startIcon={<AppsIcon></AppsIcon>}
                                        onClick={() => {
                                            window.open('/app-manager', '_blank')
                                        }}>
                                    Application Manager
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                                <Button fullWidth variant="contained" color="primary"
                                        className="home-button"
                                        style={{textTransform: "capitalize"}}
                                        startIcon={<SubjectIcon></SubjectIcon>}
                                        onClick={() => {
                                            window.open('/teal', '_blank')
                                        }}>
                                    TEAL IDE Editor
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                            <Button fullWidth variant="contained" color="secondary"
                                    style={{textTransform: "capitalize"}}
                                    startIcon={<AccountBalanceWalletIcon></AccountBalanceWalletIcon>}
                                    className="home-button" onClick={() => {
                                window.open('/asa', '_blank')
                            }}>
                                Asset Management
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} xl={6}>
                                <Button fullWidth variant="contained" color="secondary"
                                        className="home-button"
                                        style={{textTransform: "capitalize"}}
                                        startIcon={<AccountBalanceWalletIcon></AccountBalanceWalletIcon>}
                                        onClick={() => {
                                            window.open('/wallet', '_blank')
                                        }}>
                                    Web Wallet
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                                <Button fullWidth variant="outlined" color="primary"
                                        className="home-button"
                                        onClick={() => {
                                            window.location.href = "mailto:admin@algodesk.io";
                                        }}
                                >
                                    admin@algodesk.io
                                </Button>
                        </Grid>
                        <Grid item xs={12} md={1} xl={1}>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3} xl={4}>
                    <div className='algo-logo'>
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
        };
    }

    render() {
        return this.getPage();
    }
}

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Home));