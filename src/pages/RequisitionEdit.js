import { Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {editRequisition} from "../store/actions/requisitionActions";
import RequisitionForm from "../components/RequisitionForm/RequisitionForm";
import {useEffect} from "react";



const RequisitionEdit = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentRequisition = useSelector(state => state.requisition.currentRequisition);
  const requestStatus = useSelector(state => state.request.requestStatus);

  useEffect(() => {
    if (requestStatus === 'fulfilled') {
      history.push('/requisition');
    }
  }, [history, requestStatus])

  const onSubmitHandler = (payload) => {
    dispatch(editRequisition(payload));
  }

  const  onBackHandler = () => {
    history.push(`/requisition/${currentRequisition._id}`)
  };

  return (
    <Container>
      <RequisitionForm
        inputs={currentRequisition}
        onSubmit={onSubmitHandler}
        titleSubmitButton="Отредактировать"
        onBackHandler={onBackHandler}
      />
    </Container>
  )
}

export default RequisitionEdit;
