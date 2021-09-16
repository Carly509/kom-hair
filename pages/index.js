import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={4}>
          {data.products.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={item.image} title={item.name} />
                  <CardContent>
                    <h2>{item.name}</h2>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>${item.price}</Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
