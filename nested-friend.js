/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
mymarks=85;
friendmarks=70;
if(mymarks>80)
    if(friendmarks>80){
        console.log('Yougo for a lunch ')
    }
   else if(friendmarks<80 && friendmarks>60){
        console.log('good luck next time')
    }
    else if(friendmarks<60 && friendmarks>=40){
        console.log('Unseen')
    }
   else if( friendmarks<40){
        console.log('Block')
    }
else{
    console.log('go to home and sleep and act sad')
}