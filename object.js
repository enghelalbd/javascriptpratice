

// 22_5-1 (optional) Explore what you can do with JavaScript Object
const student={

name:'Hasan',
ID:20124503,
Adress: '58, KADA Avenue',
friends: ['Hafiza','Rakiba','Nayona'],
isSingle:true,
 act:function(){
    console.log(' Very good singer')
},
 
result:[{bangla:15,english:15,math:87  }, {bangla:55,english:85,math:87   } ,   {  bangla:75,english:65,math:87                }],
 cycle :{
    company:' TATA',
    price:1200,
    model:'TA2025',
    Manufacturer:
    {
    name:  'TaTa  assemblye',
    ceo:' Rotan Tata',
    Headers:' New Delli'

         }
 }

}


console.log(student.act)
student.act()

// console.log(student)
// console.log(student.cycle)