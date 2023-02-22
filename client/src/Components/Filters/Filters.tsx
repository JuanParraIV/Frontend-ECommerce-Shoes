import { BrandSneakerStore } from "@/App/store/useBrandStore";
import { CategorySneakerStore } from "@/App/store/useCategoryStore";
import { useFilterSneakerStore } from "@/App/store/useSneakerFilterStore";
import { useSneakerStore } from "@/App/store/useSneakerStore";
import { SneakersType } from "@/Typing/Sneakers.type";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
type FormEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;
const Filters: React.FC = () => {
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const { filters, setFilters, clearFilters, fetchByBrand, fetchByCategory, fetchByBrand_Category, fetchAll, sortByPriceAsc, sortByPriceDesc, resetSort } = useFilterSneakerStore();
  const { Category } = CategorySneakerStore();
  const { Brand } = BrandSneakerStore();
  const { fetchByName } = useFilterSneakerStore(state => state);



  useEffect(() => {
    clearFilters();
  }, []);
  useEffect(() => {
    if (brand !== '' && category !== '') {
      fetchByBrand_Category();
    } else if (brand !== '' && category === '') {
      fetchByBrand();
    } else if (category !== '' && brand === '') {
      fetchByCategory();
    } else if (category === '' && category === '') {
      fetchAll();
    }
  }, [brand, category]);
  useEffect(() => {
    if (sortBy === '') {
      resetSort();
    } else if (sortBy === 'asc') {
      sortByPriceAsc();
    } else if (sortBy === 'desc') {
      sortByPriceDesc();
    }
  }, [sortBy]);

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
    setFilters({ brand: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setFilters({ category: e.target.value });
  };
  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleOnSearch = (event: InputEvent) => {
    const { value } = event.target;
    if (event && event.preventDefault) event.preventDefault();
    setSearch('');
    setSearch(value);
  };

  const handleSubmit = (event: FormEvent) => {
    if (event && event.preventDefault) event.preventDefault();
    fetchByName(search);
  };


  return (
    <div className="flex flex-row gap-10 justify-around p-8 bg-gradient-to-t from-gray-100 to-transparent rounded-2xl w-[800px] max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-3 justify-center">
        <label htmlFor="brand">Brand:</label>
        <select id="brand" value={brand} onChange={handleBrandChange}>
          <option value="">Select a brand</option>
          {Brand && Brand.map(brand => (
            <option key={brand.id} value={brand.name}>{brand.name}</option>
          ))}
        </select>

        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {Category && Category.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>

      <form className='flex-grow gap-5' action="" onSubmit={handleSubmit}>
      <label htmlFor="brand">Name:</label>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            value={search}
            onChange={handleOnSearch}
            type="text"
            placeholder="Search"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 border"
          />
          <button type='submit'>
            <StarIcon className="h-12 p-4" />
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-3">
        <label htmlFor="category">Price:</label>
        <select id="price" onChange={handleSortByChange}>
          <option value="">Select a Order</option>
          <option value="asc">Ascendent</option>
          <option value="desc">Descendent</option>
        </select>
      </div>

    </div>
  );
};

export default Filters;
