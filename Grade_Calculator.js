/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
marks=85;
if(marks>=90 && marks<=100){
    console.log('You got A')
}
if(marks>=80 && marks<=89){
    console.log('You got B')
}
if(marks>=70 && marks<=79){
    console.log('You got C')
}
if(marks>=60 && marks<=69){
    console.log('You got D')
}
if(marks>=0 && marks<=59){
    console.log('You got F')
}