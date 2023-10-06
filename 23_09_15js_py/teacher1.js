const _pokemon = ['파이리', '이상해씨', '꼬북이', '피카츄'];
let newPokemon = '에딧몬';

for (let i = 0; i <= _pokemon.length; i++) {
  if (i === _pokemon.length) {
    _pokemon[i] = newPokemon;
    break;
  }
}
console.log(_pokemon);
