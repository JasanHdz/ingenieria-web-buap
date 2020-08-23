import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: ${({ maxWidth }) => maxWidth || '1280'}px;
`

function Wrapper({ maxWidth, children, ...otherProps }) {
  return (
    <WrapperStyled maxWidth={maxWidth} {...otherProps}>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper