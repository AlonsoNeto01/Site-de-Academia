let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
 nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }
    document.getElementById("radio" +count).checked = true;
}
function toggleFeedbackForm() {
    const iframe = document.getElementById('feedbackIframe');
    const button = document.querySelector('.feedback__toggle-button');

    if (iframe.style.display === 'none') {
        iframe.style.display = 'block'; // Mostra o iframe
        button.textContent = 'Esconder Formulário'; // Altera o texto do botão
    } else {
        iframe.style.display = 'none'; // Esconde o iframe
        button.textContent = 'Mostrar Formulário'; // Altera o texto do botão
    }
}