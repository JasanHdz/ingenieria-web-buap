import Navigation from 'common/menu/navigation'
import styled from 'styled-components'

const H1Styled = styled.h1`
  margin-top: 81px;
`

function Project() {
  return (
    <>
      <Navigation background="var(--primary)" color="white" />
      <H1Styled>Proyecto no definido aún</H1Styled>
    </>
  )
}

export default Project