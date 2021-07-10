import {Button, Col, Container, Form, Modal, Row, Spinner, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRequisitionData} from "../../store/actions/requisitionActions";
import AddNewRequisition from "../AddNewRequisition/AddNewRequisition";

const Content = () => {
  const requisition = useSelector(state => state.requisition.requisition);
  const preloader = useSelector(state => state.ui.preloader);
  const tableHead = useSelector(state => state.requisition.tableHead);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequisitionData());
  }, [dispatch]);

  const markupRow1 = requisition.map((item, index) => {
    const result = item.map(cell => {
      let value = cell[1];
      if (cell[0] === '_id') {
        value = index + 1
      }
      if (cell[0] === 'dateReceivingRequisition') {
        value = new Date(cell[1]).toLocaleString();
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

  const onClickHandler = (event) => {
    console.log(event)
    setShow(true)
  }

  const onHideModal = () => {
    setShow(false);
  }

  return (
    <>
      {show && <AddNewRequisition show={show} onHide={onHideModal}/>}
      <Container>
        <Row className="mb-5">
          <Col>
            <Button className="btn btn-small" variant="primary" onClick={onClickHandler}>Добавить заявку</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {preloader ? <Spinner animation="border" variant="primary" className="d-block ml-auto mr-auto"/> : <Table striped bordered hover>
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
            </Table>}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Content;
