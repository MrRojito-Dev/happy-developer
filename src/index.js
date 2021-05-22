let happyDeveloperMotivatorMessages;
let happyDeveloperOtakuMessages;

if (Intl.DateTimeFormat().resolvedOptions().locale.includes("es")) {
    happyDeveloperMotivatorMessages = [
        "Vamos!!",
        "Tu puedes con este, y los proximos problemas",
        "No te rindas con tu meta. Tu puedes",
        "Este problema es fácil, puedes resolverlo",
        "Te quiero, con corazón tu código",
        '¡No me importa si funciona en tu máquina!',
        'Hay dos formas de escribir programas sin errores; sólo la tercera funciona'
    ];

    happyDeveloperOtakuMessages = [
        'Eres un ser increíble, diste lo mejor de ti y por eso te admiro. Pasaste por varias transformaciones, fuiste tan poderoso que todos nosotros te odiamos.',
        'No vivas con falsedades ni miedos, porque terminarás odiándote a ti mismo.',
        'A mí me da igual que los dioses existan o no, yo soy el amo de mi vida; paso de los temas religiosos, pero jamás menospreciaré a alguien que crea en ellos.',
        'Nadie puede entender perfectamente a otra persona, ya es bastante difícil entenderse a uno mismo, tal vez por eso la vida es tan interesante.',
        'Si no tienes recuerdos felices, nunca es tarde para comenzar a construirlos.'
    ]

} else if (Intl.DateTimeFormat().resolvedOptions().locale.includes("en")) {
    happyDeveloperMotivatorMessages = [
        "Go!!",
        "You can with this and the following problem",
        "Do not give up with your goal. You can",
        "This problem is easy, you can solve it",
        'I love you, with heart your code. \x1b[31m<3\x1b[0m',
        "I don't care if it works on your machine!",
        'There are two ways to write error-free programs; only the third works'
    ];

    happyDeveloperOtakuMessages = [
        'You are an incredible being, you gave your best and that is why I admire you. You went through various transformations, you were so powerful that we all hated you.',
        'Do not live with falsehoods or fears, because you will end up hating yourself.',
        'I do not care if the gods exist or not, I am the master of my life; I pass from religious themes, but I will never look down on someone who believes in them.',
        "No matter how capable you are, you alone cannot change the world. But that's the wonderful thing about the world.",
        'Si no tienes recuerdos felices, nunca es tarde para comenzar a construirlos.'
    ]
}

let happyDeveloperMotivatorMessage = happyDeveloperMotivatorMessages[Math.floor(Math.random() * happyDeveloperMotivatorMessages.length)]
let happyDeveloperOtakuMessage = happyDeveloperOtakuMessages[Math.floor(Math.random() * happyDeveloperOtakuMessages.length)]

function motivator() {
    console.log(`\x1b[34m[HAPPY DEVELOPER] \x1b[37m${happyDeveloperMotivatorMessage}\x1b[0m`)
}
motivator.otakus = function () {
    console.log(`\x1b[34m[HAPPY DEVELOPER] \x1b[37m${happyDeveloperOtakuMessage}\x1b[0m`)
}
module.exports = motivator;

