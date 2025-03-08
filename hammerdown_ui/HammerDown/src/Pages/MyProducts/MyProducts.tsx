import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import './MyProducts.css';

type Product = {
  id: number;
  name: string;
  description: string;
  details: string;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for product 1.',
    details: 'Details of product 1.',
    imageUrl: 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description for product 2.',
    details: 'Details of product 2.',
    imageUrl: 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png',
  },
  // Add more products as needed
];


const MyProducts = (props: Props) => {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card style={{ display: 'flex' }}>
              <CardMedia
                component="img"
                style={{ width: 160 }}
                image={product.imageUrl}
                alt={product.name}
                loading="lazy" // Add lazy loading
              />
              <CardContent style={{ flex: '1 0 auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.details}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  Bid
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MyProducts