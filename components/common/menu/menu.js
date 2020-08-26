import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menux = [
  {
    title: 'Inicio',
    url: '/'
  },
  {
    title: 'Prácticas',
    url: '/#practicas'
  },
  {
    title: 'Proyecto',
    url: '/proyecto'
  },
  {
    title: 'Equipo',
    url: '/#team'
  }
]

const Li = styled.li`
  background: ${({ hover }) => hover && '#283E71'};
`

const MenuStyled = styled.nav`
  height: inherit;
  padding: 1em 0;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  transform: translateX(250px);
  transition: 0.3s transform;
  background: var(--primary);
  height: 100vh;
  max-width: 200px;
  width: 100%;
  .items {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 10px;
    padding-left: 0;
  }
  .items li {
    color: white;
    border-bottom: 1px solid;
    list-style: none;
    cursor: pointer;
    background: attr(hover);
    :hover {
      background: #283E71;
    }
  }
  li, .logo {
    padding: 1em;
  }
  .logo {
    margin-top: 1.5em;
  }
  @media screen and (min-width: 768px) {
    position: initial;
    background: initial;
    height: inherit;
    transform: translateX(0px);

    max-width: initial;
    display: flex;
    justify-content: space-between;
    .items {
      color : var(--primary);
      display: flex;
      padding: 0;
    }
    .items li {
      color: inherit;
      border-bottom: none;
    }
    .logo {
      margin-top: 0;
    }
  } 
`

function Menu({ className }) {
  const pathname = useRouter().asPath
  return (
    <MenuStyled className={className}>
      <p className="logo">LOGO</p>
      <ul className="items">
        {menux.map((item, index) => (
          <Li hover={pathname === item.url} key={index}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
          </Li>
        ))}
      </ul>
    </MenuStyled>
  )
}

export default Menu