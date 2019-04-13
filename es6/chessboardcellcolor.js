const ts = [["A1","C3"],["A1","H3"]]

//mine
let r = [... 'ABCDEFGH']
let c = [... '12345678']
c0 = (x, y) => (r.indexOf(x[0])+r.indexOf(y[0])+c.indexOf(x[1])+c.indexOf(y[1]))&1 ? false : true

//best es6 theirs (miguel_r58)
c1 = (a,b) => ~parseInt(a+b, 19)%2 //or &1

//mine refactored

c2 = (x, y) => (r.indexOf(x[0])+r.indexOf(y[0])+c.indexOf(x[1])+c.indexOf(y[1]))&1 ? -0 : -1
//assert substitute c0, c1, c2

console.log(ts.every(t => c0(t[0], t[1]) === c1(t[0],t[1])))