import {Card} from "react-bootstrap";
import RequisitionDetailItemLink from "./RequisitionDetailItemLink/RequisitionDetailItemLink";

const RequisitionDetailItem = (props) => {
  return (
    <Card.Text
      className={props.cardText}
    >
      {props.title}:
      <span className={props.cardSpan}
      >
        {
          props.link
            ? <RequisitionDetailItemLink text={props.text} link={props.link}/>
            : props.text
        }
      </span>
    </Card.Text>
  )
}

export default RequisitionDetailItem;
