// arrays
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