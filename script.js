const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");

}
function isInvalidString{
  const regex=/[0-9]-e-[0-9]/;
  return str.match(regex);
}
function addEntry(){
  const targetInputContainer = document.querySelectorAll(`#${entryDropdown.value}.input-container`);
  const entryNumber=targetInputContainer.querySelectorAll('input[text="name"]'.length);
  const HTMLstring=`
  <label for= "${entryDropdown.value}-${entryNumber}-name>Entry ${entryNumber} Name</label>
  <input id="${entryDropdown.value}-${entryNumber}-name" type="text" placeholder="name"/>
  <label for= "${entryDropdown.value}-${entryNumber}-calories>Entry ${entryNumber} Name</label>
  <input id="${entryDropdown.value}-${entryNumber}-calories" type="number" placeholder="calories" min="0"/>
  `
}
function calculateCalories(e){
  e.preventDefault();
  isError=false;
 onst breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
  const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
  const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
  const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
  const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
   const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  if (isError){
    return;
  }
  const consumedCalories=breakfastCalories+lunchCalories+dinnerCalories+snacksCalories-exerciseCalories;
  const remainingCalories=budgetCalories-consumedCalories+exerciseCalories;
}

}

}
function getCaloriesFromInputs(list)
{
  let calories=0;
  for(const item of list){
    const currVal=cleanInputString(item.value);
    const cleanInputString(item.value);
    if (invalidInputMatch) {
  alert(`Invalid Input: ${invalidInputMatch[0]}`);
  isError = true;
  return null;
}
  calories += Number(currVal);
}
  return calories;
}
addEntryButton.addEventListener("click", addEntry);
