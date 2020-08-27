import styled from 'styled-components'
import React from 'react'
import Menu from 'common/menu/menu'
import Wrapper from 'common/wrapper'
import Overlay from 'common/overlay'
import { GrMenu, GrClose } from 'react-icons/gr'

const WrapperStyled = styled(Wrapper)`
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`
const OverlayStyled = styled(Overlay)``

const MenuStyled = styled(Menu)``

const NavigationStyled = styled.header`
  padding: 1em 0;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background: ${({ background }) => background};
  color : ${({ color }) => color ? color : 'var(--primary)'};
  .toggle-button {
    position: relative;
    float: right;
    z-index: 3;
    right: 0;
    top: 0;
    cursor: pointer;
    .close {
      display: none;
    }
  }
  .checkbox {
    display: none;
  }
  .checkbox:checked {
    ~ .toggle-button {
      .close {
        display: inline-block;
        @media screen and (min-width: 768px) {
          display: none;
        }
      }
      .burger {
        display: none;
      }
    }
    ~ ${OverlayStyled} {
      visibility: visible;
      @media screen and (min-width: 768px) {
        visibility: hidden;
      }
    }
    ~ ${MenuStyled} {
      transform: translateX(0);
    }
  }
  @media screen and (min-width: 768px) {
    padding: 0;
    .burger {
      display: none;
    }
  }
`

function Navigation({ background, color }) {
  return (
    <NavigationStyled background={background} color={color}>
      <WrapperStyled>
        <input type="checkbox" className="checkbox" id="toggle-button" />
        <label htmlFor="toggle-button" className="toggle-button">
          <GrMenu className="burger" size={25} color="white" />
          <GrClose className="close" size={25} color="white" />
        </label>
        <OverlayStyled />
        <MenuStyled />
      </WrapperStyled>
    </NavigationStyled>
  )
}

export default Navigation