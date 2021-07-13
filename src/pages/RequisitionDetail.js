import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import {Button, Card, Container} from "react-bootstrap";
import {deleteRequisition, getRequisitionById} from "../store/actions/requisitionActions";
import {actionRequest} from "../store/request";

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
    dispatch(actionRequest.initialRequest())
    history.push(`/requisition/edit/${id}`);
  }

  const onDeleteHandler = () => {
    dispatch(deleteRequisition(id))
    history.push('/requisition');
  }

  const classNameCardText = {
    className: "font-weight-bold"
  }
  const classSpan = {
    className: "font-weight-normal"
  }

  return (
    <Container>
      <Card>
        <Card.Header
          as="h5">
          {`Заявка №${currentRequisition.requisitionNumber}, ${currentRequisition.companyName}`}
        </Card.Header>
        <Card.Body>
          <Card.Text
            {...classNameCardText}
          >
            Номер заявки:
            <span
              {...classSpan}
            >
              {currentRequisition.requisitionNumber}
            </span>
          </Card.Text>
          <Card.Text
            {...classNameCardText}
          >
            Дата и время получения заявки от клиента:
            <span
              {...classSpan}
            >
            {new Date(currentRequisition.dateReceivingRequisition).toLocaleString()}
            </span>
          </Card.Text>
          <Card.Text
            {...classNameCardText}
          >
            Название фирмы клиента:
            <span
              {...classSpan}
            >
            {currentRequisition.companyName}
            </span>
          </Card.Text>
          <Card.Text {...classNameCardText}
          >
            ФИО перевозчика:
            <span
              {...classSpan}
            >
            {currentRequisition.nameOfCarrier}
          </span>
          </Card.Text>
          <Card.Text
            className="font-weight-bold"
          >
            Контактный телефон перевозчика:
            <span
              {...classSpan}
            >
            {currentRequisition.phoneCarrier}
            </span>
          </Card.Text>
          <Card.Text {...classNameCardText}
          >
            ATI код:
            <span
              {...classSpan}
            >
            <a style={{color: 'black', textDecoration: 'underline'}}
               href={`https://ati.su/firms/${currentRequisition.atiCode}/info`}
            >
              {currentRequisition.atiCode}
            </a>
          </span>
          </Card.Text>
          <Card.Text
            {...classNameCardText}
          >
            Комментарии:
            <span
              {...classSpan}
            >
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
