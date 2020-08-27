import React from 'react'
import styled from 'styled-components'
import TeamItem from 'components/home/team-item'

const WorkTeamStyled = styled.section`
  h2 {
    font-size: 18px;
    margin: .5rem 0;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 21px;
      margin: 1rem 0;
    }
  }
`
const WorkTeamList = styled.div`
  min-height: 100vh;
  padding-top: 55px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 22px;
  grid-row-gap: 74px;
  justify-content: center;
  padding-bottom: 1rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
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
    url: '/images/team/jasan.jpg',
    background: 'linear-gradient(#ff4f57, #ffc15d)',
    names: 'Jasan Hernández',
    email: 'jasan814@gmail.com',
    description: 'FullStack developer 👨‍💻, He trabajado con varias tecnologías web, también he desarrollado aplicaciones móviles 🤖 con React Native, me gusta el futbol y hacer ejercicio. 💪',
  },
  {
    url: '/images/team/julio-morales.jpeg',
    background: 'linear-gradient(#f9e44e, #ab2fbf)',
    names: 'Julio Morales',
    email: 'jd_danyboy@hotmail.com',
    description: 'Paciente, amable, me gusta la fotografía 📷 y me encantan los perros 🐶.',
  },
  {
    url: '/images/team/miguel-xilo.jpeg',
    background: 'linear-gradient(#5bfd70,#02bafa)',
    names: 'Miguel Pérez',
    email: 'miguel.xilo@gmail.com',
    description: 'Alegre 😀, buen amigó 🤝, siempre buscando nuevos conocimientos 📚, Gamer since 95 🎮'
  },
]

function WorkTeam() {
  return (
    <WorkTeamStyled id="team">
      <h2>Integrantes de Equipo</h2>
      <WorkTeamList>
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
      </WorkTeamList>
    </WorkTeamStyled>
  )
}

export default WorkTeam