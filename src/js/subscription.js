import '../css/style.css';
import * as BSN from 'bootstrap.native';

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

const modal = new BSN.Modal('#subscription-modal');
const refs = {
    modal: document.querySelector('#subscription-modal'),
    btnClose: document.querySelector('[data-dismiss="modal"]'),
    subscribeBtn: document.querySelector('button[data-subscribe]')
} 
openModal();
refs.btnClose.addEventListener('click', () => {
    modal.hide();
});
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);
refs.modal.addEventListener('hide.bs.modal', openModal);

function openModal() {
     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        console.log('Максимальное количество надоеданий или подписаться');
        return;
    }
      setTimeout(() => {
        modal.show();
          console.log('открываем надоедалку');
        promptCounter += 1;
}, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
    hasSubscribed = true;
    modal.hide();
}





