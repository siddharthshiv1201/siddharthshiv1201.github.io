function main(){
    let b=1;
    function sub(){
        return b+1;
    }
    return sub;
}
let a=main(); // a is ot main a is what main in returning
console.log(a());