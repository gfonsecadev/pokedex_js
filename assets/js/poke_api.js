const pokemons=[]

function recuperar_pokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon/").
       then((e)=>e.json()
     ).then((e)=>{
        e.results.map((e)=>{
                            fetch(e.url)
                            .then((e)=>e.json())
                            .then((e)=>{
                                const {types:{0:{type:{name:type}}}}=e
                                pokemons.push(e)
                                card_pokemon.innerHTML+= api_to_html(e,type) })}) 
    })}
  
