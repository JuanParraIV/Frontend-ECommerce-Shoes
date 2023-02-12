
interface FormData {
  userName: string;
  firstName: string;
  lastName: string; 
  contactNumber: string;
  buyerAddress: string;
  email: string; 
  password: string;
  dni:string
  }
  
  interface Errors {
    userName: string;
    firstName: string;
    lastName: string; 
    // contactNumber: bigint;
    buyerAddress: string;
    email: string; 
    password: string;
    // dni:bigint
  }
  
  const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  // const IMAGE_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
  
  const validateLastName = (lastName: string): string =>
    !lastName ? 'Please introduce a name' : NAME_REGEX.test(lastName) ? '' : 'Only letters and spaces';

    const validateFirstName = (firstName: string): string =>
    !firstName ? 'Please introduce a name' : NAME_REGEX.test(firstName) ? '' : 'Only letters and spaces';  

    const validateUserName = (userName: string): string =>
    !userName ? 'Please introduce a username' : NAME_REGEX.test(userName) ? '' : 'Only letters and spaces';

    const validateBuyerAddress = (buyerAddress: string): string =>
      !buyerAddress ? 'Please introduce a description' : '';    

    const validateEmail = (email: string): string =>
    !email? 'Please introduce a email' : EMAIL_REGEX.test(email) ? '' : 'Email incorrect';

    const validatePassword = (password: string): string =>
    !password? 'Please introduce a password' : PASSWORD_REGEX.test(password) ? '' : 'Introduce at least one uppercase letter, one lowercase letter, one number, and one special character';
 
  
  const validateContactNumber = (contactNumber: number): string =>
    !contactNumber? 'Please introduce a Contact' : contactNumber < 1 ? 'not negative numbers' : '';
  
  const validateDNI = (dni: number): string =>
    !dni? 'Please introduce a Identity Number' : dni < 1 ? 'not negative numbers' : '';
  
 
  
  export default function validateProductForm(formData: FormData): Errors {
    return {
      lastName: validateLastName(formData.lastName),
      firstName: validateFirstName(formData.firstName),
      userName: validateUserName(formData.userName),
      buyerAddress: validateBuyerAddress(formData.buyerAddress),
      email: validateEmail(formData.email),
      password: validatePassword (formData.password),
    };
  }
  