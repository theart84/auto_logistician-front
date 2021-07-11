import {Button, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";

const RequisitionForm = (props) => {
  return (
    <>
      <Form onSubmit={props.onSubmit}>
        <Form.Group className="mb-3" controlId="requisitionNumber">
          <Form.Label>Номер заявки</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите номер заявки"
            value={props.requisitionNumber}
            onChange={props.onChange}
            onBlur={props.onBlur}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="dateReceivingRequisition">
          <Form.Label>Дата и время получения заявки</Form.Label>
          <DatePicker
            selected={props.date}
            onChange={props.onChangeDateHandler}
            onBlur={props.onBlur}
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
            value={props.companyName}
            onChange={props.onChange}
            onBlur={props.onBlur}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="nameOfCarrier">
          <Form.Label>ФИО перевозчика</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите ФИО перевозчика"
            value={props.nameOfCarrier}
            onChange={props.onChange}
            onBlur={props.onBlur}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneCarrier">
          <Form.Label>Контактный номер перевозчика</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите телефон перевозчика"
            value={props.phoneCarrier}
            onChange={props.onChange}
            onBlur={props.onBlur}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="atiCode">
          <Form.Label>АТИ код перевозчика</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите код из системы АТИ"
            value={props.atiCode}
            onChange={props.onChange}
            onBlur={props.onBlur}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="comments">
          <Form.Label>Комментарий</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Напишите свой комментарий"
            value={props.comments}
            onChange={props.onChange}
            onBlur={props.onBlur}/>
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
          disabled={!props.isValid}>
          {props.titleSubmitButton}
        </Button>
      </Form>
    </>
  );
}

export default RequisitionForm;
