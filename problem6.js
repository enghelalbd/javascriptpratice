/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
let increment=0;
let Currentsalary=startingSalary
for (let i=1;i<=experience;i++){
    increment=Currentsalary*0.05
    Currentsalary=Currentsalary+increment
   

}
    
console.log(Currentsalary.toFixed(2))