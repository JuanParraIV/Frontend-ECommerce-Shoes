interface FormData {
        userName: string;
        email:string;
        password: string;
        password2: string
  };
  
interface Errors {
    userName: string;
    email:string;
    password: string;
    password2: string
  };
  

  const EMAIL_REGEX =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8}/;


  const validateUserName = (userName: string): string =>
    !userName ? 'Please introduce a User Name' : '';
  
  const validateEmail = (email: string): string =>
    !email ? 'Please introduce an Email' : EMAIL_REGEX.test(email) ? 'Email incorrect' : '';
  
    const validatePassword = (password: string): string =>
    !password? 'Please introduce a password' : '';

    const validatePassword2 = (password: string, password2:string): string =>
    password2 !== password ? "La contraseña no coincide": "";


    export default function validateRegisterForm(formData: FormData): Errors {
        return {
          userName: validateUserName(formData.userName),
          email: validateEmail(formData.email),
          password: validatePassword(formData.password),
          password2: validatePassword2(formData.password2, formData.password )
        };
      }