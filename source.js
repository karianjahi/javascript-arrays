/*
Building a grocery shopping list
*/

console.log("Grocery shopping list")

// Create a shopping list array
const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

// Create a function that logs results
const getShoppingListMsg = (array) => {return `Current Shopping List: ${array}`};
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList))

console.log("It looks like we need to get some cooking oil.")

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));


shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");
shoppingList.shift();
console.log(getShoppingListMsg(shoppingList));

shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));

/*
Building a Launch picker
a program that helps in managing lunch options. Practice with an array of lunches, adding and removing items from the array, and randomly selecting a lunch option.
*/

// create an empty lunches array basket
let lunches = [];
console.log(lunches);

// create a function that takes array (foods) as first argument and string (food item) as the second.
const addLunchToEnd = (menu, lunchItem) => {
    // Add the lunchItem to the end of the menu array
    menu.push(lunchItem);

    // log the message
    console.log(`${lunchItem} added to the end of the lunch menu`);

    return menu
}

// Test the function
console.log(addLunchToEnd(["salad", "onions", "mushrooms"], "githeri"));


