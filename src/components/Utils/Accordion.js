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
                    let {question, answer} = data[index];
                    return <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                            <p style={{fontWeight:'550'}}>{question}</p>
                        </Accordion.Header>
                        <Accordion.Body>
                            {answer}
                        </Accordion.Body>
                    </Accordion.Item>;
                })}
        </Accordion>
        </Col>
    </Row>
}