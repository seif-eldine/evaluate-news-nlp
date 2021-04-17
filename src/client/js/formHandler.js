import { checkForText } from './textChecker';

function handleSubmit(event) {

    event.preventDefault()

    // assigning what text was put into the form field and selecting the error message span by ID
    let formText = document.getElementById('name').value;
    let errMsg   = document.getElementById('errorMsg');
    let receivedText = document.getElementById('text');
    let receivedConfidence = document.getElementById('confidence');
    let receivedAgreement = document.getElementById('agreement');
    let resultsHolder = document.getElementById('card-details-placeholder');
    
    // If the boolean returned from (CheckForText) is true , Execute the Function below
    if(checkForText(formText)){
        
        console.log("::: Form is getting submitted :::")
        fetch(`http://localhost:8081/analyzation?txt=${formText}&lang=en`)
        .then(res => res.json())
        .then(res => {
            receivedText.innerHTML = res.text
            receivedConfidence.innerHTML = res.confidence
            receivedAgreement.innerHTML = res.agreement
            resultsHolder.innerHTML = ''
            // document.getElementById('results').innerHTML = res.message
        })
        .catch(err => {
            resultsHolder.innerHTML = err;
        });
        // If false, Don't execute, just show our span of error message
    } else {
        errMsg.style.display = "block"
    }
    
}

export { handleSubmit }
