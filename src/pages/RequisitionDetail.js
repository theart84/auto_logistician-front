import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'
import {Button, Card, Container} from "react-bootstrap";
import {deleteRequisition, getRequisitionById} from "../store/actions/requisitionActions";
import {actionRequest} from "../store/request";
import RequisitionDetailItem from "../components/RequisitionDetailItem/RequisitionDetailItem";

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
    history.push('/');
  }

  const onEditHandler = () => {
    dispatch(actionRequest.initialRequest())
    history.push(`/requisition/edit/${id}`);
  }

  const onDeleteHandler = () => {
    dispatch(deleteRequisition(id))
    history.push('/');
  }

  const classRequisitionDetailInfo = {
    cardText: "font-weight-bold",
    cardSpan: "font-weight-normal d-inline-block ml-2"
  }

  return (
    <Container>
      <Card>
        <Card.Header
          as="h5">
          {`Заявка №${currentRequisition.requisitionNumber}, ${currentRequisition.companyName}`}
        </Card.Header>
        <Card.Body>
          <RequisitionDetailItem
            {...classRequisitionDetailInfo}
            text={currentRequisition.requisitionNumber}
            title="Номер заявки"
          />
          <RequisitionDetailItem
            {...classRequisitionDetailInfo}
            text={new Date(currentRequisition.dateReceivingRequisition).toLocaleString()}
            title="Дата и время получения заявки от клиента"
          />
          <RequisitionDetailItem
            {...classRequisitionDetailInfo}
            text={currentRequisition.companyName}
            title="Название фирмы клиента"
          />
          <RequisitionDetailItem
            {...classRequisitionDetailInfo}
            text={currentRequisition.nameOfCarrier}
            title="ФИО перевозчика"
          />
          <RequisitionDetailItem
            {...classRequisitionDetailInfo}
            text={currentRequisition.phoneCarrier}
            title="Контактный телефон перевозчика"
          />
          <RequisitionDetailItem
            {...classRequisitionDetailInfo}
            text={currentRequisition.atiCode}
            title="ATI код"
            link={`https://ati.su/firms/${currentRequisition.atiCode}/info`}
          />
          <RequisitionDetailItem
            {...classRequisitionDetailInfo}
            text={currentRequisition.comments}
            title="Комментарии"
          />
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
