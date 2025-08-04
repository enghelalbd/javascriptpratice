/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const fare=800;
const age=200;
const study=true;

 if(age<10){
    console.log('Free');
 }
else if(study===true)
{
  fare=fare/2;
console.log(fare);
}
  
else if(age>=60){

     fare=fare*15/100
console.log(fare);

}  

else
{
    console.log(fare);
}
