import React from 'react';
import "./home.scss"
import {connect} from "react-redux";
import {Button, Icon, FormControl, TextField} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from "@material-ui/core/Grid";
import { withTheme } from '@material-ui/core/styles';

const mapStateToProps = state => {
    return { };
};

function getPage() {
    return (<div className="home-wrapper">
        <div className="home-container">
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} xl={4}>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={10} xl={10}>
                            <div className={"intro"}>Build. Test. Execute</div>
                            <div className={"sub-intro"}>Algodesk provides open-source and developer-friendly tools to build decentralized apps and smart contracts on Algorand network.</div>
                        </Grid>
                        <Grid item xs={12} md={10} xl={10}>
                            <FormControl>
                                <Button fullWidth variant="contained" color="primary" className="home-button" onClick={() => {
                                    window.open('/asa', '_blank')
                                }}>
                                    Asset Management
                                </Button>
                            </FormControl>
                            <FormControl>
                                <Button fullWidth variant="contained" color="primary"
                                        className="home-button"
                                        style={{marginLeft: '20px', textTransform: "capitalize"}}
                                        onClick={() => {
                                    window.open('/teal', '_blank')
                                }}>
                                    TEAL Editor
                                </Button>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={1} xl={1}>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3} xl={4}>

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