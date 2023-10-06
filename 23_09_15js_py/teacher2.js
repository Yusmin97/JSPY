const _pokemon = ['파이리', '이상해씨', '꼬북이', '피카츄'];
let lastPokemon = '';
for (let i = 0; i < _pokemon.length; i++) {
  if (i === _pokemon.length - 1) {
    lastPokemon = _pokemon[i];
    _pokemon.length = _pokemon.length - 1;
  }
}
console.log(lastPokemon);
