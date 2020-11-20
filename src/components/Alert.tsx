import styled from 'styled-components'
import { IStyledProps } from "./commons/StyledInterfaces"
import { componentStyleType } from "./commons/themeUtils"

export const Alert = styled.div<IStyledProps>`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border-width:  ${props => props.theme.border.size};
	border-style: solid;
	border-radius: ${props => props.theme.border.radius};
    border-color: ${props => componentStyleType(props).soft.borderColor || ''};
    background-color: ${props => props.outline ? "#FFFFFF" : (componentStyleType(props).soft.backgroundColor || '')};
    color: ${props => props.outline ? (componentStyleType(props).soft.backgroundColor || '') : (componentStyleType(props).soft.fontColor || '')};
`
