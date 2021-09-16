import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import { Link, Grid, List, ListItem, Typography, Card, Button } from '@mui/material';
import useStyles from '../../utils/styles';
import Image from 'next/image';

export default function ProductScreen() {
    const classes = useStyles();
    const router = useRouter()
    const { id } = router.query;
    const product = data.products.find(p => p.id == id);
    if (!product) {
        return <h1>Product not found</h1>
    }
    return (
       <Layout title={product.name} description={product.description}>
            <div className={classes.section}>
                <NextLink href="/" poassHref>
                    <Link>
                        <Typography>Back</Typography>
                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Image src={product.image} alt={product.name} width={640} height={640} layout='responsive' />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <List>
                        <ListItem>
                            <Typography><b>Name:</b> {product.name}</Typography>
                        </ListItem>
                        <ListItem>
                        <Typography><b>Price:</b> {product.price}</Typography>
                        </ListItem>
                        <ListItem>
                        <Typography><b>Description:</b> {product.description}</Typography>
                        </ListItem>
                        <ListItem>
                        <Typography><b>Category:</b> {product.category}</Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card>
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
                                <Button fullWidth variant='contained' color='primary'>
                                    <Typography>Add to Cart</Typography>
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
       </Layout>
    )
}
