import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Product = ({ name, img, price, quantity: initialQuantity, description }) => {
    const [liked, setLiked] = useState(false);
    const [quantity, setQuantity] = useState(initialQuantity);
    const soldOutImage = '/images/sold_out.png';
    const imageToDisplay = quantity === 0 ? soldOutImage : img;
    const isSoldOut = quantity === 0;

    const handleLike = () => {
        setLiked(true);
    };

    const handleDislike = () => {
        setLiked(false);
    };

    const handleBuy = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <Col md={4} className="mb-4">
            <Card className={isSoldOut ? "opacity-50" : ""}>
                <Card.Img variant="top" src={imageToDisplay} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: {price} TND</Card.Text>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Likes: {liked ? 1 : 0}</Card.Text>

                    <Button variant="success" onClick={handleLike} className="me-2" disabled={isSoldOut}>
                        Like
                    </Button>
                    <Button variant="danger" onClick={handleDislike} className="me-2" disabled={isSoldOut}>
                        Dislike
                    </Button>
                    <Button variant="primary" onClick={handleBuy} disabled={isSoldOut}>
                        Buy Product
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
