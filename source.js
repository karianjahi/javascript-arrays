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


const addLunchToStart = (menu, lunchItem) => {
    // add the lunchItem to the start of the array
    menu.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return menu
}

// Test the function
console.log(addLunchToStart(["salad", "onions", "mushrooms"], "githeri"));


const removeLastLunch = (menu) => {
    // Remove the last item from the menu
    if (menu.length === 0) {
        console.log("No lunches to remove.");
        return menu
    }
    const lastItem = menu.pop();
    console.log(`${lastItem} removed from the end of the lunch menu.`);
    return menu
}

// Test the function
menu1 = ["Chapati", "Ugali", "Mchele", "Nduma", "Ngwaci"]
console.log(menu1);
console.log(removeLastLunch(menu1));
menu2 =["Samosas"];
console.log(menu2);
console.log(removeLastLunch(menu2));
menu3 =[];
console.log(menu3);
console.log(removeLastLunch(menu3));