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
    const width =6;
    return (<div className="home-wrapper">
        <div className="home-container">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2} md={2} xl={2}></Grid>
                <Grid item xs={12} sm={4} md={4} xl={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12} xl={12}>
                            <div className={"intro"}>Build. Test. Deploy
                            </div>
                            <div className={"sub-intro "}>Algodesk provides open-source and developer-friendly tools to build decentralized apps and smart contracts on Algorand network.</div>
                        </Grid>
                        <Grid item xs={12} sm={width} md={width} xl={width}>
                                <Button fullWidth variant="contained" color="primary"
                                        className="home-button"
                                        style={{textTransform: "capitalize",marginTop: 50}}
                                        startIcon={<AppsIcon></AppsIcon>}
                                        onClick={() => {
                                            window.open('https://applicationmanager.algodesk.io', '_blank');
                                        }}>
                                    Application Manager
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={width} md={width} xl={width}>
                                <Button fullWidth variant="outlined" color="primary"
                                        className="home-button"
                                        style={{textTransform: "capitalize",marginTop: 50}}
                                        startIcon={<SubjectIcon></SubjectIcon>}
                                        onClick={() => {
                                            window.open('https://teal.algodesk.io', '_blank');
                                        }}>
                                    TEAL IDE
                                </Button>
                        </Grid>
                        <Grid item xs={12} sm={width} md={width} xl={width}>
                            <Button fullWidth variant="contained" color="primary"
                                    style={{textTransform: "capitalize",marginTop: 0}}
                                    startIcon={<CallToActionIcon></CallToActionIcon>}
                                    className="home-button" onClick={() => {
                                window.open('https://asa.algodesk.io', '_blank');
                            }}>
                                Asset Manager
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={width} md={width} xl={width}>
                                <Button fullWidth variant="outlined" color="primary"
                                        className="home-button"
                                        style={{textTransform: "capitalize",marginTop: 0}}
                                        startIcon={<AccountBalanceWalletIcon></AccountBalanceWalletIcon>}
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
                        <svg className="landing-page__bg" width="661" height="573" viewBox="0 0 661 573" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M301.972 460.59H459.711L374.445 553H217.555L301.972 460.59Z"
                                  fill="#EFF1FF"></path>
                            <path opacity="0.4" d="M585.269 95.2073H660.886L620.011 140.163H544.801L585.269 95.2073Z"
                                  fill="#EBEEFF"></path>
                            <path opacity="0.5" d="M90.1233 373.915H177.864L130.436 426.012H43.1665L90.1233 373.915Z"
                                  fill="#F4F6FF"></path>
                            <path opacity="0.7" d="M245.223 357.66H464.593L346.012 485.785H127.822L245.223 357.66Z"
                                  fill="#EBEEFF"></path>
                            <path opacity="0.6" d="M532.162 232.02H654.938L588.571 304.449H466.456L532.162 232.02Z"
                                  fill="#EFF1FF"></path>
                            <path opacity="0.5" d="M536.924 369.634H612.541L571.666 414.59H496.456L536.924 369.634Z"
                                  fill="#F4F6FF"></path>
                            <path opacity="0.4" d="M113.243 107.654H188.86L147.985 152.61H72.7747L113.243 107.654Z"
                                  fill="#EBEEFF"></path>
                            <path opacity="0.5" d="M330.845 158.854H477.2L398.087 245.02H252.519L330.845 158.854Z"
                                  fill="#F4F6FF"></path>
                            <path opacity="0.5" d="M508.327 0H636L566.986 75H440L508.327 0Z" fill="#F4F6FF"></path>
                            <path opacity="0.5" d="M64.4925 502H185L119.859 573H0L64.4925 502Z" fill="#F4F6FF"></path>
                            <path opacity="0.7" d="M602.805 205.808H152.133L33.6135 333.933H484.286L602.805 205.808Z"
                                  fill="#EBEEFF"></path>
                            <path opacity="0.7" d="M293.465 53.9561H512.026L393.989 182.081H175.254L293.465 53.9561Z"
                                  fill="#E6EAFF"></path>
                            <path opacity="0.43" d="M273.266 9H374.089L319.589 67.6927H219.309L273.266 9Z"
                                  fill="#F4F6FF"></path>
                        </svg>
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