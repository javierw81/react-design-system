import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Title, Subtitle } from "../src"

storiesOf("Titles", module)
    .add("Default", () =>
        <>
            <Title>Hello Title</Title>
            <Subtitle>Hello Subtitle</Subtitle>
        </>)
