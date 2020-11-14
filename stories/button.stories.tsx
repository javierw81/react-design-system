import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "../src"

storiesOf("Button", module)
	.add("Primary", () =>
		<>
			<p>Normal</p>
			<Button primary>Hello Button</Button>

			<p>Outline</p>
			<Button primary outline>Hello Button</Button>
		</>)
	.add("Secondary", () =>
		<>
			<p>Normal</p>
			<Button secondary>Hello Button</Button>

			<p>Outline</p>
			<Button secondary outline>Hello Button</Button>
		</>)
	.add("success", () =>
		<>
			<p>Normal</p>
			<Button success>Hello Button</Button>

			<p>Outline</p>
			<Button success outline>Hello Button</Button>
		</>)

	.add("danger", () =>
		<>
			<p>Normal</p>
			<Button danger>Hello Button</Button>

			<p>Outline</p>
			<Button danger outline>Hello Button</Button>
		</>)
	.add("warning", () =>
		<>
			<p>Normal</p>
			<Button warning>Hello Button</Button>

			<p>Outline</p>
			<Button warning outline>Hello Button</Button>
		</>)
	.add("info", () =>
		<>
			<p>Normal</p>
			<Button info>Hello Button</Button>

			<p>Outline</p>
			<Button info outline>Hello Button</Button>
		</>)
	.add("light", () =>
		<>
			<p>Normal</p>
			<Button light>Hello Button</Button>

			<p>Outline</p>
			<Button light outline>Hello Button</Button>
		</>)
	.add("dark", () =>
		<>
			<p>Normal</p>
			<Button dark>Hello Button</Button>

			<p>Outline</p>
			<Button dark outline>Hello Button</Button>
		</>)