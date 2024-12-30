// const video = document.getElementById('videoPlayer');

// video.addEventListener('click', function() {
//     if (video.requestFullscreen) {
//         video.requestFullscreen();
//     } else if (video.webkitRequestFullscreen) {
//         video.webkitRequestFullscreen(); // Safari
//     } else if (video.msRequestFullscreen) {
//         video.msRequestFullscreen(); // IE/Edge
//     }
// });

// // Выход из полноэкранного режима по двойному клику
// video.addEventListener('dblclick', function() {
//     if (document.fullscreenElement) {
//         document.exitFullscreen();
//     }
// });



const video = document.getElementById('videoPlayer');
const container = document.getElementById('videoContainer');
const playerIcon = document.querySelector('.player-icon');

// Изначально скрываем контролы
video.controls = false; // Контролы скрыты до воспроизведения

// Воспроизведение при клике на иконку
playerIcon.addEventListener('click', () => {
    video.play();
    video.controls = true; // Показываем контролы при воспроизведении
    playerIcon.style.display = 'none'; // Скрываем иконку
});

// Показ иконки при воспроизведении
video.addEventListener('play', () => {
    container.classList.add('enlarged');
    playerIcon.style.display = 'none'; // Скрываем иконку
});

// Показ иконки при паузе
video.addEventListener('pause', () => {
    playerIcon.style.display = 'none'; // Показываем иконку
});

// Возврат постера и скрытие контролов после завершения видео
video.addEventListener('ended', () => {
    container.classList.remove('enlarged'); // Возвращаем начальный размер и фон
    playerIcon.style.display = 'block'; // Показываем иконку
    video.controls = false; // Скрываем контролы
    video.currentTime = 0; // Сбрасываем видео на начало
    video.pause(); // Останавливаем видео, чтобы показать постер

    // Возвращаем постер
    video.load(); // Перезагружаем видео, чтобы отобразить постер
});



document.querySelector('.header__toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__right').classList.toggle('open');
})



