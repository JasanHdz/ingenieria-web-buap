import React from 'react'
import styled from 'styled-components'
import TeamItem from 'components/home/team-item'

const WorkTeamStyled = styled.section`
  min-height: 100vh;
  padding-top: 55px;
  box-sizing: border-box;
  margin: 2.5rem 0;

  display: grid;
  grid-template-columns: repeat(3, 321px);
  grid-column-gap: 22px;
  grid-row-gap: 74px;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 321px); 
  }
  @media screen and (max-width: 690px) {
    grid-template-columns: 1fr;
  }
`
const team = [
  {
    url: '/images/team/luis-garcia.jpeg',
    background: 'linear-gradient(#02bafa, #5bfd70)',
    names: 'Luis García',
    email: 'galoop8@gmail.com',
    description: 'Responsable y perseverante 🧗‍♂️, lector de artículos de proyectos 📖 para conocer diversas soluciones o problemáticas presentes'
  },
  {
    url: '/images/team/julio-morales.jpeg',
    background: 'linear-gradient(#ff4f57, #ffc15d)',
    names: 'Julio Morales',
    email: 'jd_danyboy@hotmail.com',
    description: 'Paciente, amable, me gusta la fotografía 📷 y me encantan los perros 🐶.',
  },
  {
    url: '/images/team/miguel-xilo.jpeg',
    background: 'linear-gradient(#f9e44e, #ab2fbf)',
    names: 'Miguel Pérez',
    email: 'miguel.xilo@gmail.com',
    description: 'Alegre 😀, buen amigó 🤝, siempre buscando nuevos conocimientos 📚, Gamer since 95 🎮'
  },
  {
    url: '/images/team/jasan.jpg',
    background: 'linear-gradient(#5bfd70,#02bafa)',
    names: 'Jasan Hernández',
    email: 'jasan814@gmail.com',
    description: 'FullStack developer 👨‍💻, He trabajado con varias tecnologías web, también he desarrollado aplicaciones móviles 🤖 con React Native, me gusta el futbol y hacer ejercicio. 💪',
  }
]

function WorkTeam() {
  return (
    <WorkTeamStyled id="team">
      {team.map((item, index) => (
        <TeamItem
          key={index}
          url={item.url}
          background={item.background}
          names={item.names}
          description={item.description}
          email={item.email}
        />
      ))}
    </WorkTeamStyled>
  )
}

export default WorkTeam