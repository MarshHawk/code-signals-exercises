ns = [5,304,877,91]

///Mine

function dd0(n) {
    var i = 0;
    while (n>=10) {
        i++;
        n = calcD(n.toString());
    }
    return i;
}

function calcD(s) {
    var v = 0;
    for (let i of [...Array(s.length).keys()]) {
        v += Number(s[i]);
    }
    return v;
}

/////best theirs
f = dd1 = n => n > 9 ? 1 + f(eval([...n+''].join`+`)) : 0

f = dd2 = n =>
    n > 9
      ? 1 + f(eval([...n + ''].join`+`))
      : 0

function dd3(n) {
    var i = 0;
    while (n>=10) {
        i++;
        n = eval([...n + ''].join`+`);
    }
    return i;
}

function dd4(n) {
    return n > 9 ? 1 + dd4(eval([...n + ''].join`+`)) : 0 
}