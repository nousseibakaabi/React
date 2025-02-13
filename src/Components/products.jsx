import React, { useState, useEffect } from 'react';
import { Row, Alert } from 'react-bootstrap';
import Product from './product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        fetch('/src/data/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Erreur lors du chargement des produits:", error));

        setTimeout(() => setShowWelcome(false), 3000);
    }, []);

    const toggleLike = (index) => {
        setProducts((prevProducts) =>
            prevProducts.map((product, i) =>
                i === index ? { ...product, like: product.like ? 0 : 1 } : product
            )
        );
    };

    return (
        <>
            {showWelcome && <Alert variant="success">Welcome</Alert>}
            <Row>
                {products.map((product, index) => (
                    <Product
                        key={index}
                        {...product}
                        toggleLike={() => toggleLike(index)}
                    />
                ))}
            </Row>
        </>
    );
};

export default Products;

