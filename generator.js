function * add(x){
    yield x+1;
    var y=yield(null);
    y=6;
    return x+y;
}

var g=add(5)
console.log(g.next());
console.log(g.next());