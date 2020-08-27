import React from 'react'
import styled from 'styled-components'
import { FcSearch } from 'react-icons/fc'

const EmptyStyled = styled.div`
  text-align: center;
  width: 100%;
`

function ListEmpty() {
  return (
    <EmptyStyled>
      <FcSearch size={40} />
      <h4>No encontramos lo que buscabas! 😢</h4>
    </EmptyStyled>
  )
}

export default ListEmpty