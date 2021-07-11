import {Button, Col, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

const AddNewRequisitionButton = () => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push('/requisition/create');
  }

  return (
    <Row className="mb-5">
      <Col>
        <Button className="btn btn-small" variant="primary" onClick={onClickHandler}>Добавить заявку</Button>
      </Col>
    </Row>
  );
}

export default AddNewRequisitionButton;
