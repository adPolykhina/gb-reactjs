import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { store } from './Store'
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
    },
})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppView />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
