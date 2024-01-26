export function Loading(){
    const loading = document.querySelector(".loading");
    const mainContainer = document.querySelector(".mainContainer")
    function show(){
        mainContainer.classList.add("d-none");
        loading.classList.remove("d-none");
    }
    function hide(){
        mainContainer.classList.remove("d-none");
        loading.classList.add("d-none");
    }
    return {show,hide}
}