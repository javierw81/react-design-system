import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Alert } from "../src"

storiesOf("Alert", module)
	.add("Normal", () =>
		<>
			<p>Primary</p>
			<Alert primary >Hello Alert</Alert>
			<p>Secondary</p>
			<Alert secondary>Hello Alert</Alert>
			<p>Success</p>
			<Alert success>Hello Alert</Alert>
			<p>Danger</p>
			<Alert danger>Hello Alert</Alert>
			<p>Warning</p>
			<Alert warning>Hello Alert</Alert>
			<p>Info</p>
			<Alert info>Hello Alert</Alert>
			<p>Light</p>
			<Alert light>Hello Alert</Alert>
			<p>Dark</p>
			<Alert dark>Hello Alert</Alert>
		</>)
