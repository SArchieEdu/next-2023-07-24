
import styles from "./styles.module.css";
import { fetchRestaurant } from "@/services/api";

export default async function RestaurantPage({ params: { restaurantId } }) {
  const restaurant = await fetchRestaurant(restaurantId);

  return <div className={styles.root}>{restaurant?.name}</div>;
}
