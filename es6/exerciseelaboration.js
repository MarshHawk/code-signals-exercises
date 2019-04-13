//mine
var ps = [6,5,9]
var ns = [2,1,0]

function ee0(p, n) {
    let ss = n > 0 ? `${p}${0}${p}` : `${p}${p}` 
    return [...`${Math.pow(parseInt(`${ss}`), 2)}`].map(m => parseInt(m)).reduce((u, a) => u + a);
}

//theirs

ee2 = (p, n) => eval([...(p*(n?101:11))**2+''].join`+`)

p*(n?101:11)

//

function ee5(p, n) {
    return [...(p*(n?101:11))**2].map(m => parseInt(m)).reduce((u, a) => u + a);
}

function ee6(p, n) {
    return [...(p*(n?101:11))**2+``].map(m => parseInt(m)).reduce((u, a) => u + a);
}

function ee7(p, n) {
    return eval([...(p*(n?101:11))**2+``].join`+`);
}

