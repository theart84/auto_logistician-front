import {Button, Form, FormControl, } from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchRequisitionData, searchRequisition} from "../../store/actions/requisitionActions";

const SearchRequisition = () => {
  const [searchField, setSearchField] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const {value} = event.target.search;
    setSearchField('')
    dispatch(searchRequisition(value))
  }

  const onClickHandler = () => {
    dispatch(fetchRequisitionData());
  }

  const onChangeHandler = (event) => {
    const {value} = event.target;
    setSearchField(value)
  }

  return (
    <>
      <div className="mb-2">
        <Form inline onSubmit={onSubmitHandler}>
          <FormControl
            type="text"
            placeholder="Введите буквы..."
            className="mr-sm-2"
            name="search"
            value={searchField}
            style={{borderColor: '#007bff'}}
            onChange={onChangeHandler}/>
          <Button type="submit" variant="outline-primary">Поиск</Button>
          <Button variant="outline-primary ml-2" onClick={onClickHandler}>Очистить</Button>
        </Form>
      </div>
    </>
  )
}

export default SearchRequisition;
