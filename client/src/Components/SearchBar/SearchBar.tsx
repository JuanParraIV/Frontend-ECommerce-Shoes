import { useSneakerStore, SneakerStoreState } from '@/App/store/useSneakerStore';
import { StarIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

type FormEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;
const SearchBar = () => {
  const [search, setSearch] = useState('');
  console.log("search", search)
  const { fetchSneakersByName } = useSneakerStore(state => state);
  const handleOnSearch = (event: InputEvent) => {
    const { value } = event.target;
    if (event && event.preventDefault) event.preventDefault();
    setSearch('');
    setSearch(value);
  };
  const handleSubmit = (event: FormEvent) => {
    if (event && event.preventDefault) event.preventDefault();
    fetchSneakersByName(search);
  };
  return (
    <form className='flex-grow' action="" onSubmit={handleSubmit}>
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 w-[400px]">
        <input
          value={search}
          onChange={handleOnSearch}
          type="text"
          placeholder="Search"
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
        />
        <button type='submit'>
          <StarIcon className="h-12 p-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
