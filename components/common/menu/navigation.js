import styled from 'styled-components'
import React from 'react'
import Menu from './menu'
import Wrapper from 'common/wrapper'

const WrapperStyled = styled(Wrapper)`
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`
const NavigationStyled = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`

function Navigation() {
  return (
    <NavigationStyled>
      <WrapperStyled>
        <Menu />
      </WrapperStyled>
    </NavigationStyled>
  )
}

export default Navigation