import styled, { css } from "styled-components"
import { theme } from "../../theme"

export default function Button({ label, Icon, className, version = "default", onClick }) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`

  ${({ version }) => extraStyle[version]}
`

const extraPrimaryStyle = css`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.black};

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    transition: all 200ms ease-out;
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
 `


const extraSuccessStyle = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`

const extraStyle = {
  default: extraPrimaryStyle,
  success: extraSuccessStyle,
}