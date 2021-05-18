const openEditProfilePopupButton = document.querySelector('.profile__button-edit');
const closeEditProfilePopupButton = document.querySelector('.popup__close');
const openAddCardPopupButton = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_type_add');
const popupEditProfile = document.querySelector('.popup_type_profile');
const closeAddCardPopupButton = document.querySelector('.popup__close_type_add');
const popupPreview = document.querySelector('.popup_type_preview');
const popupPreviewImg = document.querySelector('.popup__preview-img');
const popupPreviewTitle = document.querySelector('.popup__preview-subtitle');
const closePopupPreviewButton = document.querySelector('.popup__close_type_preview');
const formPopupProfile = document.querySelector('.popup__form');
const formPopupAdd = document.querySelector('.popup__form_type_add');
const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job'); 
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const titleAdd = document.querySelector('.popup__item_title_add');
const linkAdd = document.querySelector('.popup__item_type_foto');
const cardList = document.querySelector('.element__grid');
const cardTemplate = document.querySelector('#card-templete');
const popupProfileSave = document.querySelector('.popup__save');


function createCard(element){
  const cardElement = cardTemplate.content.cloneNode(true);
  const trashButton = cardElement.querySelector('.element__trash');
  const likeButton = cardElement.querySelector('.element__description-like');
  const previewImg = cardElement.querySelector('.element__foto');
  cardElement.querySelector('.element__description-text').textContent = element.name;
  previewImg.src = element.link;
  previewImg.alt = element.name;

  trashButton.addEventListener('click', function(e){
    e.target.closest('.element__container').remove();
  })

  likeButton.addEventListener('click', function(ev){
    ev.target.classList.toggle('element__description-like_active');
  })
  previewImg.addEventListener('click', function openPopupPreview(eve) {
    eve.preventDefault();
    popupPreviewImg.src = element.link;
    popupPreviewTitle.textContent = element.name; 
    openPopup(popupPreview);
  })
  return cardElement;  
}

initialCards.forEach(function(elem) {
  const newCard = createCard(elem);
  cardList.append(newCard);
})

function submitAddCardForm (evt){
  evt.preventDefault();
  const linkValue = {name: `${titleAdd.value}`, link: `${linkAdd.value}`};
  cardList.prepend(createCard(linkValue));
  closePopup(popupAddCard);
}
formPopupAdd.addEventListener('submit', submitAddCardForm);

function openPopup(popup) { 
	popup.classList.add('popup_opened');
}
openEditProfilePopupButton.addEventListener('click', function(){
  openPopup(popupEditProfile);
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  toggleButtonState(Array.from(popupEditProfile.querySelectorAll('popup__input-text')), popupProfileSave);

})

openAddCardPopupButton.addEventListener('click', function(){
  openPopup(popupAddCard)
})
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function submitEditProfileForm (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupEditProfile);  
}
document.addEventListener('keydown', evt => {
  if(evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  }
});

formPopupProfile.addEventListener('submit', submitEditProfileForm);

closeAddCardPopupButton.addEventListener('click', function(){
  closePopup(popupAddCard);
})
popupAddCard.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
         closePopup(popupAddCard);
       }
})

closePopupPreviewButton.addEventListener('click', () => closePopup(popupPreview));

popupPreview.addEventListener('click', evt => {
   if(evt.target.classList.contains('popup_opened')) {
     closePopup(popupPreview);
   }
 });

 closeEditProfilePopupButton.addEventListener('click', () => closePopup(popupEditProfile));

 popupEditProfile.addEventListener('click', evt => {
   if(evt.target.classList.contains('popup_opened')) {
     closePopup(popupEditProfile);
   }
 });