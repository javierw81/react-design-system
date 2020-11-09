import * as React from "react"
import styled from 'styled-components'
import { IStyledProps } from "./commons/StyledInterfaces"
import PropTypes from 'prop-types';

export interface IButtonProps extends IStyledProps {
	children?: React.ReactNode
	onClick?: (e: unknown) => void
}

const ButtonStyled = styled.button<IStyledProps>`
	border: 1px solid #eee;
	border-radius: 3px;
	background-color: ${props => props.primary ? props.theme.primary.color : props.secondary ? props.theme.secondary.color : "#FFFFFF"};
	cursor: pointer;
	font-size: 15px;
	padding: 3px 10px;
	margin: 10px;
}`

const Button: React.FunctionComponent<IButtonProps> = props => (
	<ButtonStyled {...(props as IStyledProps)} onClick={props.onClick}  >
		{props.children}
	</ButtonStyled>
)

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node
}

Button.defaultProps = {
	children: null,
	onClick: () => { return }
}
export default Button