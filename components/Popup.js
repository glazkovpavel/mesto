
export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
  }
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close(this.popupElement);
    }}

  open() {
    this.popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this.popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  setEventListeners(){
  document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      this.close(this.popupElement);
    }})
  }
}
