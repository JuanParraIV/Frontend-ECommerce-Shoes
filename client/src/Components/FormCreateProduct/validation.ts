
interface FormData {
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
  stock: number;
  brand_name: string;
  details: string;
  status: string;
  category_name: string;
  color: string
  size_range: string
}

interface Errors {
  name: string;
  retail_price_cents: string;
  grid_picture_url: string;
  stock: string;
  brand_name: string;
  details: string;
  status: string;
  category_name: string;
  color: string
  size_range: string
}

const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const IMAGE_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const validateName = (name: string): string =>
  !name ? 'Please introduce a name' : NAME_REGEX.test(name) ? '' : 'Only letters and spaces';

const validatePrice = (retail_price_cents: number): string =>
  !retail_price_cents ? 'Please introduce a price' : retail_price_cents < 1 ? 'not negative numbers' : '';

const validateImage = (grid_picture_url: string): string =>
  !grid_picture_url ? 'Please introduce a image' : IMAGE_REGEX.test(grid_picture_url) ? '' : 'Wrong URL';

const validateStock = (stock: number): string =>
  !stock ? 'Please introduce a stock' : stock < 1 ? 'not negative numbers' : '';

const validateBrand = (brand_name: string): string => !brand_name ? 'Brand is required' : '';

const validateColor = (color: string): string => !color ? 'Color is required' : '';

const validateSize = (size_range: string): string => !size_range ? 'Size is required' : '';

const validateCategory = (category_name: string): string => !category_name ? 'Category is required' : '';

const validateDescription = (details: string): string =>
  !details? 'Please introduce a description' : '';

const validateStatus = (status: string): string => !status ? 'Please introduce a status' : '';

export default function validateProductForm(formData: FormData): Errors {
  return {
    name: validateName(formData.name),
    retail_price_cents: validatePrice(formData.retail_price_cents),
    grid_picture_url: validateImage(formData.grid_picture_url),
    stock: validateStock(formData.stock),
    brand_name: validateBrand(formData.brand_name),
    category_name: validateCategory(formData.category_name), 
    details: validateDescription(formData.details),
    status: validateStatus(formData.status),
    color: validateColor (formData.color),
    size_range: validateSize(formData.size_range)
  };
}
