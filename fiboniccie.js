function fib(x){
    if(x==0 || x==1){
        return x;
    }
    else{
        return fib(x-1) + fib(x-2);
    }
}
let x =8;
let result = fib(x);
console.log(result);