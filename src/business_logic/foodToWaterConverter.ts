import { FoodItem } from "./conversion-interaces"

interface FoodSourceName {
  id: string,
  displayName: string,
}

const foodToWaterConverter = (foodSource: Map<string, FoodItem>) => {
  let currentFood: FoodItem;

  function getFoodSourceNames() {
    return Array.from(foodSource, ([key, value]) => {
      const source: FoodSourceName = {
        id: key,
        displayName: value.displayName
      }
      return source;
    });
  }
  function toWaterValue(foodAmount: number) {
    return foodAmount * currentFood.ratio;
  }

  function toFoodValue(waterAmount: number) {
    return waterAmount / currentFood.ratio;
  }

  return {
    getFoodSourceNames,
    toWaterValue,
    toFoodValue,
    set currentFood(foodName: string) {
      currentFood = foodSource.get(foodName);
    }
  }
}

export default foodToWaterConverter;