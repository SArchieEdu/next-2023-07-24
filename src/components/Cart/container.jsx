"use client";

import { selectCartDishIds } from "@/store/features/cart/selectors";
import { useSelector } from "react-redux";
import { DishContainer } from "../Dish/container";

export const Cart = ({dishes}) => {
    const dishIdsInCart = useSelector(selectCartDishIds);
    const dishesInCart = dishes.filter((dish) => dishIdsInCart.includes(dish.id));

    return <div>
        {dishesInCart.map((dish)=> (
            <DishContainer key={dish.id} title={dish.name} dish={dish} />
        ))}
    </div>;
}