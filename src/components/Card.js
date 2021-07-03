export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._title = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
  }
  _makeElements(){
    const cardTemplate = document.querySelector(this._templateSelector);
    this._cardElement = cardTemplate.content.querySelector('.element__container').cloneNode(true);
    return this._cardElement;

  }
  _setEventListener(){
    this._trashButton = this._cardElement.querySelector('.element__trash');
    this._likeButton = this._cardElement.querySelector('.element__description-like');
    this._previewImg = this._cardElement.querySelector('.element__foto');
    this._trashButton.addEventListener('click', (e) => this._handleRemoveClick(e))
    this._likeButton.addEventListener('click', () => this._handleLikeClick())
    this._previewImg.addEventListener('click', () => this.handleCardClick())
  }
  _handleLikeClick(){
    this._likeButton.classList.toggle('element__description-like_active');
  }
  _handleRemoveClick(e){
    this._cardElement.remove();
    this._cardElement = null
  }

  render() {
    this._cardElement = this._makeElements();
    this._setEventListener();

    this._cardElement.querySelector('.element__description-text').textContent = this._title;
    this._previewImg.src = this._link;
    this._previewImg.alt = this._title;

    return this._cardElement;
  }
}

