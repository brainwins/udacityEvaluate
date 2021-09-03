import {urlValidator} from './urlValidator';

function handleSubmit(event) {
    const invalidURL = document.getElementById("invalidURL");
    event.preventDefault()

    const usertext =  document.getElementById('userinput').value;

    if(Client.urlValidator(usertext)){
      console.log(usertext, "valid")
      invalidURL.style.display = "none";
      fetch('http://localhost:8081/apiCall', {
            method: 'POST',
            credentials: 'same-origin',
            cache: 'no-cache',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({usertext})
        })
        .then(response => response.json())
        .then(data => updateUI(data));
      }
      else {
        console.log("invalid")
        invalidURL.style.display = "inline-block";
      }

}
function updateUI (data) {
  console.log("updateTo", data);
  document.getElementById('confidence').innerHTML = data.confidence+"%";
  document.getElementById('agreement').innerHTML = data.agreement;
  document.getElementById('irony').innerHTML = data.irony;
  document.getElementById('subjectivity').innerHTML = data.subjectivity;
}

export {handleSubmit}
