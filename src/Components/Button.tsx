import * as React from "react"
import styled from 'styled-components'
import { IStyledProps } from "./commons/StyledInterfaces"
import { componentStyleType } from "./commons/themeUtils"
import PropTypes from "prop-types"

interface IButtonProps extends IStyledProps {
	children?: React.ReactNode
	onClick?: (e: unknown) => void
}

const themeButtonType = (props: any) => {
	return componentStyleType(props) || {
		fontColor: '#FFFFFF',
		backgroundColor: '#007bff',
		borderColor: '#007bff',
		hover: {
			fontColor: '#FFFFFF',
			backgroundColor: '#0069d9',
			borderColor: '#00062cc',
		}
	};
}

const ButtonStyled = styled.button<IStyledProps>`
	border-size:  ${props => props.theme.border.size};
	border-style: solid;
	border-radius: ${props => props.theme.border.radius};
	border-color: ${props => themeButtonType(props).backgroundColor || ''};
	background-color: ${props => props.outline ? "#FFFFFF" : (themeButtonType(props).backgroundColor || '')};
	color: ${props => props.outline ? (themeButtonType(props).backgroundColor || '') : (themeButtonType(props).fontColor || '')};
	cursor: pointer;
	font-size: 15px;
	padding: 3px 10px;
	margin: 10px;
	:hover {
		border-color: ${props => themeButtonType(props).hover.backgroundColor || ''};
		background-color: ${props => themeButtonType(props).hover.backgroundColor || ''};
		color: ${props => themeButtonType(props).hover.fontColor || ''};
	}
`
const Button: React.FunctionComponent<IButtonProps> = props => (
	<ButtonStyled {...(props as IStyledProps)} onClick={props.onClick}  >
		{props.children}
	</ButtonStyled>
)

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node
}

export default Button
