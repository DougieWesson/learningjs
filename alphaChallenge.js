
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const testMessage = "heeloTHERE";
let alphaCheck = "";
let messageCheck = "";
let numberOutput = [];

function getNumbers(testMessage) {
    
    const alphaCharacters = Array.from(alpha);
    const messageCharacters = Array.from(testMessage);

    let alphaCheck = alphaCharacters.toString();
    console.log(alphaCheck);
    let messageCheck = messageCharacters.toString();
    console.log(messageCheck);

    messageCharacters.forEach((messageItem, messageIndex, messageArray) => {
        alphaCharacters.forEach((alphaItem, alphaIndex, indexArray) => {
            
            if (messageItem == alphaItem) {
                numberOutput.push(alphaIndex + 1);
            }
        });
    });
    numberOutput.forEach((numberItem, numberIndex, numberArray) => {
        if (numberItem >= 27) {
            numberArray[numberIndex] = numberItem - 26;
        }
    });
}

getNumbers(testMessage);
console.log(alphaCheck);
console.log(messageCheck);
console.log(numberOutput);