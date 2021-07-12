import {Col, Row, Spinner} from "react-bootstrap";
import RequisitionTable from "./RequisitionTable/RequisitionTable";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchRequisitionData} from "../../store/actions/requisitionActions";

const RequisitionTableHOC = () => {
  const tableHead = useSelector(state => state.requisition.tableHead);
  const requisition = useSelector(state => state.requisition.requisition);
  const preloader = useSelector(state => state.ui.preloader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequisitionData());
  }, [dispatch]);



  return (
    <Row>
      <Col>
        {preloader
          ? <Spinner
            animation="border"
            variant="primary"
            className="d-block ml-auto mr-auto"
            />
          :
          <RequisitionTable
            head={tableHead}
            requisition={requisition}
          />
        }
      </Col>
    </Row>
  );
}

export default RequisitionTableHOC;
