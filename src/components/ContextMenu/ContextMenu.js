import {Card, ListGroup} from "react-bootstrap";
import {deleteRequisition} from "../../store/actions/requisitionActions";
import {useDispatch} from "react-redux";
import {actionsUI} from "../../store/ui";

const ContextMenu = (props) => {
  const dispatch = useDispatch();
  const onEditHandler = () => {
    dispatch(actionsUI.showEditModal())
    console.log('EDIT')
  }

  const onDeleteHandler = () => {
    dispatch(actionsUI.hideContextMenu())
    dispatch(deleteRequisition(props.id))
    console.log('DELETE')
  }

  return (
    <Card style={{ width: '200px', position: 'absolute', top: props.top, left: props.left, zIndex: 9999 }} className="shadow-sm">
      <ListGroup variant="flush">
        <ListGroup.Item onClick={onEditHandler}>Редактировать</ListGroup.Item>
        <ListGroup.Item onClick={onDeleteHandler}>Удалить</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ContextMenu;
