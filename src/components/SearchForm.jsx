import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setsearchQuery] = useSearchParams();
  console.log(searchQuery);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setsearchQuery({ query });
      }}
    >
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};
export default SearchForm;
