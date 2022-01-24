let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let buttonDOM = document.querySelector("#liveToastBtn")

let newElement = () => {
    
    if (!taskDOM.value || taskDOM.value.trim() === "" )  {   // başta boşluk bırakmayı engelle
        let warning = document.getElementById("warning")   // boş yapma bildirimi
        var toast = new bootstrap.Toast(warning)
        toast.show()
        taskDOM.value = ""
    } else {

        // listeye görev ekleme
        let li = document.createElement("li")
        li.innerHTML = taskDOM.value;
        listDOM.appendChild(li)
        taskDOM.value = ""
        crossMaker()
        addClickEffect()

        // başarılı bildirimi
        let message = document.getElementById("liveToast")
        var toast = new bootstrap.Toast(message)
        toast.show()

    }
}

// görevlere çarpı işareti ekleme
let crossMaker =  () => {       
    let allTasks = document.getElementsByTagName("li")
    for ( let i = 0; i < allTasks.length; i++) {
        let span = document.createElement("span")
        let cross = document.createTextNode("\u00D7")
        span.className = "close cross"
        span.appendChild(cross)
        allTasks[i].appendChild(span)
    }

    let closeButtons = document.getElementsByClassName('cross')
    let crossArray = new Array()
    crossArray = [...closeButtons] // tüm çarpı işareti spanlarını bir array'de toplama

    for (let element of crossArray) { // tüm çarpı işaretlerine event atama
        element.addEventListener('click', function() {
            element.parentElement.remove()
            
        })
    }
}

document.onload = crossMaker()

// CSS'de ul li.checked kısmı çalışmadığı için bu şekilde yapmaya çalıştım 
let addClickEffect = () => { 
    let lists = document.getElementsByTagName('li')
    allItems = new Array()
    allItems = [...lists]
    for (let item of allItems) {
        let bgColor = item.style.backgroundColor
        item.addEventListener('click', function() {
            let bgColor = item.style.backgroundColor
            if (item.style.color == 'black') {
                item.style.background = '#276678'
                item.style.color = 'white'
                item.style.textDecoration = 'line-through'
            } else {
                item.style.background = '#f9f9f9'
                item.style.color = 'black'
                item.style.textDecoration = 'none'

            }
            
        })
    }
}
addClickEffect()
