import { fetchRestaurantDishs } from "@/services/api";
import { DishContainer } from "../Dish/container";

import styles from "./styles.module.css";

export default async function MenuContainer({restaurantId}){
  const dishes = await fetchRestaurantDishs(restaurantId);
  
  if (!dishes?.length) {
    return null;
  }

  return (
  <div>
    <h3>Menu</h3>
    <div>
      {dishes.map((dish) => (
        <DishContainer key={dish.id} dish={dish} className={styles.dish}>{dish.name}</DishContainer>
      ))}
    </div>
  </div>
)};
