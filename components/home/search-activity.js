import React from 'react'
import styled from 'styled-components'

const SearchStyled = styled.input`
  margin-top: .5rem;
  font-size: .9em;
  border-radius: 30px;
  border: 1px solid;
  outline: 0;
  padding: .6em;
  width: calc(100% - 2rem);
  @media screen and (min-width: 768px) {
    box-sizing: border-box;
    width: 415px;
    font-size: 1em;
  }
`
function SearchActivity({ inputHandleChange, inputValue }) {
  return (
    <SearchStyled
      type="text"
      placeholder="Buscar actividad..."
      value={inputValue}
      onChange={inputHandleChange}
    />
  )
}

export default SearchActivity