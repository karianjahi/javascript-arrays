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
    console.log(`${lunchItem} added to the end of the lunch menu.`);

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


// Function to remove the last menu item
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
let amenu1 = ["Chapati", "Ugali", "Mchele", "Nduma", "Ngwaci"]
console.log(amenu1);
console.log(removeLastLunch(amenu1));
let amenu2 =["Samosas"];
console.log(amenu2);
console.log(removeLastLunch(amenu2));
let amenu3 =[];
console.log(amenu3);
console.log(removeLastLunch(amenu3));

// Function to remove the first menu item
const removeFirstLunch = (menu) => {
    // Remove the first item from the menu
    if (menu.length === 0) {
        console.log("No lunches to remove.");
        return menu
    }
    const firstItem = menu.shift();
    console.log(`${firstItem} removed from the start of the lunch menu.`);
    return menu
}

// Test the function
console.log("")
console.log("")
console.log("")
console.log("")
let menu1 = ["Chapati", "Ugali", "Mchele", "Nduma", "Ngwaci"]
console.log(menu1);
console.log(removeFirstLunch(menu1));
let menu2 =["Samosas"];
console.log(menu2);
console.log(removeFirstLunch(menu2));
let menu3 =[];
console.log(menu3);
console.log(removeFirstLunch(menu3));


// A function that randomly selects an item from an array
const getRandomLunch = (menu) => {
    // select a random element from the array
    if (menu.length === 0) {
        console.log("No lunches available.");
        return menu
    }

    // determine the length of the menu array
    let menuLength = menu.length;

    // get a random number between 0 and menuLength-1 to act as the random index to select a menu item. See how we scale Math.random from 0-1 to 0 - array length and floor the result to ensure we never get the upper index of array-length which could throw an error since that position doesn't exist in our menu array.
    let randomIndex = Math.floor(Math.random() * menuLength);
    // console.log(`The menu has ${menuLength} items!. Random number selected: ${randomIndex}`);
    let menuItemRandomlySelected = menu[randomIndex];
    console.log(`Randomly selected lunch: ${menuItemRandomlySelected}`);

    return menu

}

// Test the function
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log(getRandomLunch(menu1));


// A function that logs the items it contains

const showLunchMenu = (menu) => {
    if (menu.length !== 0) {
        myMenu = []
        let i = 0;
        while (i < menu.length) {
            if(i === 0) {
                myMenu[i] = `${menu[i]}`
            } else {
                myMenu[i] = ` ${menu[i]}`
                
            }
            i++;
        }
        console.log(`Menu items: ${myMenu}`);
    } else {
        console.log("The menu is empty.");
    }
    return menu

}

// Test the function
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
let myMenu = ["Tangas","Caisi", "Kosams"]
console.log(showLunchMenu(myMenu));
let myMenu2 = []
console.log(showLunchMenu(myMenu2));

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));


/*
Build a Golf Score Translator
In the game of Golf, each hole has a par, meaning the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname. We want to build a function that converts the par and strokes to their nickname.
*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
const golfScore = (par, strokes) => {
    if (strokes === 1) return names[0]
    if (strokes <= par-2) return names[1]
    if (strokes <= par-1) return names[2]
    if (strokes === par) return names[3]
    if (strokes === par+1) return names[4]
    if (strokes === par+2) return names[5]
    if (strokes >= par+3) return names[6] 
}

console.log(goldScore(2, 3));