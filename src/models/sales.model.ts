import z from "zod";

export interface sales {
    item: string;
    unit_price: number;
    description: string;
    quantity: number;
    total_price: number;
    
}
