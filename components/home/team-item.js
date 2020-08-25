import React from 'react'
import styled from 'styled-components'
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'

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
  .social {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(3, 30px);
    justify-content: center;
    grid-column-gap: 2rem;
    
  }
  @media screen and (max-width: 1024px) {
    &:last-child {
      grid-column-start: initial;
    }
  }
`
function TeamItem({ url, background, names }) {
  return (
    <TeamItemStyled background={background}>
      <figure className="avatar">
        <img width="155" height="155" src={url} alt="avatar" />
      </figure>
      <h2 className="names">{names}</h2>
      <h3 className="topic">Estudiante en Tecnologías de la información</h3>
      <h4 className="about">Sobre mí</h4>
      <p className="description">lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu </p>
      <div className="separator"></div>
      <div className="social">
        <a><AiFillTwitterSquare size={30} /></a>
        <a><AiFillInstagram size={30} /></a>
        <a><IoLogoFacebook size={30} /></a>
      </div>
    </TeamItemStyled>
  )
}

export default TeamItem