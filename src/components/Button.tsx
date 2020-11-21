import styled from 'styled-components'
import { IStyledProps } from "./commons/StyledInterfaces"
import { componentStyleType } from "./commons/themeUtils"

export const Button = styled.button<IStyledProps>`
	border-width:  ${props => props.theme.border.size};
	border-style: solid;
	border-radius: ${props => props.theme.border.radius};
	border-color: ${props => componentStyleType(props).borderColor || ''};
	background-color: ${props => props.outline ? "#FFFFFF" : (componentStyleType(props).backgroundColor || '')};
	color: ${props => props.outline ? (componentStyleType(props).backgroundColor || '') : (componentStyleType(props).fontColor || '')};
	cursor: pointer;
	font-size: 15px;
	padding: 3px 10px;
	margin: 10px;
	:hover {
		border-color: ${props => componentStyleType(props).hover.borderColor || ''};
		background-color: ${props => componentStyleType(props).hover.backgroundColor || ''};
		color: ${props => componentStyleType(props).hover.fontColor || ''};
	}
`
