//The very first function, it adds eventListners to the DOM, and it gets executed in the index.js
//handleSubmit gets executed on submit event, checkForText executes on Keyup event
function execute(handleSubmit, checkForText) {
    // listens to Submit event on Form, if submitted, execute handleSubmit 
    document.getElementById('form').addEventListener('submit', function (event) {
        handleSubmit(event);
    });
    
    // on every key up on Name input, if input value is clear then don't display error, if checkForText is true don't display error
    document.getElementById('name').addEventListener('keyup', function (event) {
        let errMsg = document.getElementById('errorMsg');
        if (!event.target.value) {
            errMsg.style.display = 'none';
            return;
        }
        if (checkForText(event.target.value)) {
            errMsg.style.display = 'none';
            return;
        }

        // Otherwise, display the error message >>
        errMsg.style.display = 'block';
    });
}

export { execute };