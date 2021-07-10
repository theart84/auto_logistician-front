import {Button, Col, Container, Row, Spinner, Table} from "react-bootstrap";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRequisitionData} from "../../store/actions/requisitionActions";
import AddNewRequisition from "../AddNewRequisition/AddNewRequisition";
import {actionsUI} from "../../store/ui";
import {actionRequisition} from "../../store/requisition";
import ContextMenu from "../ContextMenu/ContextMenu";
import EditRequisition from "../EditRequisition/EditRequisition";

const Content = () => {
  const requisition = useSelector(state => state.requisition.requisition);
  const currentRequisitionId = useSelector(state => state.requisition.currentRequisitionId);
  const contextMenu = useSelector(state => state.ui.contextMenu);
  const preloader = useSelector(state => state.ui.preloader);
  const tableHead = useSelector(state => state.requisition.tableHead);
  const showCreateModal = useSelector(state => state.ui.showCreateModal);
  const showEditModal = useSelector(state => state.ui.showEditModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequisitionData());
  }, [dispatch]);

  const onClickHandler = () => {
    dispatch(actionsUI.showCreateModal());
  }

  const onLeftButtonClickHandler = () => {
    dispatch(actionsUI.hideContextMenu());
  }

  const onHideModal = () => {
    dispatch(actionsUI.hideCreateModal());
    dispatch(actionsUI.hideEditModal());
  }

  const onContextMenuHandler = (event) => {
    event.preventDefault();
    const { id } = event.currentTarget.dataset;
    const {clientX, clientY} = event;
    dispatch(actionRequisition.choiceCurrentRequisition(id))
    dispatch(actionsUI.showContextMenu({clientX, clientY}))
  }
  const markupRow1 = requisition.map((item, index) => {
    const result = item.map(cell => {
      let value = cell[1];
      if (cell[0] === '_id') {
        value = index + 1
      }
      if (cell[0] === 'dateReceivingRequisition') {
        value = new Date(cell[1]).toLocaleString();
      }
      if (cell[0] === 'atiCode') {
        value = <a style={{color: 'black', textDecoration: 'none'}} href={`https://ati.su/firms/${cell[1]}/info`}>{cell[1]}</a>
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
        key={item[0][1]}
        data-id={item[0][1]}
        onClick={onLeftButtonClickHandler}
        onContextMenu={onContextMenuHandler}
      >
        {result}
      </tr>
    )
  })

  return (
    <>
      {showCreateModal && <AddNewRequisition show={showCreateModal} onHide={onHideModal}/>}
      {showEditModal && <EditRequisition id={currentRequisitionId} show={showEditModal} onHide={onHideModal}/>}
      {contextMenu.isShow && <ContextMenu id={currentRequisitionId} top={contextMenu.clientY} left={contextMenu.clientX}/>}
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
