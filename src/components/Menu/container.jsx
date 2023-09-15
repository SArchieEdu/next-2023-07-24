import { fetchRestaurantDishs } from "@/services/api";

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
        <div key={dish.id}>{dish.name}</div>
      ))}
    </div>
  </div>
)};
