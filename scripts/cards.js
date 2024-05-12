function createCard(flippedIcon) {
    const template = document.querySelector('#cardTemplate').cloneNode(true).content;
  
    const card = template.querySelector('.card');
  
    card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);
  
    card.addEventListener('click', () => {
      gameLogic(card);
    });
  
    return card;
  }
  function createIconsArray(initialCount) {
    const cardsIcons = [
      'compass',
      'cloud',
      'play',
      'bolt',
      'stop',
      'cogs',
      'atom',
      'basketball-ball',
      'arrows',
      'angle-left',
      'bars',
      'file',
      'filter',
      'gear',
      'folder',
      'folder-open',
      'shield',
      'scissors',
      'pen-clip',
    ];
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    let duobleCards = dublicateElements(cards);
    return shuffleArray(duobleCards);
  }
  export{ createCard, createIconsArray };