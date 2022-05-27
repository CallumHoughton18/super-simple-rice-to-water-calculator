import foodToWaterConverter from "./business_logic/foodToWaterConverter";
import foodItemsMap from "./business_logic/staticFoodItems";

const converter = foodToWaterConverter(foodItemsMap);

const foodTypeSelect = document.getElementById("food-type") as HTMLSelectElement;
const foodAmountInput = document.getElementById("amount") as HTMLInputElement;
const waterAmountInput = document.getElementById("water") as HTMLInputElement;

converter.getFoodSourceNames().map(({id, displayName}) => {
  var option = document.createElement("option");
  option.value = id,
  option.text = displayName
  foodTypeSelect.options.add(option);
});

// Default to first item for now...
foodTypeSelect.selectedIndex = 0;
foodAmountInput.value = null;
waterAmountInput.value = null;
converter.currentFood = foodTypeSelect.value;

const GetInputAndDispatchIfValid = (event: Event, callback: (number: number) => void) => {
  let inputtedFoodAmount = Number((event.target as HTMLInputElement).value);
  if (!isNaN || inputtedFoodAmount > 0) {
    callback(Math.ceil(inputtedFoodAmount)); 
  }
}

foodTypeSelect.addEventListener("change", (event) => {
  foodAmountInput.value = null;
  waterAmountInput.value = null;
  converter.currentFood = (event.target as HTMLSelectElement).value;
});

foodAmountInput.addEventListener("input", (event) => {
  GetInputAndDispatchIfValid(event, (foodAmount) => {
    waterAmountInput.value = Math.ceil(converter.toWaterValue(foodAmount)).toString();
  });
});

waterAmountInput.addEventListener("input", (event) => {
  GetInputAndDispatchIfValid(event, (waterAmount) => {
    foodAmountInput.value = Math.ceil(converter.toFoodValue(waterAmount)).toString();
  });
});