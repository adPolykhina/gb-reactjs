import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { store, persistor } from './Store'
import { PersistGate } from 'redux-persist/integration/react'
import { AppView } from './app'
import { Provider } from 'react-redux'

const theme = createTheme({
    pallete: {
        primary: {
            main: '#66757F',
        },
        secondary: {
            main: '#CCD6DD',
        },
        buttons: {
            main: '#E1E8ED',
        },
        text: {
            main: '#E1E8ED',
        },
        dark: {
            main: '#292f33',
        },
    },
})

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <AppView />
                </BrowserRouter>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
