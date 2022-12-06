document.addEventListener("keyup" , e=>{

if (e.target.matches("#buscador")){

        if(e.key === "Escape") e.target.value = ""

        document.querySelectorAll(".articulo").forEach(obra =>{
            obra.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?obra.classList.remove("filtro")
            :obra.classList.add("filtro")

        })
    }
})