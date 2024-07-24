
//program 1 
//Array Spreading 
const num=[1,2,3,4,5,6];
const[add,remove, ...update]=num;
console.log(add);
console.log(remove);
console.log(update);



//program 2 Find minimum and maximum
//maximum
let arr=[15,12,21,20,45,50];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
        max=arr[i];
}
console.log(max);


//minimum
let arr1=[15,12,21,20,45,50];
let min=arr1[0];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]<min)
        min=arr1[i];
}
console.log(min);



//program 3 
//find()
let colors=["Yellow","Blue","Red","Green"];
let message= colors.find (colors=>colors.startsWith("G"));
console.log(message);



//program 4 
//filter()
let name2=['bharani','latha','karthick','kiruthika']
let name1= name2.filter(name2=>name2.length>6)
console.log(name1);
  

//program 5
//Flattening Arrays
let array=[1,[4,2],[8,3],[9,0],5];
let flat=array.flat(3);
console.log(flat);