import React from 'react'
import styled from 'styled-components'
import { FcSearch } from 'react-icons/fc'

const EmptyStyled = styled.div`
  text-align: center;
  width: 100%;
  color: var(--dark)
`

function ListEmpty() {
  return (
    <EmptyStyled>
      <FcSearch size={40} />
      <h2>No encontramos lo que buscabas! 😢</h2>
    </EmptyStyled>
  )
}

export default ListEmpty