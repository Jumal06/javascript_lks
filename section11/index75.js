// Weak set , Weak Map

constws = new WeakSet();

const object1 = {};
const object2 = {};

ws.add(object1);
ws.add(object1);

console.log(ws);

console.log(ws.has(object1));
console.log(ws.has(object2));

ws.delete(object1);
console.log(ws.has(object1));

const ws = new WeakMap();

WeakMap.set(object1, 123456);
console.log(wm.has(object1));
console.log(wm.get(object1));

wm.delete(object1);
console.log(wm.has(object1));