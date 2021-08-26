document.addEventListener('DOMContentLoaded', () =>{
    
    const quoteArray = [
        'Det har jeg aldrig gjort før, så det klarer jeg helt sikkert.',
        'Vær dig selv, alle andre er alligevel optaget',
        'Lykken bliver aldrig mindre af at blive delt.',
        'Husk, at for hvert minut du er vred, mister du tres sekunders lykke.',
        'Når du går gennem Helvede, så bliv ved med at gå!',
        'Livet er det dejligste eventyr.',
        'En ven er én, der ved alt om dig og stadig elsker dig.',
        'Der findes ingen fremmede, kun venner vi ikke kender.',
        'Det bedste tegn på, at der findes intelligens i rummet, er, at de aldrig har forsøgt at kontakte os.',
        'Latter er den korteste afstand mellem to mennesker.'
    ];
    
    const quoteContainer = document.querySelector('#citat');
    
    const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

    quoteContainer.textContent = randomQuote;

});