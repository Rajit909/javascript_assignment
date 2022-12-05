//  Task
//  Fetch all the product name and store in an array

let newArr = [];

document.querySelectorAll(".as-imagegrid-item").forEach((e) => newArr.push(e.innerText.replace("\nSupport", "")));

console.log(newArr);

//OUTput:

//['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']