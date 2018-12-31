import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'

const Image = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Logo = () => (<Image src={logo} alt="logo" />)

export default Logo
