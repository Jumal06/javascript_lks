// ES6 Data Structure : map

let map = new Map();

map.set('Mango', 'Ame');
map.set('Banana', 'Kola');
map.set('Score', 100);

console.log(map);

for(let el of map){
    console.log(el);
}

console.log(map.has('dfsdf'));

map.delete('Banana');
console.log(map);

console.log(map.values());
console.log(map.keys());

map.clear();
console.log(map);