import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "../src"

storiesOf("Button", module)
	.add("Default", () => <Button>Hello Button</Button>)
	.add("Primary", () => <Button primary>Hello Button</Button>)
	.add("Secondary", () => <Button secondary>Hello Button</Button>)
	.add("with some emoji", () => <Button>😀 😎 👍 💯</Button>)