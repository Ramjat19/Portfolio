const scriptURL = 'https://script.google.com/macros/s/AKfycbxJQuZumWsUKv55xPuLvG7E9YfdFK101wQd_7i89VEfkI0eWCj7f3LaBv_9rMrgI5cG/exec'
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success')
form.addEventListener('submit', e => {
e.preventDefault()
let requestBody = new FormData(form)
fetch(scriptURL, { method: 'POST', body: requestBody})
.then(response => {
success.innerHTML="THANKS for Adding NEW Question";
  
setTimeout(function(){
    success.innerHTML="";
},1000)
form.reset();
})
.catch(error => console.error('Error!', error.message))
})