import {Container} from "react-bootstrap";
import AddNewRequisitionButton from "../components/AddNewRequisitionButton/AddNewRequisitionButton";
import RequisitionTableHOC from "../components/RequisitionTableHOC/RequisitionTableHOC";

const Requisition = () => {
  return (
    <>
      <Container>
        <AddNewRequisitionButton />
        <RequisitionTableHOC />
      </Container>
    </>
  )
}

export default Requisition;
