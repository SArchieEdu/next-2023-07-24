export async function fetchRestaurants() {
  const response = await fetch(`http://localhost:3001/api/restaurants/`, {
    next: { tags: ["config"] },
  });

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}
