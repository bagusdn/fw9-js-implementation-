
const reverseWords = (str) =>{
    let tempWords = ""
    let finalOut = ""
    for(i=0;i<=str.length-1;i++){
        // tempWords = tempWords + str[i]
        if(str[i] === " "){
            finalOut = tempWords + " " +finalOut
            tempWords = ""
        }
        else{
            tempWords = tempWords + str[i]
        }
    }
    console.log(finalOut)
}
reverseWords("Saya Belajar Javascript")