import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {checkFormValidity} from "../../utils/checkFormValidity";

const initialState = {
  requisitionNumber: '',
  dateReceivingRequisition: '',
  companyName: '',
  nameOfCarrier: '',
  phoneCarrier: '',
  atiCode: '',
  comments: '',
}

const AddNewRequisition = (props) => {
  const [inputs, setInputs] = useState(initialState);
  const [isValid, setIsValid] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputs(initialState);
    props.onHide();
  }

  const onChangeHandler = (event) => {
    const {id, value} = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const onBlurHandler = () => {
    const isValid = checkFormValidity(inputs);
    if (isValid) {
      setIsValid(true);
    }
  }

  const  onResetHandler = () => setInputs(initialState);

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить заявку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="requisitionNumber">
              <Form.Label>Номер заявки</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите номер заявки"
                value={inputs.requisitionNumber}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="dateReceivingRequisition">
              <Form.Label>Дата и время получения заявки</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите номер заявки"
                value={inputs.dateReceivingRequisition}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="companyName">
              <Form.Label>Название фирмы клиента</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите название перевозчика"
                value={inputs.companyName}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="nameOfCarrier">
              <Form.Label>ФИО перевозчика</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите ФИО перевозчика"
                value={inputs.nameOfCarrier}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="phoneCarrier">
              <Form.Label>Контактный номер перевозчика</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите телефон перевозчика"
                value={inputs.phoneCarrier}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="atiCode">
              <Form.Label>АТИ код перевозчика</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите код из системы АТИ"
                value={inputs.atiCode}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="comments">
              <Form.Label>Комментарий</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Напишите свой комментарий"
                value={inputs.comments}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}/>
            </Form.Group>
            <Button
              variant="danger"
              className="mr-2"
              type="reset"
              onClick={onResetHandler}>
              Reset
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={!isValid}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddNewRequisition;
