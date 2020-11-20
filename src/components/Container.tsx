import styled from 'styled-components'
import { IStyledProps } from "./commons/StyledInterfaces"

interface IContainerProps extends IStyledProps {
  fluid?: boolean
}

export const Container = styled.section<IContainerProps>`
  padding: 4em; 
  width: ${props => props.fluid ? 'auto' : props.theme.container.default}
`

