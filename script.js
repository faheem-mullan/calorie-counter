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