import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "../src"

storiesOf("Button", module)
	.add("Normal", () =>
		<>
			<p>Primary</p>
			<Button primary onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Secondary</p>
			<Button secondary onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Success</p>
			<Button success onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Danger</p>
			<Button danger onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Warning</p>
			<Button warning onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Info</p>
			<Button info onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Light</p>
			<Button light onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Dark</p>
			<Button dark onClick={() => alert('Hello!!')}>Hello Button</Button>
		</>)
	.add("Outline", () =>
		<>
			<p>Primary</p>
			<Button primary outline onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Secondary</p>
			<Button secondary outline onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Success</p>
			<Button success outline onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Danger</p>
			<Button danger outline onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Warning</p>
			<Button warning outline onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Info</p>
			<Button info outline onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Light</p>
			<Button light outline onClick={() => alert('Hello!!')}>Hello Button</Button>
			<p>Dark</p>
			<Button dark outline onClick={() => alert('Hello!!')}>Hello Button</Button>
		</>)