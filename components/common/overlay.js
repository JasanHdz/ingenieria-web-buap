import React from 'react'
import styled from 'styled-components'

const OverlayStyled = styled.div`
  background: ${({ background }) => background || 'rgba(0,0,0, .5)'};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  position: ${({ position }) => position || 'fixed'};
  z-index: ${({ zIndex }) => zIndex || 2};
  backdrop-filter: blur(2px);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

function Overlay({ children, ...otherProps }) {
  return (
    <OverlayStyled {...otherProps}>
      {children}
    </OverlayStyled>
  )
}

export default Overlay