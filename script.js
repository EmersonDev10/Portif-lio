document.addEventListener("DOMContentLoaded", function(){
    const darkTrigger = document.querySelector(".dark-trigger")
    darkTrigger.addEventListener("click",function(){
        document.body.classList.toggle("dark")
    })
})