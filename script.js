// const userInput = document.getElementById('input')
// userInput.innerHTML = input
// console.log('hello');



// ÉTAPE 1 : Vérifier si une date est valide
let inputUser = prompt('Entrez une date au format : jj/mm/aaaa')

const isValidDate = (dateString) => {

    let dateSplit = dateString.split('/')

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

    if (monthInput < 1 || monthInput > 12) { alert(`Rentrez un mois valide, le mois ${monthInput} n'existe pas.`); return}
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
    else if (months30.includes(mois)) { return 30}
    else if (mois == 2) { return anneeBissextile(annee) ? 29 : 28 }
    return false
}
isValidDate(inputUser)


// ÉTAPE 2 : Vérifier si une date est un palindrome
let date = inputUser
const isPalindrome = (date) => {
    console.log('JE SUIS LA', date)
    
    const dateWithoutSlash = date.split("/").join("")
    console.log(dateWithoutSlash); 
    if (dateWithoutSlash === dateWithoutSlash.reverse()) { return true} else { false}
}

const isDatePalindrome = (date) => {
    if (isValidDate(date) == false) { return false} else { true}
    
    return isDatePalindrome(date)
} 


// const getNextPalindromes = (x) => {

// }