import {Button, Form, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import {checkFormValidity} from "../../utils/checkFormValidity";
import {useState} from "react";
import {Link, useParams} from "react-router-dom";

const RequisitionForm = (props) => {
  const [inputs, setInputs] = useState(props.inputs);
  const [isValid, setIsValid] = useState(false);
  const [date, setDate] = useState(props.inputs?.dateReceivingRequisition);
  const params = useParams();

  if (!props.inputs) {
    return (
      <>
        <Row className="justify-content-center">
          <p>Что-то пошло не так...</p>
        </Row>
        <Row className="justify-content-center">
          <Link className="btn btn-primary" to={`/requisition/${params.requisitionId}`}>Вернуться к просмотру заявки</Link>
        </Row>
      </>
    )
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const payload = {
      ...inputs,
      dateReceivingRequisition: typeof date === 'number' ? date : date.getTime(),
    }
    props.onSubmit(payload);
  }
  const onChangeHandler = (event) => {
    const {id, value} = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }
  const onChangeDateHandler = (value) => {
    setDate(new Date(value.getTime()))
  }

  const onBlurHandler = () => {
    const isValidity = checkFormValidity(inputs) && !!date;
    setIsValid(isValidity);
  }

  return (
    <>
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
          <DatePicker
            selected={date}
            onChange={onChangeDateHandler}
            onBlur={onBlurHandler}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="d MMMM, yyyy HH:mm"
            placeholderText="Выберите дату и время получения заявки"
            locale={ru}
          />
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
          variant="primary"
          className="mr-3"
          type="reset"
          onClick={props.onBackHandler}>
          Назад
        </Button>
        <Button
          variant="primary"
          type="submit"
          disabled={!isValid}>
          {props.titleSubmitButton}
        </Button>
      </Form>
    </>
  );
}

export default RequisitionForm;
