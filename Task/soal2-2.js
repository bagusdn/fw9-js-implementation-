const reverseWords = (str) =>{
    let newWords =  str.split(" ").reverse("").join(" ")
    console.log(newWords)
}
reverseWords("Saya Belajar Javascript")