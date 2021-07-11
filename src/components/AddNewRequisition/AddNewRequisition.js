// import {Button, Form, Modal} from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import ru from 'date-fns/locale/ru';
// import {useState} from "react";
// import {checkFormValidity} from "../../utils/checkFormValidity";
// import {createRequisition} from "../../store/actions/requisitionActions";
// import {useDispatch} from "react-redux";
//
//
// const initialState = {
//   requisitionNumber: '',
//   companyName: '',
//   nameOfCarrier: '',
//   phoneCarrier: '',
//   atiCode: '',
//   comments: '',
// }
//
// const AddNewRequisition = (props) => {
//   const [inputs, setInputs] = useState(initialState);
//   const [isValid, setIsValid] = useState(false);
//   const [date, setDate] = useState('');
//   const dispatch = useDispatch();
//
//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     setInputs(initialState);
//     setDate('');
//     const payload = {
//       ...inputs,
//       dateReceivingRequisition: date.getTime(),
//     }
//     props.onHide();
//     dispatch(createRequisition(payload));
//   }
//
//   const onChangeHandler = (event) => {
//     const {id, value} = event.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }))
//   }
//   const onChangeDateHandler = (value) => {
//     setDate(value);
//   }
//
//   const onBlurHandler = () => {
//     const isValid = checkFormValidity(inputs) && date;
//     if (isValid) {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   }
//
//   const  onResetHandler = () => setInputs(initialState);
//
//   return (
//     <>
//       <Modal show={props.show} onHide={props.onHide}>
//         <Modal.Header closeButton>
//           <Modal.Title>Добавить заявку</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={onSubmitHandler}>
//             <Form.Group className="mb-3" controlId="requisitionNumber">
//               <Form.Label>Номер заявки</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите номер заявки"
//                 value={inputs.requisitionNumber}
//                 onChange={onChangeHandler}
//                 onBlur={onBlurHandler}/>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="dateReceivingRequisition">
//               <Form.Label>Дата и время получения заявки</Form.Label>
//               <DatePicker
//                 selected={date}
//                 onChange={onChangeDateHandler}
//                 onBlur={onBlurHandler}
//                 showTimeSelect
//                 timeFormat="HH:mm"
//                 timeIntervals={15}
//                 timeCaption="time"
//                 dateFormat="d MMMM, yyyy HH:mm"
//                 placeholderText="Выберите дату и время получения заявки"
//                 locale={ru}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="companyName">
//               <Form.Label>Название фирмы клиента</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите название перевозчика"
//                 value={inputs.companyName}
//                 onChange={onChangeHandler}
//                 onBlur={onBlurHandler}/>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="nameOfCarrier">
//               <Form.Label>ФИО перевозчика</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите ФИО перевозчика"
//                 value={inputs.nameOfCarrier}
//                 onChange={onChangeHandler}
//                 onBlur={onBlurHandler}/>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="phoneCarrier">
//               <Form.Label>Контактный номер перевозчика</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите телефон перевозчика"
//                 value={inputs.phoneCarrier}
//                 onChange={onChangeHandler}
//                 onBlur={onBlurHandler}/>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="atiCode">
//               <Form.Label>АТИ код перевозчика</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Введите код из системы АТИ"
//                 value={inputs.atiCode}
//                 onChange={onChangeHandler}
//                 onBlur={onBlurHandler}/>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="comments">
//               <Form.Label>Комментарий</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Напишите свой комментарий"
//                 value={inputs.comments}
//                 onChange={onChangeHandler}
//                 onBlur={onBlurHandler}/>
//             </Form.Group>
//             <Button
//               variant="danger"
//               className="mr-2"
//               type="reset"
//               onClick={onResetHandler}>
//               Reset
//             </Button>
//             <Button
//               variant="primary"
//               type="submit"
//               disabled={!isValid}>
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   )
// }
//
// export default AddNewRequisition;
//
//
