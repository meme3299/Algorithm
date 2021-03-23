//1. Print 1 - 135
for(var i=0; i<=135;i++){
    console.log(i);

};
//2. Print Odd Numbers 1 - 135
for(var i=1; i<=135; i++){
    if(i%2!=0){
      console.log(i);
}
};

//3.Sum of Printed Numbers
let sum=0;
for(var i=0; i<=135; i++){
  
  sum+=i;
    
  
console.log('number is '+ i + ' sum is '+ sum);
};

//4. Print the elements of an array
const X = [1,4,2,12,8,9,110];
const l= X.length;
for(var i=0; i<l ; i++){
  
  console.log(X[i]);
};
const X = [1,4,2,12,8,9,110];
const l= X.length;
for(var i=0; i<l ; i++){
  
  console.log(X[i]);
};

//5. Find Max
let X = [2,1700,-3,10000,-1,90,800,8000000];
let l= X.length;
let max=X[l-1]

for(var i=0; i<l; i++){
  
  if(X[i] > max){
    
    max = X[i];
  }
}
console.log(max);

//6. Get Average

let X= [2,1,3,10];
let l= X.length;
let sum = 0;
for(var i=0; i<l; i++){
  sum+=X[i];
  
  
  
  }
var avr =sum/l
  console.log(avr);

  //7. Eliminate the Negatives
  let X = [2,-1,4,-3];
var l= X.length;
for(var i=0; i<l; i++){
  
  if(X[i] < 0){
    X[i] = 0;
    
    };
  
  
};
console.log(X);
//8. Number to String
let X = [1,-4,0,-1] ;
var l= X.length;
for(var i=0; i<l; i++){
  
  if(X[i] < 0){
    X[i] = 'Turing';
    
    };
  
  
};
console.log(X);