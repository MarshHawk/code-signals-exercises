//mine

let r = [... 'ABCDEFGH']
let c = [... '12345678']
chessBoardCellColor = (x, y) => (r.indexOf(x[0])+r.indexOf(y[0])+c.indexOf(x[1])+c.indexOf(y[1]))&1 ? false : true

//best es6 theirs