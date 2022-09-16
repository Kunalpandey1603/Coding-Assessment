

const string1 = "jmigobon";
const string2 = "upnfxrw";

const arr1 = string1.split('');
const arr2 = string2.split('');

let output = '';
arr1.forEach((chr,index)=> {
    output = output + chr;
    if(arr2.length > index) {
        output = output + arr2[index];
    }
});

// if second string have more characters then 1st string, then just put the extra characters from 2nd string at last
// of the output string
if(arr1.length < arr2.length) {
    output = output + arr2.slice(arr1.length).join('')
}
console.log('output', output);