import { InputTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterByContactName, getFilterName } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterName);

  const setFilterName = e => {
    dispatch(filterByContactName(e.currentTarget.value));
  };

  return (
    <label>
      <InputTitle>Filter</InputTitle>
      <input type="text" value={filter} onChange={setFilterName} />
    </label>
  );
};

export { Filter };
