import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Container, Title } from "../src"

storiesOf("Container", module)
    .add("Default", () => <Container>
        <Title>Hello Title in Container</Title>
    </Container>)