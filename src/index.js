let happyDeveloperMotivatorMessages;
let happyDeveloperOtakuMessages;

if (Intl.DateTimeFormat().resolvedOptions().locale.includes("es")) {
    happyDeveloperMotivatorMessages = require('./i18n/es.json')

    happyDeveloperOtakuMessages = require('./i18n/es.json')

} else if (Intl.DateTimeFormat().resolvedOptions().locale.includes("en")) {
    happyDeveloperMotivatorMessages = require('./i18n/en.json')

    happyDeveloperOtakuMessages = require('./i18n/en.json')
}

let happyDeveloperMotivatorMessage = happyDeveloperMotivatorMessages.happyDeveloperMotivatorMessages[Math.floor(Math.random() * happyDeveloperMotivatorMessages.happyDeveloperMotivatorMessages.length)]
let happyDeveloperOtakuMessage = happyDeveloperOtakuMessages.happyDeveloperOtakuMessages[Math.floor(Math.random() * happyDeveloperOtakuMessages.happyDeveloperOtakuMessages.length)]

function motivate() {
    console.log(`\x1b[34m[HAPPY DEVELOPER] \x1b[37m${happyDeveloperMotivatorMessage}\x1b[0m`)
}

function otakus () {
    console.log(`\x1b[34m[HAPPY DEVELOPER] \x1b[37m${happyDeveloperOtakuMessage}\x1b[0m`)
}

module.exports = { motivate, otakus };
