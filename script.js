// const userInput = document.getElementById('input')
// userInput.innerHTML = input
// console.log('hello');



// ÉTAPE 1 : Vérifier si une date est valide
let inputUser = prompt('Entrez une date au format : jj/mm/aaaa')

const isValidDate = (dateString) => {

    let dateSplit = dateString.split("/")

    if (dateSplit.length !== 3) {
        alert('Utilisez le format jj/mm/aaaa.');
        return;
    }
    console.log(dateSplit);

    let dayInput = parseInt(dateSplit[0])
    console.log("le jour", dayInput);

    let monthInput = parseInt(dateSplit[1])
    console.log("le mois", monthInput);

    let yearInput = parseInt(dateSplit[2])
    console.log("l'année", yearInput);

    if (monthInput < 1 || monthInput > 12) { alert(`Rentrez un mois valide, le mois ${monthInput} n'existe pas.`); return }
    if (yearInput < 1000 || yearInput > 9999) { alert('Rentrez une année valide'); return }

    let maxDays = maxDaysInMonth(monthInput)
    if (dayInput < 1 || dayInput > maxDays) { alert(`Le mois ${monthInput} ne comporte que ${maxDays} jours.`) }

}

const anneeBissextile = (annee) => {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
};

const maxDaysInMonth = (mois, annee) => {
    const months31 = [1, 3, 5, 7, 8, 10, 12]
    const months30 = [4, 6, 9, 11]

    if (months31.includes(mois)) { return 31 }
    else if (months30.includes(mois)) { return 30 }
    else if (mois == 2) { return anneeBissextile(annee) ? 29 : 28 }
    return false
}
isValidDate(inputUser)


// ÉTAPE 2 : Vérifier si une date est un palindrome

const isPalindrome = (date) => {

    const dateWithoutSlash = date.split("/").join("")
    console.log('date sans slash', dateWithoutSlash);

    const reversedDate = dateWithoutSlash.split("").reverse().join("")
    console.log('🔄 Date inversée :', reversedDate);

    return (dateWithoutSlash === reversedDate)
}

const isDatePalindrome = (inputUser) => {
    console.log('🚀 Date entrée par l\'utilisateur :', inputUser)

    if (isPalindrome(inputUser)) {
        console.log("C'est un palindrome")
    } else {
        console.log("Ce n'est pas un palindrome")
    }
}
isDatePalindrome(inputUser)



// Étape 3 : Trouver les prochaines dates palindrome


const getTodayDate = () => {
    const date = new Date();
    return date; 
}


// const getNextPalindromes = (x) => {
//     let palindromeList = []
//     let todayDate = getTodayDate()

//             // tant que la taille du palindromeList est < à x
//     while(palindromeList.length < x) { 
//             // j'ajoute un jour à la date courante
//         todayDate.setDate(todayDate.getDate() + 1)}
    
//             // Je convertis la date au format jj/mm/aaaa
//         let formatDate = todayDate.toLocaleDateString('fr-FR')

//             // Si la date est un palindrome, il s'ajoute à la liste
//         if (isDatePalindrome(formatDate)) {
//             palindromeList.push(formatDate)
//         }
//         console.log(palindromeList);
//     return palindromeList
    
// }
