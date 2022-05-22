import { FoodItem } from "./conversion-interaces";

const foodItemsMap = new Map<string, FoodItem>();

foodItemsMap.set("basmati", {
  displayName: "Basmati Rice",
  ratio: 2.2
});

foodItemsMap.set("arborio", {
  displayName: "Arborio Rice",
  ratio: 4.2
});

export default foodItemsMap;