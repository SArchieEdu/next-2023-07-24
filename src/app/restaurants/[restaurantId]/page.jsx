import { Dish } from "@/components/Dish/component";

import styles from "./styles.module.css";
import { Provider } from "@/components/Provider/component";
import { fetchRestaurants } from "@/services/api";

export default async function RestaurantPage({ params: { restaurantId } }) {
  const restaurants = await fetchRestaurants();

  const restaurant = restaurants.find(({ id }) => id === restaurantId);
  return <div className={styles.root}>{restaurant?.name}</div>;
}
