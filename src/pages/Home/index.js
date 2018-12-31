import React from 'react'

import Logo from './Logo'
import P from './P'
import Container from './Container';
import Link from './Link';
import Header from './Header';

const Home = () => (
  <Container>
    <Header>
      <Logo />
      <P>
        Hello world!
      </P>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Header>
  </Container>
)

export default Home