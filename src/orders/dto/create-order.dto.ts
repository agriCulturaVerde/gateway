import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { OrderStatus } from "../enum/orderStatus.enum";

export class CreateOrderDto {
    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    totalAmount: number;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    totalItems: number;

    @IsString()
    status: OrderStatus = OrderStatus.Pending;

    @IsBoolean()
    paid: boolean = false;

    @IsDate()
    @IsOptional()
    paidAt?: Date;
}
