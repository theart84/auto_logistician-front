import {useHistory} from 'react-router-dom';
import {Table} from "react-bootstrap";
import {serializeRequisition} from "../../../utils/serializeRequisitionData";
import SearchRequisition from "../../SearchRequisition/SearchRequisition";

const RequisitionTable = ({requisition, head}) => {
  const history = useHistory();

  const onClickHandler = (event) => {
    const {id} = event.currentTarget.dataset;
    history.push(`/requisition/${id}`)
  }

  const serializeData = serializeRequisition(requisition);

  const td = serializeData.map((item, index) => {
    const result = item.map(cell => {
      let value = cell[1];
      switch (cell[0]) {
        case '_id':
          value = index + 1;
          break;
        case 'dateReceivingRequisition':
          value = value = new Date(cell[1]).toLocaleString();
          break;
        case 'comments':
          value = value.length > 15 ? `${value.slice(0, 15)}...` : value;
          break;
        default:
          break;
      }
      return (<td
        key={`${item[0][1]}${Math.random()}`}
        className="text-center"
        data-type={cell[0]}
      >
        {value}
      </td>)
    });

    return (
      <tr
        key={item[0][1]}
        data-id={item[0][1]}
        onClick={onClickHandler}
      >
        {result}
      </tr>
    );
  });

  const th = head.map((item) => (
    <th key={Date.now() + Math.random()} className="text-center">{item}</th>
  ))

  return (
    <>
      <SearchRequisition/>
      <Table striped bordered hover responsive="lg">
        <thead>
        <tr>
          {th}
        </tr>
        </thead>
        <tbody>
        {td}
        </tbody>
      </Table>
    </>
  )
}

export default RequisitionTable;
