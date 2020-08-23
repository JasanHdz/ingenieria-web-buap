import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PrimaryButton = styled.button`
  font-family: ${({ font }) => font};
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  font-weight: ${({ fontWeight }) => (fontWeight || '600')};
  ${({ fullWidth }) => (fullWidth
    ? `
      display: block;
      width: 100%;
    `
    : 'display: inline-block;')
  }
  width: ${({ width }) => width};
  font-size: 16px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-decoration: none;
  outline: 0;
  border: 0;
  padding: 0.8rem;
`

function Button({ color, disabled, background, fullWidth, fontWeight, ...otherProps }) {
  return (
    <PrimaryButton
      {...otherProps}
      color={color}
      disabled={disabled}
      background={background}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
    />
  )
}

const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  font-weight: normal;
`

Button.defaultProps = {
  color: 'var(--primaryContrast)',
  disabled: false,
  fullWidth: false,
  background: 'var(--primary)',
  font: 'var(--secondaryFont)',
}

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  background: PropTypes.string,
  font: PropTypes.string,
}

export default Button

export { Button, SecondaryButton }