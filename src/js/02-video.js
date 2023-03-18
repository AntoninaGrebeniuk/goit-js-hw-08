import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';
const savedTime = localStorage.getItem(CURRENT_TIME);

function onPlay(data) {
  // data is an object containing properties specific to that event
  localStorage.setItem(CURRENT_TIME, data.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(savedTime);
