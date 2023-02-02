    
       
       export default function Validate(values) {
        
        let errors = {};

        // validacion nombre
        if(!values.name){
            errors.name = 'Please introduce a name'
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
            errors.name= 'Only letters and spaces'
        }

        // validacion precio
        if(!values.price){
            errors.price = 'Please introduce a price'
        }else if(values.price<1){
            errors.price = 'not negative numbers'
        }

        //validacion imagen
        if(!values.image){
            errors.image = 'Please introduce a image'}
            else if(!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(values.image)){
            errors.image = 'Wrong URL'
        }

        //validacion stock
        if(!values.stock){
            errors.stock = 'Please introduce a stock'
        }else if(values.stock<1){
            errors.stock = 'not negative numbers'
        }

        //validacion marca
        if(!values.brand.length){
            errors.brand = 'Brand is required'
        }

        //validacion description
        if(!values.description){
            errors.description = 'Please introduce a description'
        }
        //validacion status
        if(!values.status){
            errors.status = 'Please introduce a status'
        }
        

        return errors;
    }