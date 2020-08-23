import styled from 'styled-components'
import React from 'react'
import MenuItem from './menu-item'

const NavigationStyled = styled.nav`
  display: flex;
  flex: 1;
  border: 1px solid;
  justify-content: space-between;
  position: fixed;
`

function Navigation() {
  return (
    <NavigationStyled>
      <p>LOGO</p>
      <MenuItem />
    </NavigationStyled>
  )
}

export default Navigation