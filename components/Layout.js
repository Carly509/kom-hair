import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material'
import useStyles from '../utils/styles'
import NextLink from 'next/link'

export default function Layout({children}) {
    const classes = useStyles()
    return (
        <div>
           <Head>
               <title>KomHair</title>
            </Head>
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
            <Typography className={classes.footer}>
                Made with <span role="img" aria-label="heart">❤️</span>
                All rights reserved. KomHair
            </Typography>
        </div>
    )
}

