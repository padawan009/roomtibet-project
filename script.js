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

// Скрытие иконки при воспроизведении
video.addEventListener('play', () => {
    container.classList.add('enlarged');
    playerIcon.style.display = 'none'; // Скрываем иконку
});

// Показ иконки при паузе
video.addEventListener('pause', () => {
    container.classList.remove('enlarged');
    playerIcon.style.display = 'block'; // Показываем иконку
});

// Возврат постера после завершения видео
video.addEventListener('ended', () => {
    container.classList.remove('enlarged');
    playerIcon.style.display = 'block'; // Показываем иконку
    video.load(); // Перезагружаем видео, чтобы отобразить постер
});
