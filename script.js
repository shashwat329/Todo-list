let add = document.getElementById('next');

let addclick = document.getElementsByClassName('add');
let removeclick = document.getElementsByClassName('remove');



// creating the function to add new listing
function addtask() {
    let task = prompt("enter the task");
    console.log(task);
    let node = document.createElement("li");
    let newiteam = document.createElement("input");
    newiteam.type = "checkbox";
    node.appendChild(newiteam);
    console.log(node);
    node.append(task);
    document.getElementById("list").appendChild(node);
}