import styled from 'styled-components'
import Link from 'next/link'

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
const MenuStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  height: inherit;
  padding: 1em 0;
  .items {
    padding: 0;
    margin: 0;
    height: inherit;
  }
  .items, li {
    color: var(--primary);
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 20px;
    list-style: none;
    cursor: pointer;
    height: 100%;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  } 
`

function Menu() {
  return (
    <MenuStyled>
      <p>LOGO</p>
      <ul className="items">
        {menux.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MenuStyled>
  )
}

export default Menu