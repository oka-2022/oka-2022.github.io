'use strict';

function process() {
    document.getElementById('target').textContent = 'なにわの日！';
    document.getElementById('trigger').classList.add('changed');
  }
  
  document.getElementById('trigger').addEventListener('click', process);