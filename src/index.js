import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'
import { AppView } from './app'

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
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <AppView />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
)
