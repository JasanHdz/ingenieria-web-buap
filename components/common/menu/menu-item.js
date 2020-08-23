import styled from 'styled-components'
const menux = [
  {
    title: 'Inicio',
    url: '/'
  },
  {
    title: 'Practicas',
    url: '/#practicas'
  },
  {
    title: 'Proyecto',
    url: '/proyecto'
  },
  {
    title: 'Acerca de',
    url: '/about'
  }
]
const MenuItemStyled = styled.ul`
  display: flex;
  li {
    margin-right: 20px;
    border: 1px solid;
    list-style: none;
    cursor: pointer;
  }
`

function MenuItem() {
  return (
    <MenuItemStyled>
      {menux.map((item) => (
        <li><a>{item.title}</a></li>
      ))}
    </MenuItemStyled>
  )
}

export default MenuItem