import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 20px;
`;
const Image = styled.img`
  border: 2px solid #d4d3d3;
  width: 90px;
  height: 90px;
  object-fit: cover;
`;
const InfoWrapper = styled.div`
  margin-left: 20px;
`;
const Name = styled.h1`
  font-size: 14px;
`;
const Discount = styled.h2`
  font-size: 9px;
  color: #c7c4c4;
`;
const Price = styled.h2`
  font-size: 10px;
  font-weight: bold;
`;

interface IProduct {
  name: string;
  id: number;
  imageUrl: string;
  listPrice: number;
  sellingPrice: number;
}

interface IFetch {
  res: IProduct[];
}

const CartProduct = () => {
  const [products, setPRoducts] = useState<any | null>([]);
  [];

  useEffect(() => {
    axios
      .get<IFetch>('http://localhost:3001/items?_page=1&_limit=4')
      .then((res) => {
        console.log(res);
        setPRoducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {products.map((product: IProduct) => {
        return (
          <Container key={product.id}>
            <Image src={product.imageUrl} />
            <InfoWrapper>
              <Name>{product.name}</Name>
              <Discount>R$ {product.listPrice}</Discount>
              <Price>R$ {product.sellingPrice}</Price>
            </InfoWrapper>
          </Container>
        );
      })}
    </div>
  );
};

export default CartProduct;
