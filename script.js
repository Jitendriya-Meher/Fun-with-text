
const myTextBox = document.querySelector("#my-text-box");
const result =document.querySelector("#result");

console.log(myTextBox,result);

// validation for empty string
const isEmpty = () => {

    const text = myTextBox.value;

    if( text.length === 0 ){
        return true;
    }else{
        return false;
    }
}

// function to reverse the string
const reverse = () => {
    
    if( isEmpty()){
        result.innerHTML = `please Enter Some Text`;
        return;
    }
    
    const text = myTextBox.value;
    const revText = text.split("").reverse().join("");

    result.innerHTML = `The reversed text is : <span> ${revText}</span>`

}

const reverseBtn = document.querySelector("#reverseBtn");
reverseBtn.addEventListener("click",reverse);

// function to check palindrome
const isPal = () => {
    
    if( isEmpty()){
        result.innerHTML = `please Enter Some Text`;
        return;
    }
    
    const text = myTextBox.value;
    const revText = text.toLowerCase().split("").reverse().join("");

    const pal = (text === revText) ? "a Palindrome" : "not a Palindrome"; 

    result.innerHTML = `It is : <span> ${pal}</span>`

}

const isPalBtn = document.querySelector("#isPalBtn");
isPalBtn.addEventListener("click",isPal);


// function to count the number of characters
const noOfChar = () => {
    
    if( isEmpty()){
        result.innerHTML = `please Enter Some Text`;
        return;
    }
    
    const text = myTextBox.value;
    const charCount = text.length;

    result.innerHTML = `The character count is : <span> ${charCount}</span>`

}

const charBtn = document.querySelector("#charBtn");
charBtn.addEventListener("click",noOfChar);


// function to count the number of word
const noOfword = () => {
    
    if( isEmpty()){
        result.innerHTML = `please Enter Some Text`;
        return;
    }
    
    const text = myTextBox.value;
    const wordCount = text.trim().split(/\s+/).length;

    result.innerHTML = `The word count is : <span> ${wordCount}</span>`;

}

const wordBtn = document.querySelector("#wordBtn");
wordBtn.addEventListener("click",noOfword);



// search word
const searchBtn = document.querySelector("#searchBtn");
const searchText = document.querySelector("#search-text");

console.log(searchBtn,searchText);

const searchWord = () => {

    const stext = searchText.value;

    if( isEmpty() || stext.length == 0){
        result.innerHTML = `Either or Both Input Field Is Empty`;
        return;
    }
    
    const text = myTextBox.value;

    if( text.includes( stext ) ){
        result.innerHTML = `The text contains <span> ${stext}</span>`;
    }
    else {
        result.innerHTML = `The text doesn't contains <span> ${stext}</span>`;
    }
};

searchBtn.addEventListener("click",searchWord);