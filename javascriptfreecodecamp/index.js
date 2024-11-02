let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    console.log("clicked")
    count = count+1
    countEl.innerText = count
    console.log(count)
}

