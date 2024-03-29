// simple function
 function  firstlog(){
    console.log( "Hello World!" );
 }
 firstlog( ) ;
  
 //calling  a function with parameters
 function addNumber(a,b){
    let sam = a+b;
    console.log(sam)
 }
 addNumber(5,10);
 // return value from the function
 function multiplyNumber(x , y ){
    let  result=    "multiplyby,"+ x *y + "is perfect number"
    return  result;

 }
 console.log(multiplyNumber(2,3));


 // using function in type
 //parameter and argument

 function resturant(name:string , items : string[] ){
    

    console.log(`Welcome to ${name} . We serve ${items}`);
    }
    resturant("kababjees",["burger","Pizza", "bar becue"]);


    
    
    


    

    
    

 