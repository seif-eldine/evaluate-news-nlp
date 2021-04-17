// Checking the input text against REGEX , the test return boolean true/false value ...
function checkForText(inputText) {

    console.log("::: Validating the text inserted :::", inputText);
    // Returns true if the text is valid against the regex
    return /^[a-zA-Z ]+$/.test(inputText);
}

export { checkForText }
