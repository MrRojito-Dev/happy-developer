let happyDeveloperMotivatorMessages;
let happyDeveloperOtakusMessages;

if (Intl.DateTimeFormat().resolvedOptions().locale.includes("es")) {
    happyDeveloperMotivatorMessages = [
        "Vamos!!",
        "Tu puedes con este, y los proximos problemas",
        "No te rindas con tu meta. Tu puedes",
        "Este problema es fácil, puedes resolverlo",
        "Te quiero, con corazón tu código",
        '¡No me importa si funciona en tu máquina!',
        'Hay dos formas de escribir programas sin errores; sólo la tercera funciona',
        "Lo imposible parece imposible hasta que lo intentas y después lo logras.",
        "El 80% del éxito se basa en nunca rendirte!",
        "La vida te pondrá obstáculos, el límite lo pones tú.",
        "Confía en ti mismo sin importar lo que los demás piensen."
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

    happyDeveloperOtakusMessages = [
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
    console.log(`\x1b[34m[HAPPY DEVELOPER] \x1b[37m${happyDeveloperMotivatorMessage}\x1b[0m`);
}
motivator.otakus = function () {
    console.log(`\x1b[34m[HAPPY DEVELOPER] \x1b[37m${happyDeveloperOtakuMessage}\x1b[0m`)
}
module.exports = motivator;



/*
const colores = {
    hexLiteral: 0xffffff, //number
    hexString: 'ffffff',
    number: 16777215,
    RGBArray: [255, 255, 255],
    preDefinidos: [
        'DEFAULT',
        'WHITE',
        'AQUA',
        'GREEN',
        'BLUE',
        'PURPLE',
        'LUMINOUS_VIVID_PINK',
        'GOLD',
        'ORANGE',
        'RED',
        'GREY',
        'DARKER_GREY',
        'NAVY',
        'DARK_AQUA',
        'DARK_GREEN',
        'DARK_BLUE',
        'DARK_PURPLE',
        'DARK_VIVID_PINK',
        'DARK_GOLD',
        'DARK_ORANGE',
        'DARK_RED',
        'DARK_GREY',
        'LIGHT_GREY',
        'DARK_NAVY',
        'RANDOM'
    ]
}

//Los colores son solo numeros que van del 16777215 al 0, puedes verlos como hexadecimal FFFFFF o rgb 255 255 255

//ff en decimal es 255 (si se dan cuenta, son todos lo mismo)


Documentacion: https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable

https://www.mathsisfun.com/hexadecimal-decimal-colors.html 
De ahi pueden sacar todos los colores, medio fea la pagina, pero pueden sacar en todos los formatos


//colores para la consola:

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"

//Ejemplo de uso:
console.log('\x1b[34mEsto estara de color azul\x1b[0m y esto estara normal')
 */
