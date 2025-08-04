const sentence='I am learning web dev';
let rev =' '
for(let i=0;i<sentence.length;i++){
const letter=sentence[i];
rev=letter+rev;
}
console.log(rev);
const reversed=sentence;
console.log(reversed);
const revsp=sentence.split('') .reverse('') .join('');
console.log(revsp);