    
       
interface FormData {
    name: string;
    price: number;
    image: string;
    stock: number;
    brand: string;
    description: string;
    status: string
  }
  interface Errors{
    name: string;
    price: string;
    image: string;
    stock: string;
    brand: string;
    description: string;
    status: string
  }


  export default function validateProductForm(formData: FormData) {
    const errors:Errors =
     {name:"",
    price: "",
    image: "",
    stock: "",
    brand: "",
    description: "",
    status: ""}
  
    if (!formData.name) {
      errors.name="Please introduce a name";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formData.name)) {
      errors.name="Only letters and spaces";
    };
    if(!formData.price){
      errors.price='Please introduce a price';
    }else if(formData.price<1){
       errors.price='not negative numbers'
    };
    if(!formData.image){
       errors.image ='Please introduce a image';
    }else if(!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(formData.image)){
       errors.image = 'Wrong URL';
    };
    if(!formData.stock){
        errors.stock = 'Please introduce a stock'
    }else if(formData.stock<1){
        errors.stock = 'not negative numbers';
    };
    if(!formData.brand){
        errors.brand = 'Brand is required'
    };
    if(!formData.description){
        errors.description = 'Please introduce a description';
    };
    if(!formData.status){
        errors.status = 'Please introduce a status';
    }
    
    return errors;
  }
