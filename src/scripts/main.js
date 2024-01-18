const birthday = new Date('September 10, 2024 00:00:00').getTime();

const countdown = setInterval(function(){
    const today = new Date().getTime();
    let timeUntilBirthday = birthday - today;

    let days = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);

    const showDateCountdown = document.querySelector('#countdown');

    showDateCountdown.innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;

    if (timeUntilBirthday < 0){
        clearInterval(countdown);
        showDateCountdown.innerHTML = 'Parabéns  !!!';
    }
}, 1000);











