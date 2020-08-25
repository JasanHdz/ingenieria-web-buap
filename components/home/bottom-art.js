import React from 'react'
import styled from 'styled-components'

const BottomStyled = styled.div`
  min-height: 100vh;
  margin-top: 40px;
  box-sizing: border-box;
  background: url('/images/wave.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  overflow: hidden;
  .circle {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      background-color: #C6F4FF;
      z-index: -1;
      border-radius: 50%;
      width: 250px;
      height: 250px;
      bottom: 85px;
      right: -125px;
    }
  }
  @media screen and (min-width: 375px) {
    .circle::after {
      bottom: 100px;
    }
  }
  @media screen and (min-width: 768px) {
    .circle::after {
      bottom: 190px;
    }
  }
  @media screen and (min-width: 1024px) {
    .circle::after {
      width: 306px;
      height: 306px;
      right: -153px;
      bottom: 260px;
    }
  }
  @media screen and (min-width: 1125px) {
    .circle::after {
      right: -253px;
      bottom: 340px;
      width: 506px;
      height: 506px;
    }
  }
`

function BottomArt({ children }) {
  return (
    <BottomStyled>
      {children}
      <div className="circle" />
    </BottomStyled>
  )
}

export default BottomArt