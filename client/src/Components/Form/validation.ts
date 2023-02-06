
interface FormData {
  name: string;
  price: number;
  image: string;
  stock: number;
  brand: string;
  description: string;
  status: string;
}

interface Errors {
  name: string;
  price: string;
  image: string;
  stock: string;
  brand: string;
  description: string;
  status: string;
}

const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const IMAGE_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

const validateName = (name: string): string =>
  !name ? 'Please introduce a name' : NAME_REGEX.test(name) ? '' : 'Only letters and spaces';

const validatePrice = (price: number): string =>
  !price ? 'Please introduce a price' : price < 1 ? 'not negative numbers' : '';

const validateImage = (image: string): string =>
  !image ? 'Please introduce a image' : IMAGE_REGEX.test(image) ? '' : 'Wrong URL';

const validateStock = (stock: number): string =>
  !stock ? 'Please introduce a stock' : stock < 1 ? 'not negative numbers' : '';

const validateBrand = (brand: string): string => !brand ? 'Brand is required' : '';

const validateDescription = (description: string): string =>
  !description ? 'Please introduce a description' : '';

const validateStatus = (status: string): string => !status ? 'Please introduce a status' : '';

export default function validateProductForm(formData: FormData): Errors {
  return {
    name: validateName(formData.name),
    price: validatePrice(formData.price),
    image: validateImage(formData.image),
    stock: validateStock(formData.stock),
    brand: validateBrand(formData.brand),
    description: validateDescription(formData.description),
    status: validateStatus(formData.status),
  };
}
