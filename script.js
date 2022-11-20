let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
(minValue < -999) ? minValue = -999: console.log('правильное число');
if (isNaN (minValue)) {
minValue=1||NaN;
} else {};
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
(maxValue > 999) ? maxValue = 999: console.log('правильное число');
if (isNaN (maxValue)) {
maxValue=10||NaN;
} else {};
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);  
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');      
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload ();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){        
            const phraseRandom = Math.round( Math.random());    
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        }        
        else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++; 
            orderNumberField.innerText = orderNumber;
            const schetOver = Math.floor(Math.random() * 3);
            switch (schetOver) {
                case 0:
                    answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
                    break;  
                case 1:
                    answerField.innerText = `Давай что посложне, а твое число ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = ` Вы загадали число ${answerNumber }?`;
                    break;
                default:
                    alert('что-то пошло не так');
                }
        }
        
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
        else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const schetLess = Math.floor(Math.random() * 3);
            switch (schetLess) {
                case 0:
                    answerField.innerText = `Ваше число ${answerNumber }?`;
                    break;  
                case 1:
                    answerField.innerText = `Число, которое Вы загадали ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = ` В следующий раз давай сложнее, сейчас это ${answerNumber }?`;
                    break;
                default:
                    alert('что-то пошло не так');
                }
                }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const schet = Math.floor(Math.random() * 3);
        switch (schet) {
            case 0:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
                gameRun = false;
                break;  
            case 1:
                answerField.innerText = `Это было очень просто\n\u{1F609}`
                gameRun = false;
                break;
            case 2:
                answerField.innerText = `Легкотня\n\u{1F60D}`
                gameRun = false;
                break;
            default:
                alert('что-то пошло не так');
            }
        
    }
})
