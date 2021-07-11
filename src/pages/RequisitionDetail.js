import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import {Button, Card, Container} from "react-bootstrap";
import {deleteRequisition, getRequisitionById} from "../store/actions/requisitionActions";

const RequisitionDetail = () => {
  const currentRequisition = useSelector(state => state.requisition.currentRequisition);
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const id = params.requisitionId;

  useEffect(() => {
    dispatch(getRequisitionById(id))
  }, [dispatch, id]);

  if (!currentRequisition) {
    return null;
  }

  const onBackHandler = () => {
    history.push('/requisition');
  }

  const onEditHandler = () => {
    history.push(`/requisition/edit/${id}`);
  }

  const onDeleteHandler = () => {
    dispatch(deleteRequisition(id))
    history.push('/requisition');
    console.log('DELETE')
  }

  return (
    <Container>
      <Card>
        <Card.Header
          as="h5">
          {`Заявка №${currentRequisition.requisitionNumber}, ${currentRequisition.companyName}`}
        </Card.Header>
        <Card.Body>
          <Card.Text className="font-weight-bold">Номер заявки: <span
            className="font-weight-normal">{currentRequisition.requisitionNumber}</span></Card.Text>
          <Card.Text
            className="font-weight-bold">Дата и время получения заявки от клиента: <span
            className="font-weight-normal">
            {new Date(currentRequisition.dateReceivingRequisition).toLocaleString()}
            </span>
          </Card.Text>
          <Card.Text
            className="font-weight-bold">Название фирмы клиента: <span
            className="font-weight-normal">
            {currentRequisition.companyName}
            </span>
          </Card.Text>
          <Card.Text className="font-weight-bold">ФИО перевозчика: <span
            className="font-weight-normal">
            {currentRequisition.nameOfCarrier}
          </span>
          </Card.Text>
          <Card.Text
            className="font-weight-bold">Контактный телефон перевозчика: <span
            className="font-weight-normal">
            {currentRequisition.phoneCarrier}
            </span>
          </Card.Text>
          <Card.Text className="font-weight-bold">ATI код: <span
            className="font-weight-normal">
            {currentRequisition.atiCode}
          </span>
          </Card.Text>
          <Card.Text className="font-weight-bold">Комментарии: <span
            className="font-weight-normal">
            {currentRequisition.comments}
          </span>
          </Card.Text>
          <Button
            variant="primary mr-3"
            onClick={onBackHandler}
          >
            Назад
          </Button>
          <Button
            variant="primary mr-3"
            onClick={onEditHandler}
          >
            Редактировать
          </Button>
          <Button
            variant="primary"
            onClick={onDeleteHandler}
          >
            Удалить
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default RequisitionDetail;
