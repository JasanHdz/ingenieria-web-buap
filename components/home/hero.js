import React from 'react'
import styled from 'styled-components'
import Wrapper from 'common/wrapper'
import { Button } from 'common/button'

const names = [
  'Garcí­a López Luis Alberto',
  'Morales Arcos Julio Daniel',
  'Perez Xilo Miguel Ángel',
  'Hernández Bautista Jasan',
]

const ButtonStyled = styled(Button)`
  border-radius: 30px;
  margin-top: 2.5rem;
  width: 181px;
`

const WrapperStyled = styled(Wrapper)`
  height: 100%;
`
const HeroStyled = styled.section`
  padding-top: 51px;
  height: calc(100vh - 51px);
  background: url('/images/oval.png');
  background-repeat: no-repeat;
  background-size: 611.69px 767.85px;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
  }
  .about {
    max-width: 290px;
    /* border: 1px solid; */
    h1 {
      font-size: 64px;
      color: #283E71;
    }
    h4 {
      font-size: 32px;
      color: #1BAFAF;
      margin: 1rem 0;
    }
    .text {
      color: var(--primary);
      font-size: 21px;
      line-height: 29px;
    }
  }
`

function Hero() {
  return (
    <HeroStyled>
      <WrapperStyled>
        <div className="container">
          <div className="about">
            <h1>Ingeniería Web</h1>
            <h4>Equipo 4</h4>
            {names.map((name, index) => (
              <p key={index} className="text">{name}</p>
            ))}
            <ButtonStyled>Comenzar</ButtonStyled>
          </div>
          <img width="728.4" height="513.07" src="/images/teams.png" alt="team" />
        </div>
      </WrapperStyled>
    </HeroStyled>
  )
}

export default Hero