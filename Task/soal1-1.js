
const palindromCheck = (str) =>{
    let reverseStr = ''
    for(i=str.length-1;i>=0;i--){
        reverseStr = reverseStr + str[i]
    }
    if (reverseStr===str){
        console.log(`${reverseStr} adalah palindrom`)
    }
    else{
        console.log(`${reverseStr} bukan palindrom`)
    }
 
}
palindromCheck('maoolam')