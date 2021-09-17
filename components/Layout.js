import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, ThemeProvider,
    CssBaseline, Container, Link, createTheme } from '@mui/material'
import useStyles from '../utils/styles'
import NextLink from 'next/link'
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({title, description, children}) {
    const { state, dispatch } = React.useContext(Store)
    const {darkMode} = state;

    const darkModeChangeHandler = () => {
        dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
        const newDarkMode = !darkMode;
        Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
      };

    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#9B1F78',
            },
            secondary: {
                main: '#FFCD00',
            },
        },
    })
    const classes = useStyles()
    return (
        <div>
           <Head>
               <title>{title? `${title} - KomHair` : 'KomHair'}</title>
               { description && <meta name="description" content={description} /> }
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link>
                            <Typography variant="h6" className={classes.brand}> KomHair</Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        <div>
                            <NextLink href="/Login" passHref>
                                <Link> Login </Link>
                            </NextLink>
                            <NextLink href="/about" passHref>
                                <Link>About </Link>
                            </NextLink>
                            <NextLink href="/cart" passHref>
                                <Link>Cart</Link>
                            </NextLink>
                        </div>
                    </Toolbar>
                </AppBar>
                <Container  className={classes.main}>
                    {children}
                </Container>
                <footer className={classes.footer}>
                    <Typography>
                        Made with <span role="img" aria-label="heart">❤️</span>
                        All rights reserved. KomHair
                    </Typography>
                </footer>
            </ThemeProvider>
        </div>
    )
}

