// arrays - (a.k.a "indexed collection")
const nmb = [1,7,2.9,Math.PI]
console.log(nmb)

const txt = Array.from('pneumoultramicroscopicossilicovulcanoconiótico');
console.log(txt)

nmb.push(2/3);
console.log('push(2/3): ' + nmb);

nmb.push(Math.sqrt(39),-88);
console.log('push(Math.sqrt(39),-88): ' + nmb);

txt.unshift('#');
console.log(txt);

console.log('join: ' + txt.join(""));
console.log('reverse: ' + txt.reverse().join(""));
console.log('length: ' + txt.length);
console.log('last: ' + txt[txt.length-1]);
console.log('third: ' + txt[2]);

console.log('slice: ' + nmb.slice(1,3));
console.log('map/double: ' + nmb.map(n => n*2));
console.log('filter: ' + nmb.filter(n => n%2 === 0));
console.log('reduce: ' + nmb.reduce((a,n) => a + n, 0));

// sets - (a.k.a "keyed collection")
const nmt = new Set();
const nms = new Set([1,2,3,4]);

/*atribution error
const nme = new Set(1);*/

const nmd = new Set([5,8]);
console.log(nmd.size); //verify set length

nmd.add(4);
console.log(nmd.size); //add unique entry

nmd.add(5);
console.log(nmd.size); //don't add repeated entry

nmd.has(8); //verify if value exists on set (true)
nmd.has(1); //verify if value exists on set (false)

nmd.delete(5); //erase item from set
nmd.has(5); // return false

[...nmd]; //return all elements

nmd.clear(); //remove all elements

let sel = new Set([89,93,104,287]);
let arr = Array.from(sel); //convert set to array
let sep = new Set(arr); //convert (unique elements) from array to set

const arb = ['a', 'a', 'b', 'c', 'c'];
const seq = new Set(arb); //convert to set
const arc = [...seq]; //convert to array