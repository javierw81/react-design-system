import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Field } from "../src"



storiesOf("Field", module)
    .add("Default", () => {
        const [selectedValue, setSelectedValue] = React.useState("")

        return <>
            <Field>
                <input type="text" placeholder=" " />
                <label>Name</label>
            </Field>

            <Field>
                <select className={selectedValue != "" ? "selected" : ""} value={selectedValue} onChange={(e) => { console.log(e); setSelectedValue(e.target.value) }} >
                    <option value=""></option>
                    <option value="1">Alabama</option>
                    <option value="2">Boston</option>
                    <option value="3">Ohaio</option>
                    <option value="4">New York</option>
                    <option value="5">Washington</option>
                </select>
                <label>Countries</label>
            </Field>

            <Field>
                <textarea placeholder=" " />
                <label>Comments</label>
            </Field>
        </>
    })
    .add("required", () =>
        <>

            <Field>
                <input type="text" placeholder=" " required />
                <label>Name</label>
            </Field>

            <Field>
                <select required>
                    <option value=""></option>
                    <option value="1">Alabama</option>
                    <option value="2">Boston</option>
                    <option value="3">Ohaio</option>
                    <option value="4">New York</option>
                    <option value="5">Washington</option>
                </select>
                <label>Countries</label>
            </Field>

            <Field>
                <textarea placeholder=" " required />
                <label>Comments</label>
            </Field>
        </>
    )
