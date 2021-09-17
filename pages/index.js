import Layout from '../components/Layout'
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import data from '../utils/data'
import Link from 'next/link'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import SingleProduct from '../components/SingleProduct'

Modal.setAppElement('#__next')

export default function Home() {
  const router = useRouter()

  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={4}>
          {data.products.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                {/* it ca be a slug, user friendly url 
                <NextLink  key={item.id} href={`/product/${item.id}`} passHref>
                  <CardActionArea>
                    <CardMedia component="img" image={item.image} title={item.name} />
                    <CardContent>
                      <h2>{item.name}</h2>
                    </CardContent>
                  </CardActionArea>
                </NextLink> */}
                 <Link  key={item.id} href={`/?id=${item.id}`} as={`/product/${item.id}`} passHref>
                  <CardActionArea>
                    <CardMedia component="img" image={item.image} title={item.name} />
                    <CardContent>
                      <h2>{item.name}</h2>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions>
                  <Typography>${item.price}</Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Modal isOpen={!!router.query.id}>
       <SingleProduct id={router.query.id} />
      </Modal>
    </Layout>
  )
}
