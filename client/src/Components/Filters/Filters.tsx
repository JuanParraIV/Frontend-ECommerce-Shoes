import { BrandSneakerStore } from "@/App/store/useBrandStore";
import { CategorySneakerStore } from "@/App/store/useCategoryStore";
import { useFilterSneakerStore } from "@/App/store/useSneakerFilterStore";
import { SneakersType } from "@/Typing/Sneakers.type";
import React, { useEffect, useState } from "react";

const Filters: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const { filters, setFilters, clearFilters, fetchByBrand, fetchByCategory, fetchByBrand_Category, fetchAll, sortByPriceAsc, sortByPriceDesc, resetSort } = useFilterSneakerStore();
  const {Category} = CategorySneakerStore();
  const {Brand} = BrandSneakerStore();

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


  return (
    <>
      <label htmlFor="brand">Brand:</label>
      <select id="brand" value={brand} onChange={handleBrandChange}>
        <option value="">Select a brand</option>
        {Brand && Brand.map(brand =>(
          <option key={brand.id} value={brand.name}>{brand.name}</option>
        ))}
      </select>

      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {Category && Category.map(category =>(
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
      </select>

      <label htmlFor="category">Price:</label>
      <select id="price" onChange={handleSortByChange}>
        <option value="">Select a Order</option>
        <option value="asc">Ascendent</option>
        <option value="desc">Descendent</option>
      </select>

    </>
  );
};

export default Filters;
