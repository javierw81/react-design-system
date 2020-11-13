import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Title } from "../src"

storiesOf("Title", module)
    .add("Default", () => <Title>Hello Title</Title>)
