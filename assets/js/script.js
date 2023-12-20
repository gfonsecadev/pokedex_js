
const card_pokemon=document.getElementById('pokemons')
const pokemon_informacoes=document.getElementById('pokemon_info')
//função que retorna uma string que forma um html dinâmico

function api_to_html(pokemon,type){
  return `<li class="pokemon ${type}" >
                              <div id=${pokemon.order} onClick=pokemon_clicado(${pokemon.order})>
                                  <h3>${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h3>
                                  <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
                              </div>
                          </li>`

}

function pokemon_detalhes(pokemon){
    return   `<div id="poke_img_detail" class=${pokemon.type}><img src=${pokemon.image} alt=${pokemon.name}></div>
              <div id="poke_details">
                  <h2>Name: ${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
                  <h3>Type: ${pokemon.type}</h3>
                  <div id="abil_move">
                    <h4>Abilities:</h4>
                    <ul class="ability">
                        ${pokemon.abilities.map((e)=>`<li>${e}</li>`)}
                    </ul>
                    <h4>Moves:</h4>
                    <ul class="move">
                        ${pokemon.moves.map((e)=>`<li>${e}</li>`)}
                    </ul>
                  </div>
              </div>`.replaceAll(",","")
}

recuperar_pokemon()

function pokemon_clicado(id){
  const pokemon_info=pokemons.filter((e)=>e.order==id)[0]
  const {name, sprites:{other:{dream_world:{front_default:image}}}, types:{0:{type:{name:type}}},abilities:abils,moves:movs}=pokemon_info
  const moves=movs.map((e)=>e.move.name)
  const abilities=abils.map((e)=>e.ability.name)
  const poke_details={name,id,type,abilities,moves,image}
  pokemon_informacoes.innerHTML=pokemon_detalhes(poke_details)
  
}


console.log()


