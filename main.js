window.addEventListener('load', () => {

    let form = document.form;
    let answer = document.querySelector('.answer');
    let resp = '';

    form[4].addEventListener('click', (e) => {
        onSubmit();
        e.preventDefault();
    });

    onSubmit = () => {
        if(form[2].value == '+'){
            resp = Math.round( Number(form[0].value) + Number(form[1].value));
            answer.innerHTML = `Answer: ${resp}`;
        }
        if(form[2].value == '-'){
            resp = Math.round( Number(form[0].value) - Number(form[1].value));
            answer.innerHTML = `Answer: ${resp}`;
        }
        if(form[2].value == '*'){
            resp = Math.round( Number(form[0].value) * Number(form[1].value));
            answer.innerHTML = `Answer: ${resp}`;
        }
        if(form[2].value == '/'){
            resp = Math.round( Number(form[0].value) / Number(form[1].value));
            answer.innerHTML = `Answer: ${resp}`;
        }
        
    }
    form[3].addEventListener('click', (e) => {
        form[0].value = '';
        form[1].value = '';
        e.preventDefault();
    });
    console.dir(form)
});