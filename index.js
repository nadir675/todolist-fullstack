const clickMeBtn = document.getElementById("click-me -btn")
const input = document.getElementById("input")


let task = [];

document.addEventListener("DOMContentLoaded",() => {

    clickMeBtn.addEventListener('click', () => {  
        tasks.push(input.value)
        
        const task = document.createElement("p")
        task.innerText -input.value;
        list.appendchild(task)
    })
})