import React from 'react';
import { Text } from 'react-native';
import { Container, Title } from './styles'

function Header(){
  return(
    <Container>
      <Title>
       World
        <Text style={{fontStyle: 'italic', color: '#E52246'}}>DEV</Text>
      </Title>
    </Container>
  )
}

export default Header;