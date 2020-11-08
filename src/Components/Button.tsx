import * as React from "react"
import styled from 'styled-components'

export interface IButtonProps {
	children?: React.ReactNode
	onClick?: (e: any) => void
}

const ButtonStyled = styled.button`
	border: "1px solid #eee",
	borderRadius: 3,
	backgroundColor: "#FFFFFF",
	cursor: "pointer",
	fontSize: 15,
	padding: "3px 10px",
	margin: 10
}`

const Button: React.FunctionComponent<IButtonProps> = props => (
	<ButtonStyled onClick={props.onClick}  >
		{props.children}
	</ButtonStyled>
)

Button.defaultProps = {
	children: null,
	onClick: () => {}
}
export default Button
