import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/app";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from '../src/App/store';

const rootEl = document.getElementById('root');

const theme = createMuiTheme({
    typography: {
        button: {
            textTransform: 'none',
            fontFamily: 'SourceSansPro'
        }
    },
    palette: {
        primary: {
            main: '#6a1b9a'
        },
        secondary: {
            main: '#d81b60'
        }
    }
});

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </HashRouter>
        </Provider>, rootEl
    );
};

renderApp();

// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}