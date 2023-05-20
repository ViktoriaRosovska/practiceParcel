const NOTIFICATION_DELAY = 3000;
let timeId = null;
const refs = {
    notification: document.querySelector('.js-alert')
};
refs.notification.addEventListener('click', onNotificationClick);

showNotification();


function onNotificationClick() {
    refs.notification.style.backgroundColor = "red";
    hideNotification();
    clearTimeout(timeId);
};


function showNotification() {
    refs.notification.classList.add('is-visible');
    timeId = setTimeout(() => {
        console.log('закрой сообщение')
        hideNotification();
    }, NOTIFICATION_DELAY);
    
}

function hideNotification() {
    refs.notification.classList.remove('is-visible');
}