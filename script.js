var inp = document.querySelector('input')
var btn = document.querySelector('button')
var div = document.querySelector('div')
var updateBtn = document.getElementById('btn')
btn.addEventListener('click', () => {
    if (inp.value !== "") {
        var a = JSON.parse(localStorage.getItem('data'))
        if (a) {
            a.push(inp.value)
            localStorage.setItem('data', JSON.stringify(a))
        }
        else {
            localStorage.setItem('data', JSON.stringify([inp.value]))

        }
        inp.value = ""
        showData()
    }
    else {
        alert("Enter something first")
    }
})

function showData() {
    var myData = JSON.parse(localStorage.getItem('data'))
    if (myData) {
        div.innerHTML = ""
        myData.forEach((ele, index) => {
            var li = document.createElement('li')
            li.innerHTML = `${ele} <button class="button" onclick=handleEdit(${index})>edit</button> <button class="button" onclick=handleDel(${index})>del</button>`
            div.appendChild(li)
        });
    }
}
function handleDel(i) {
    var a = JSON.parse(localStorage.getItem('data'))
    a.splice(i, 1)
    localStorage.setItem('data', JSON.stringify(a))
    showData()
}
var handleIndex = -1;
function handleEdit(i) {
    var a = JSON.parse(localStorage.getItem('data'))
    inp.value = a[i]
    handleIndex = i;
}

updateBtn.addEventListener('click', () => {
    var a = JSON.parse(localStorage.getItem('data'))
    a[handleIndex] = inp.value;
    localStorage.setItem('data', JSON.stringify(a))
    showData()
    inp.value = ""
})
