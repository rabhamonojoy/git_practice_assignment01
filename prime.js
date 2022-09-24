funtion prime(num){
let count=0;
   for(let i=0;i<num;i++){
        count++;
} if(count==2){
    return true;
  }
    return false;
}
let ans=prime(13);
if(ans==true){
  console.log("Prime Number");
}else{
  console.log("Not Prime");
}