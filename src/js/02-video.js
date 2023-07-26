import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayetEl = document.querySelector('#vimeo-player');

const player = new Player(vimeoPlayetEl, {
  id: 19231868,
  width: 640,
});

player.on(
  'timeupdate',
  throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds || 0);
  },1000),
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
