import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styled from "styled-components"
import { AbiInput, AbiItem, AbiOutput } from "web3-utils"
import { Button, Form } from "react-bootstrap"

interface Props {
  abiItem: AbiItem
}

const mapInputs = (input: AbiInput[] | undefined): string => {
  if (!input) {
    return ""
  }
  const result = input.reduce((previous: any, current: AbiInput, index: number) => {
    return index === 0 ? `${current.type} ${current.name}` : `${previous}, ${current.type} ${current.name}`
  }, "")
  return result
}

const mapOutputs = (output: AbiOutput[] | undefined): string => {
  if (!output) {
    return ""
  }
  const result = output.reduce((previous: any, current: AbiInput, index: number) => {
    return index === 0 ? `${current.type} ${current.name}` : `${previous}, ${current.type} ${current.name}`
  }, "")
  return result
}

interface HashMapOfValues {
  [index: number]: string
}

export const ContractForm: React.FC<Props> = ({ abiItem }) => {
  const { name, inputs, outputs } = abiItem
  const initialValues: HashMapOfValues = {}

  const functionName = name
  const inputStrings = mapInputs(inputs)
  const outputStrings = mapOutputs(outputs)
  const [fields, setField] = useState(initialValues)

  const [isCalling, setIsCalling] = useState(false)

  return (
    <React.Fragment>
      {/* <Container style={{ marginTop: '0' }}>
                <Tag color="blue">function</Tag>
                <p style={{ color: 'white', margin: '0', display: 'inline', fontSize: '0.9em' }}>
                    {name}
                    <span>
                        ({inputStrings.trim()}): returns ({outputStrings})
          </span>
                </p>
            </Container> */}
      <Row>
        <Col>
          <Form>
            {inputs &&
              inputs.map((item, index) => {
                return (
                  <Form.Group key={index}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" size="sm" placeholder={`${item.type} ${item.name}`} />
                  </Form.Group>
                  // <StyledInput
                  //     value={fields[index]}
                  //     onChange={e => {
                  //         console.log('Index', index)
                  //         setField({ ...fields, [index]: e.target.value })
                  //     }}
                  //     key={index}
                  //     size="small"
                  //     style={{ width: '35%' }}
                  //     type="text"
                  //     placeholder={`${item.type} ${item.name}`}
                  // />
                )
              })}
          </Form>
          {/* <StyledInputGroup> */}

          {/* </StyledInputGroup> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => setIsCalling(true)} type="primary">
            {isReadOnlyFunction(abiItem) ? "Call" : "Send"}
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  )
}

const isReadOnlyFunction = (abi: AbiItem | undefined) => {
  if (!abi || !abi.stateMutability) {
    return true
  }
  const readOnlyModifiers = ["pure", "view", "constant"]
  return readOnlyModifiers.indexOf(abi.stateMutability) > -1
}

// const StyledInputGroup = styled(InputGroup)`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `

// const StyledInput = styled(Input)`
//   display: block;
//   margin-top: 1em;
//   font-size: 0.8em;
// `
// const StyledButton = styled(Button)`
//   height: 26px;
//   font-size: 0.8em;
//   margin-top: 1em;
//   width: 7em;
// `
// const Container = styled.div`
// margin: 0;
// `
