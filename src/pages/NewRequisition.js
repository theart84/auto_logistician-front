import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {editRequisition} from "../store/actions/requisitionActions";
import RequisitionForm from "../components/RequisitionForm/RequisitionForm";
import {Container} from "react-bootstrap";

const initialState = {
  requisitionNumber: '',
  companyName: '',
  nameOfCarrier: '',
  phoneCarrier: '',
  atiCode: '',
  comments: '',
}

const NewRequisition = () => {
  const [inputs, setInputs] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputs(initialState);
    setDate('');
    const payload = {
      ...inputs,
      dateReceivingRequisition: typeof date === 'number' ? date : date.getTime(),
    }
    console.log(payload)
    dispatch(editRequisition(payload));
    // history.push(`/requisition/`)
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

  const onBlurHandler = () => {}

  const  onBackHandler = () => {
    history.push(`/requisition`)
  };
  return (
    <Container>
      <RequisitionForm
        titleSubmitButton="Создать заявку"
        onBackHandler={onBackHandler}
        onChange={onChangeHandler}
        onChangeDateHandler={onChangeDateHandler}
        date={date}
        onSubmit={onSubmitHandler}
        isValid={!isValid}
      />
    </Container>
  );
}

export default NewRequisition;
