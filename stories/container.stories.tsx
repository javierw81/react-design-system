import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Container, Title, Alert } from "../src"

storiesOf("Container", module)
    .add("Default", () => <Container>
        <Title>Hello Title in Container</Title>
        <Alert success>Hello Alert</Alert>
    </Container>)
    .add("Fluid", () => <Container fluid>
        <Title>Hello Title in Container</Title>
        <Alert success>Hello Alert</Alert>
    </Container>)