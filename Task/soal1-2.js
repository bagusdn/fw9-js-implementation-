const palindromChecker = (str) =>{
    let reverseStr = str.split('').reverse('').join('')
    if (reverseStr === str ){
        console.log(`${reverseStr} adalah Palindrom`)
    }
    else{
        console.log(`${reverseStr} Bukan Palindrom`)
    }
}
palindromChecker('malammmm')