import React from 'react'
import styled from 'styled-components'
import TeamItem from 'components/home/team-item'

const WorkTeamStyled = styled.section`
  min-height: 100vh;
  padding-top: 55px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(3, 321px);
  grid-column-gap: 22px;
  grid-row-gap: 74px;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 321px); 
  }
  @media screen and (max-width: 690px) {
    grid-template-columns: 300px;
  }
`
const team = [
  {
    url: '/images/team/luis-garcia.jpeg',
    background: 'linear-gradient(#02bafa, #5bfd70)',
    names: 'Luis García'
  },
  {
    url: '/images/team/julio-morales.jpeg',
    background: 'linear-gradient(#ff4f57, #ffc15d)',
    names: 'Julio Morales'
  },
  {
    url: '/images/team/miguel-xilo.jpeg',
    background: 'linear-gradient(#f9e44e, #ab2fbf)',
    names: 'Miguel Pérez'
  },
  {
    url: '/images/team/jasan.jpg',
    background: 'linear-gradient(#5bfd70,#02bafa)',
    names: 'Jasan Hernández'
  }
]

function WorkTeam() {
  return (
    <WorkTeamStyled>
      {team.map((item, index) => (
        <TeamItem
          key={index}
          url={item.url}
          background={item.background}
          names={item.names}
        />
      ))}
    </WorkTeamStyled>
  )
}

export default WorkTeam