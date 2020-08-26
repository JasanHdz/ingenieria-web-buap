import React from 'react'
import styled from 'styled-components'

const ArrowStyled = styled.div`
  position: relative;
  padding-top: 84px;
  &::after {
    content: '';
    position: absolute;
    background: url('/images/arrow-bottom.svg');
    width: 100%;
    height: 84px;
    left: 0;
    top: 0;
    right: 0;
    background-size: cover;
  }
`

function Arrow() {
  return <ArrowStyled />
}

export default Arrow