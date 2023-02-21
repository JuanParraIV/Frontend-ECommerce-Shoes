export interface UserType {
  id: number;
  dni: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  userName: string;
  password: string;
  buyerAddress: string;
  rol: string;
  history?: any;
  TransactionId?: any;
}