let add = document.getElementById('next');

let addclick = document.getElementsByClassName('add');
let removeclick = document.getElementsByClassName('remove');



// creating the function to add new listing
function addtask() {
    let task = prompt("enter the task");
    if(task != ""){
    let node = document.createElement("li");
    let newiteam = document.createElement("input");
    newiteam.type = "checkbox";
    node.appendChild(newiteam);
    console.log(node);
    node.append(task);
    document.getElementById("list").appendChild(node);
    }
    else{
        alert("you have not entered the task");
    }
}
// removing the let

function removetask(){
let index = prompt("enter the index of the the task");
let list = document.getElementById("list");
let li =list.getElementsByTagName("li")[index];
li.parentNode.removeChild(li)[index];

}