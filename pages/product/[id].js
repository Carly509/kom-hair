import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import SingleProduct from '../../components/SingleProduct';

export default function ProductScreen() {
    const router = useRouter()
    const { id } = router.query;
    const product = data.products.find(p => p.id == id);
    if (!product) {
        return <h1>Product not found</h1>
    }
    return (
       <Layout title={product.name} description={product.description}>
            <SingleProduct id={id} />
       </Layout>
    )
}
