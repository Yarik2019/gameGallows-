const  wordsArrays = [
    'Hello',
    'Word',
    'Graeps',
    'peas',

];


const word = wordsArrays[Math.floor(Math.random() * wordsArrays.length)];

const wordLowerCase = word.toLowerCase();

const answerWord = [];


for(let i = 0; i < wordLowerCase.length; i++){
    answerWord[i] = '*';
};


let remainingLetter = wordLowerCase.length;

let counter = 3;

let isHet = false;

while(remainingLetter > 0){
    alert(answerWord.join(' '));

    let gusse = prompt('Угадайте букву або нажмітб Отмена для вихода із ігри');
    gusse = gusse.toLowerCase();

    if(gusse === null){
        break;
    }else if(gusse.length !== 1){
        alert('У введіть тільки одну букву');
    }else{
        isHet = false;
        for(let j = 0; j < wordLowerCase.length; j++){
             let letterRepeat = answerWord[j] === gusse;

            if(letterRepeat){
                alert('Ця буква була вже використана');
                break;  
            }
            
            if(wordLowerCase[j] === gusse){
                answerWord[j] = gusse;
                remainingLetter--;
                isHet = true;
            }
        }

        if(!isHet){
            counter--;
            alert(' ' + counter)
            
            if(counter === 0){
                alert('Поздравляю, ти проіграв!!!!');
                break;
            }
        }
    }
}


alert(answerWord.join(' '));
alert('Круто, ти відгадав слово ' + wordLowerCase);


