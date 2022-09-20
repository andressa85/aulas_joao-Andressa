import React from 'react';
import styled from 'styled-components/native';
import Post from './assets/img/ola.jpg';
import IMG from './assets/img/acchiKocchi.gif';

const Imagem1 = styled.Image`
  padding-top:10px;
  width: 200px;
  height: 200px;
  border-width: 2px;
  border: 5px solid #FF4500;
  border-radius: 300px;
  padding-bottom: 15px;
`;

const Imagem2 = styled.Image`
  padding-top:10px;
  width: 200px;

`;

const Container = styled.View`
  flex: 1;
  background-color: 	#4B0082;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: #fff;
  padding-bottom: 10px;
  text-align: center;
  font-size: 23px;
`;
export default () => (
  <Container>
    <Title>Olá! :D
    </Title>
    <Imagem1 source={Post}/>
    <Imagem2 source={IMG}/>

  </Container>
);
