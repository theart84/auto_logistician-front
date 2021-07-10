import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";

const tableHead = ['#', 'Номер заявки', 'Дата', 'Название фирмы', 'ФИО перевозчика', 'Контактный телефон', 'АТИ код', 'Комментарий']
const hashMap = ['_id', 'requisitionNumber', 'requisitionCreate', 'companyName', 'nameOfCarrier', 'phoneCarrier', 'atiCode', 'comments']

const Content = () => {
  const [requisition, setRequisition] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      let response = await fetch('http://localhost:5000/api/requisitions');
      response = await response.json()
      setRequisition([...response.requsition])
    }
    fetchData()
  }, [])

  const hashMap1 = requisition.reduce((acc, prev) => {
    const result = Object.entries(prev).reduce((acc, [key, value]) => {
      const idx = hashMap.indexOf(key);
      acc[idx] = [key, value];
      return acc;
    }, [])
    acc.push(result);
    return acc;
  },[])

  const markupRow1 = hashMap1.map((item, index) => {
    const result = item.map(cell  => {
        let value = cell[1];
        if (cell[0] === '_id') {
          value = index + 1
        }
        if (cell[0] === 'requisitionCreate') {
          value = new Date(+cell[1]).toLocaleString();
        }
        return (<td
          key={Math.random()}
          className="text-center"
          data-type={cell[0]}
        >
          {value}
        </td>)
    })
    return (
      <tr
        key={item._id}
        data-id={item._id}
      >
        {result}
      </tr>
    )
  })

  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <Button className="btn btn-small" variant="primary">Добавить заявку</Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
            <tr>
              {tableHead.map((item, index) => (
                <th key={Date.now() + Math.random()} className="text-center">{item}</th>
              ))}
            </tr>
            </thead>
            <tbody>
            {markupRow1}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Content;
