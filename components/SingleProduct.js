import React from 'react';
import data from '../utils/data';
import NextLink from 'next/link';
import { Link, Grid, List, ListItem, Typography, Button } from '@mui/material';
import useStyles from '../utils/styles'
import Image from 'next/image';

export default function SingleProduct({id}) {
    const classes = useStyles();
    const product = data.products.find(p => p.id == id);
    if (!product) {
        return <h1>Product not found</h1>
    }
    console.log(product);
    return (
        <div>
            <div className={classes.section}>
                <NextLink href="/" poassHref>
                    <Link>
                        <Typography>Back</Typography>
                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Image src={product.image} alt={product.name} width={350} height={350} layout='responsive' />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <List>
                        <ListItem>
                            <Typography>{product.name}</Typography>
                        </ListItem>
                        <ListItem>
                        <Typography>{product.price}</Typography>
                        </ListItem>
                        <ListItem>
                        <Typography>{product.description}</Typography>
                        </ListItem>
                        <ListItem>
                        <Typography><b>Category:</b> {product.category}</Typography>
                        </ListItem>
                    </List>
                    
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Stats</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{product.count>0?'in Stock' : 'Unavailable'}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant='contained' color="primary" >
                                    <Typography>Add to Cart</Typography>
                                </Button>
                            </ListItem>
                        </List>
                </Grid>
            </Grid>
        </div>
    )
}
