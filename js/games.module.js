import { Game } from "./game.module.js";
import { Details } from "./details.module.js";
import { Loading } from "./loading.module.js";


export class Games{
    constructor(){
        this.getGames("mmorpg");
        this.handleNav();
    }

    handleNav(){
        document.querySelectorAll("ul .nav-item a").forEach(link=>{
            link.addEventListener("click", (e) => {
                document.querySelector("ul .nav-item .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        })
    }

    
    async getGames(category){
        Loading().show();
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1afea60e94msh9520791d1ec9630p1550a2jsn25cdc730f244',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            var response = await fetch(url, options);
            var result = await response.json();
            if(result.length)
                this.displayGames(result);
                this.handleClick();
                Loading().hide();
        } catch (error) {
            console.error(error);
        }
    }

    handleClick(){
        document.querySelectorAll(".gameContainer").forEach(link => {
            link.addEventListener("click", (e) => {
                new Details(link.dataset.id);
            })
        })
    }
    displayGames(games){
        document.querySelector("#games").innerHTML="";
        games.forEach(game => new Game(game));
    }

}











   

