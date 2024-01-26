import { Loading } from "./loading.module.js";
export class Details{

    constructor(id){
        this.getDetails(id);
        this.closeDetails();
    }
    async getDetails(id){
        Loading().show();
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1afea60e94msh9520791d1ec9630p1550a2jsn25cdc730f244',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result.id){

            this.display(result);
            this.showDetails();
            Loading().hide();
        }
    } catch (error) {
        console.error(error);
    }
    }
    display(data){ 
        const content = `<div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="details">
        </div>
        <div class="col-md-8">
            <h3>Title: ${data.title}</h3>
            <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
            <p class="small">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        </div>`
    
        document.getElementById("detailsContent").innerHTML = content;
    }
    showDetails(){
        document.querySelector(".gamesContainer").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
    closeDetails(){
        document.getElementById("btnclose").addEventListener("click", () => {
            document.querySelector(".gamesContainer").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
         });
    }
}