var pokemon = {

  pokemonList : allPokemon,

  printAllPokemonNamesToConsole : function(){
    _.each(this.pokemonList, function(el){
        console.log(el)
      })
    },

  findPokemonByName : function(name){
    var namedPokemon = _.find(this.pokemonList, function(el){
      return el.name === name
    })
    return namedPokemon
  },

  findStrongestPokemon : function(attack){
    var strongestPokemon = _. find(this.pokemonList, function(poke){
      return poke.stats.attack; 
    })
    return strongPokemon
  },

  findPokemonByType : function(typeToLookFor){
    var typePokemon = _.where(this.pokemonList, function(el){
      return _.contains(el.type, typeToLookFor)
    });
      return typePokemon;
      console.log(typePokemon)
  },

  findAllTypes : function(){
  },

  totalStats : function(name){
  }
}