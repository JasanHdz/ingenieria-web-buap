import React from 'react'
import styled from 'styled-components'
import { SecondaryButton } from 'common/button'
import { SiGmail } from 'react-icons/si'

const ButtonStyled = styled(SecondaryButton)`
  border-radius: 30px;
  border: 1px solid;
  color: #283E71;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  width: 100%;
  transition: .3s;
  box-sizing: border-box;
  svg {
    margin-left: 20px;
  }
  &:active {
    transform: scale(.8);
  }
`
const TeamItemStyled = styled.article`
  min-height: 400px;
  border: 1px solid black;
  text-align: center;
  border-radius: 14px;
  padding: 0 1rem 1rem 1rem;
  .avatar {
    margin: 0 auto;
    background: ${({ background }) => background};
    margin-top: -55px;
    width: fit-content;
    border: 7px solid rgba(40, 62, 113, .8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    padding: 7px;
    img {
      border-radius: 50%;
      object-fit: cover;
    }
  }
  :last-child {
    grid-column-start: 2;
  }
  .names {
    margin: 1rem;
    color: #283E71;
  }
  .topic, .about {
    margin-bottom: 1rem;
  }
  .separator {
    margin: 20px 0;
    border-bottom: 1px solid rgba(40, 62, 113, .5);
    width: 100%;
  }
  .description {
    line-height: 22px;
  }
  @media screen and (max-width: 1024px) {
    &:last-child {
      grid-column-start: initial;
    }
  }
`
function TeamItem({ url, background, names, description, email }) {
  return (
    <TeamItemStyled background={background}>
      <figure className="avatar">
        <img width="155" height="155" src={url} alt="avatar" />
      </figure>
      <h2 className="names">{names}</h2>
      <h3 className="topic">Estudiante en Tecnologías de la información</h3>
      <h4 className="about">Sobre mí</h4>
      <p className="description">{description}</p>
      <div className="separator"></div>
      <ButtonStyled href={`mailto:${email}`} as="a" background="#283E71">Contactar <SiGmail color="#c84f44" size={16} /></ButtonStyled>
    </TeamItemStyled>
  )
}

export default TeamItem