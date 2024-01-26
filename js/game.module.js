export class Game{
    constructor(game){
       this.display(game)
    }
    display(game){
        document.querySelector("#games").innerHTML += 
        `<div class="col-md-1 col-lg-2 col-xl-3 mb-3 "  href="${game.game_url}" >
           <div class="card h-100 bg-transparent text-white ">
                 <div class="card-body gameContainer" data-id="${game.id}"  role="button" >
                    <div class="position-relative">
                        <img src="${game.thumbnail}" class="w-100 rounded-top">
                    </div>
                    <div>
                        <div class="hstack justify-content-between my-2 ">
                            <h3 class="h6 small">${game.title}</h3>
                            <span class="hashcolor text-bg-primary p-2 rounded" >free</span>
                        </div>
                        <p class="card-text small text-center opacity-50">${game.short_description}</p>
                    </div>
                </div>
                <footer class="card-footer small hstack justify-content-between"> 
                    <span class="badge badge-color">${game.genre}</span>
                    <span class="badge badge-color">${game.platform}</span>
                </footer>
            </div>
        </div>` 
    }
}