import {SneakersType} from './Sneakers.type'
import {UserType } from './Users.type'

export interface OrderTypes {
    id: number;
    status: string;
    cost: string;
    userId: number;
    cus_address: string;
    cus_name: string;
    cus_email: string;
    cus_phone: string;
    cus_city: string;
    cus_country: string;
    cus_zip: number;
    sneaker: SneakersType[];
    createdAt: Date;
    updatedAt: Date;
    User: UserType;
}