import React from 'react'
import styled from 'styled-components'
import Wrapper from 'common/wrapper'
import { Button } from 'common/button'
import { useRouter } from 'next/router'

const names = [
  'Garcí­a López Luis Alberto',
  'Morales Arcos Julio Daniel',
  'Pérez Xilo Miguel Ángel',
  'Hernández Bautista Jasan',
]

const ButtonStyled = styled(Button)`
  border-radius: 30px;
  margin-top: 2.5rem;
  width: 181px;
  margin-bottom: 3em;
`

const WrapperStyled = styled(Wrapper)`
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
const HeroStyled = styled.section`
  padding-top: 2.5em;
  background: url('/images/oval.png');
  background-repeat: no-repeat;
  background-size: 611.69px 767.85px;
  /* clip-path: polygon(0px 0px, 100% 0px, 100% calc(100% - 30px), 0px 100%); */
  .hero-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1.5em;
  }
  .about {
    align-self: flex-start;
    h1 {
      font-size: 32px;
      color: #283E71;
    }
    h4 {
      font-size: 21px;
      color: #1BAFAF;
      margin: .5rem 0;
    }
    .text {
      font-size: 16px;
      line-height: 21px;
      color: var(--primary);
    }
    button {
      display: none;
    }
  }
  .hero {
    text-align: center;
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 500px) {
    clip-path: none;
    .hero img {
      max-width: 560px;
    }
    .hero-container {
      grid-row-gap: 0;
    }
  }
  @media screen and (min-width: 768px) {
    .hero img {
      max-width: none;
    }
    .hero-container {
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
    .about {
      max-width: 290px;
      h1 {
        font-size: 64px;
      }
      h4 {
        font-size: 32px;
      }
      .text {
        font-size: 21px;
        line-height: 29px;
      }
      button {
        display: block;
      }
    }
    .hero button {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    padding-top: 51px;
    height: calc(100vh - 51px);
    .hero img {
      max-width: 728.4px;
    }
  }
`

function Hero() {
  const router = useRouter()
  function handleClick() {
    router.push('/#team')
  }
  return (
    <HeroStyled>
      <WrapperStyled>
        <div className="hero-container">
          <div className="about">
            <h1>Ingeniería Web</h1>
            <h4>Equipo 4</h4>
            {names.map((name, index) => (
              <p key={index} className="text">{name}</p>
            ))}
            <ButtonStyled onClick={handleClick}>Comenzar</ButtonStyled>
          </div>
          <div className="hero">
            <img width="288" src="/images/teams.png" alt="team" />
            <ButtonStyled onClick={handleClick}>Comenzar</ButtonStyled>
          </div>
        </div>
      </WrapperStyled>
    </HeroStyled>
  )
}

export default Hero