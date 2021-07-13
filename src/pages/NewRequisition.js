import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {createRequisition} from "../store/actions/requisitionActions";
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
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitHandler = (payload) => {
    dispatch(createRequisition(payload));
    history.push(`/`)
  }

  const onBackHandler = () => {
    history.push(`/`)
  };

  return (
    <Container>
      <RequisitionForm
        inputs={initialState}
        titleSubmitButton="Создать заявку"
        onSubmit={onSubmitHandler}
        onBackHandler={onBackHandler}
      />
    </Container>
  );
}

export default NewRequisition;
