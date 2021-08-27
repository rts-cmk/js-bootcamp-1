const siteFooter = document.querySelector(".siteFooter__quote");
const citatArray = [
	"Den der kommer først til mølle, får først malet",
	"Man skal ikke kaste med sten når man selv bor i glashus",
	"Én fugl i hånden er bedre end ti på taget",
	"Tomme tønder buldrer mest",
	"Man skal ikke gå over åen efter vand",
	"Brændt barn skyr ilden",
	"Når katten er ude, spiller musene på bordet",
	"Liden tue kan vælte stort læs",
	"Lille og vågen er bedre end stor og doven",
	"Mange bække små gør en stor å",
];
//console.log(citatArray);

function citat() {
	let findCitat = citatArray[Math.floor(Math.random() * citatArray.length)];
	//console.log(findCitat);
	siteFooter.textContent = citatArray[findCitat];
}
citat();
