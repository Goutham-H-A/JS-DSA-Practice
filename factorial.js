function fact(x){
    if(x==0 || x==1){
        return x;
    }
    else{
        return x * fact(x-1);
    }
}
let x =8;
let result = fact(x);
console.log(result);