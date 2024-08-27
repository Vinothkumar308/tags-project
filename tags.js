const clear = document.querySelector("#clear")
const copy = document.querySelector("#copy")
const text = document.querySelector("#text-input")
const tags = document.querySelectorAll(".tags")
const maintags = document.querySelector(".input-tag")

let list = []


function createTag(list){
    const divelement = document.createElement("div")
    divelement.setAttribute("class","tags")
    const spanelement = document.createElement("span")
    spanelement.innerHTML = list
    const ielement = document.createElement("i")
    ielement.setAttribute("class","fa-regular fa-circle-xmark")
    ielement.setAttribute("id","remove")
    ielement.setAttribute("data-item",list)
    divelement.appendChild(spanelement)
    divelement.appendChild(ielement)
    return divelement
}

function reset(){
    const tag1 = document.querySelectorAll(".tags")
    tag1.forEach((tag)=>{
        tag.parentElement.removeChild(tag)
    })
    
}


function create(){
    reset()
    list.forEach((lists)=>{
         maintags.appendChild(createTag(lists))
    });
    
}


text.addEventListener("keyup",function(e){
     if(e.key=="Enter"){
        const data = text.value.trim()
        if(data.includes(",")){
            const list_of_tags = data.split(",")
            list.push( ...list_of_tags)
            
           }
        else{
            list.push(data)
            
        }
         
        list = [...new Set(list)]
        text.value=""
        create()
       
     }
    
})

clear.addEventListener("click",()=>{
    list = []
    reset()
})

document.addEventListener("click",function(e){
    if(e.target.tagName =="I"){
        const data = e.target.getAttribute("data-item")
        const filterTags = list.filter((tag)=>{
            return tag!=data
        })
        list = filterTags
        create()
    }
        
})

copy.addEventListener("click",()=>{
    if(list.length){
    navigator.clipboard.writeText(list)
    alert("text copied..!")
    }
})
