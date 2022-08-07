import { InputTitle } from './Filter.styled';

const Filter = ({ getName, value }) => (
  <label>
    <InputTitle>Filter</InputTitle>
    <input type="text" value={value} onChange={getName} />
  </label>
);

export { Filter };
