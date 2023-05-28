const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American"
    },
    {
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American"
    },
    {
      title: "Flying Rabbit AIPA",
      sub: "MONYO Brewing Co.",
      text: "IPA - American"
    },
    {
      title: "Liquid Cocaine",
      sub: "Mad Scientist Beer",
      text: "IPA - Imperial"
    },
    {
      title: "Organic Chocolate Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - English"
    },
    {
      title: "Bracia",
      sub: "Thornbridge Brewery",
      text: "Strong Ale - English"
    },
    {
      title: "Oatmeal Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - Oatmeal"
    },
    {
      title: "Black Tokyo Horizon",
      sub: "BrewDog",
      text: "Stout - American Imperial"
    },
    {
      title: "Vintage Ale",
      sub: "Fuller's",
      text: "Old Ale"
    },
    {
      title: "All the Leaves are Brown",
      sub: "Tempest Brewing Company",
      text: "Brown Ale - American"
    }
  ]
}
console.log(beers);

function beerCardComponent(serialNumber, title, sub, text, detailsButton) {
  return `
  <div class="beer-card">
    <div class="number-container">${serialNumber}</div>
    <div class="title-container">
      <h2>${title}<h2>
    </div>
    <hr>
    <div class="text-container">
      <h4>${sub}</h4>
      <h3>${text}</h3>
    </div>
    <button>
      ${detailsButton}
      <span class="material-symbols-outlined arrow-forward">arrow_forward</span>
    </button>
  </div>
  `;
};

function bestBeersComponent(logo, cards, button) {
  let cardSectionHtml = '';
  for (let i = 0; i < cards.length; i++) {
    cardSectionHtml += beerCardComponent(i + 1, cards[i].title, cards[i].sub, cards[i].text, button);
  };
  return `
  <navbar id="header">
    <h1>${logo}</h1>
    <span class="material-symbols-outlined">menu</span>
  </navbar>
  <section>
    <div id="beer-card-container">
      ${cardSectionHtml}
    </div>
  </section>
  `;
};

const rootElement = document.querySelector('#root');
rootElement.insertAdjacentHTML('afterbegin', bestBeersComponent(beers.logo, beers.cards, beers.button));