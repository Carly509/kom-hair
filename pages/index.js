import Layout from '../components/Layout'
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Divider } from '@mui/material'
import data from '../utils/data'
import Link from 'next/link'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import SingleProduct from '../components/SingleProduct'

Modal.setAppElement('#__next')


const customStyles = {
  content: {
    width: '50%',
    height: '70%',
    left: '25%',
    top: 120,
    borderRadius: 0,
  },
};

export default function Home() {
  const router = useRouter()

  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={4}>
          {data.products.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxHeight: 240 }}>
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
                    <Grid style={{
                      position: 'absolute', height: '15%',
                      top: '180px',
                      left: '5px',
                      color: 'black',
                      background: 'white',
                      opacity: 0.5
                      }}>
                    <CardContent style={{marginTop: -20}}>
                      <h2  style={{fontSize: 14}}>{item.name}</h2>
                    </CardContent>
                    <Divider style={{ marginTop: -25, marginLeft: 40, marginRight: 40, color: 'black', border: '1px solid #000000'}}/>
                    <CardActions style={{marginLeft: 25}}>
                  <Typography style={{fontSize: 14, fontWeight: 500}}>${item.price}</Typography>
                </CardActions>
                    </Grid>
                  </CardActionArea>
                  
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Modal isOpen={!!router.query.id}  style={customStyles}>
       <SingleProduct id={router.query.id} />
      </Modal>
    </Layout>
  )
}
