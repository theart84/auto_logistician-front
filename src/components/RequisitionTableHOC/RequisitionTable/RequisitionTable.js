import {useHistory} from 'react-router-dom';
import {Table} from "react-bootstrap";

const RequisitionTable = ({requisition, head}) => {
  const history = useHistory();
  const onClickHandler = (event) => {
    const { id } = event.currentTarget.dataset;
    history.push(`/requisition/${id}`)
  }

  const td = requisition.map((item, index) => {
    const result = item.map(cell => {
      let value = cell[1];
      if (cell[0] === '_id') {
        value = index + 1
      }
      if (cell[0] === 'dateReceivingRequisition') {
        value = new Date(cell[1]).toLocaleString();
      }
      if (cell[0] === 'atiCode') {
        value = <a style={{color: 'black', textDecoration: 'none'}}
                   href={`https://ati.su/firms/${cell[1]}/info`}>{cell[1]}</a>
      }
      return (<td
        key={Math.random()}
        className="text-center"
        data-type={cell[0]}
      >
        {value}
      </td>)
    })

    return (
      <tr
        key={item[0][1]}
        data-id={item[0][1]}
        onClick={onClickHandler}
      >
        {result}
      </tr>
    )
  })

  const th = head.map((item) => (
    <th key={Date.now() + Math.random()} className="text-center">{item}</th>
  ))

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {th}
        </tr>
      </thead>
      <tbody>
        {td}
      </tbody>
    </Table>
  )
}

export default RequisitionTable;
