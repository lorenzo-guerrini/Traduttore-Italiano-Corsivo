// Elementi HTML
const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");

// Stringhe caratteri utilizzati
const corsivoLetters = "aeiouAEIOU";
const corsivoLastLetters = "aoAO";
const punctuation = "\"\'|!?\\/()=^[]@#,;.:-_";

// Start
function startTranslation() {
    // Divide la stringa di input in un array di parole
    let inputArray = inputArea.value.split(" ");

    // Output
    outputArea.innerHTML = translate(inputArray);
}

// Gestisce la traduzione
function translate(input) {
    // Contatore delle lettere corsive utilizzate escluse le finali
    let corsivoLettersCounter = 0;
    // Array di output
    let outputArray = [];

    // Traduce ciascuna parola
    input.forEach(word => {
        // Divide la parola in array
        let wordArray = word.split("");

        // Traduce ciascuna lettera
        wordArray.forEach(function (letter, i, arr) {

            // Se la lettera è tra quelle ammesse, la traduce
            if (corsivoLetters.includes(letter)) {

                // Gestisce ultime lettere
                if (i + 1 == arr.length || punctuation.includes(arr[i + 1])) {
                    if (corsivoLastLetters.includes(letter)) {
                        switch (letter) {
                            case "a":
                                arr[i] = "æ";
                                break;
                            case "o":
                                arr[i] = "œ"
                                break;
                            case "A":
                                arr[i] = "Æ";
                                break;
                            case "O":
                                arr[i] = "Œ"
                                break;
                        }
                        return;
                    }
                }

                // Se il contatore è pari mette un macron sulla vocale, altrimenti una dieresi
                if (corsivoLettersCounter % 2 == 0) {
                    switch (letter) {
                        case "a":
                            arr[i] = "ā";
                            break;
                        case "e":
                            arr[i] = "ē";
                            break;
                        case "i":
                            arr[i] = "ī";
                            break;
                        case "o":
                            arr[i] = "ō";
                            break;
                        case "u":
                            arr[i] = "ū";
                            break;
                        case "A":
                            arr[i] = "Ā";
                            break;
                        case "E":
                            arr[i] = "Ē";
                            break;
                        case "I":
                            arr[i] = "Ī";
                            break;
                        case "O":
                            arr[i] = "Ō";
                            break;
                        case "U":
                            arr[i] = "Ū";
                            break;
                    }
                } else {
                    switch (letter) {
                        case "a":
                            arr[i] = "ä";
                            break;
                        case "e":
                            arr[i] = "ë"
                            break;
                        case "i":
                            arr[i] = "ï";
                            break;
                        case "o":
                            arr[i] = "ö";
                            break;
                        case "u":
                            arr[i] = "ü";
                            break;
                        case "A":
                            arr[i] = "Ä";
                            break;
                        case "E":
                            arr[i] = "Ë";
                            break;
                        case "I":
                            arr[i] = "Ï";
                            break;
                        case "O":
                            arr[i] = "Ö";
                            break;
                        case "U":
                            arr[i] = "Ü";
                            break;
                    }
                }
                corsivoLettersCounter++;
            }
        });
        // Converte l'array della parola in stringa e la aggiunge all'array di output
        outputArray.push(wordArray.join(""));
    });

    // Ritorna l'array di output convertito in stringa
    return outputArray.join(" ");
}