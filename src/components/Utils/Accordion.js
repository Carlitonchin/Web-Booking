import { Accordion, Col, Row } from "react-bootstrap"

export default ({data})=>
{
    let array = []
    for(let i = 0; i < data.length; i++)
        array.push(i)

    return <Row>
        <Col>
        <Accordion>
            {array.map(index =>
                {
                    let {header, body} = data[index];
                    return <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                            {header}
                        </Accordion.Header>
                        <Accordion.Body>
                            {body}
                        </Accordion.Body>
                    </Accordion.Item>;
                })}
        </Accordion>
        </Col>
    </Row>
}