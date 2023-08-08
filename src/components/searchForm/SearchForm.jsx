import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { Form } from './SearchForm.styled.jsx';
import { Input } from '@mui/joy';

const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const onInput = ({ target }) => {
    setQuery(target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" value={query} onChange={onInput} />
      <button type="submit">
        <GoSearch />
      </button>
    </Form>
  );
};
export default SearchForm;
