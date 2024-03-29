// simple function
function firstlog() {
    console.log("Hello World!");
}
firstlog();
//calling  a function with parameters
function addNumber(a, b) {
    var sam = a + b;
    console.log(sam);
}
addNumber(5, 10);
// return value from the function
function multiplyNumber(x, y) {
    var result = "multiplyby," + x * y + "is perfect number";
    return result;
}
console.log(multiplyNumber(2, 3));
// using function in type
//parameter and argument
function resturant(name, items) {
    console.log("Welcome to ".concat(name, " . We serve ").concat(items));
}
resturant("kababjees", ["burger", "Pizza", "bar becue"]);
// calling a function
function picnicPoint(place, food) {
    return "We are going for a picnic at ".concat(place, ",and we will eat ").concat(food, ".");
}
picnicPoint("feista water park", "biryani");
