let input = document.querySelector("#input")
let text = document.querySelector("#.text")
let btn = document.querySelector("#btn")

function ADD (){
    if (input.value =="") {
        alert("please add atleast one task")
    }
    else{
        let newli = document.createElement("li")
        newli.className = "LiClass"
        newli.innerHTML = <button id = "delete"><span class ="material-symbol-outlined">
            delete
            </span>  </button>
        text.appendChild(newli);
        input.value ="";

        newli.querySelector("span").addEventListener("click",remove)
        function remove(){
            newli.parentNode.removeChild(newli);

        }

            
        
    }

}