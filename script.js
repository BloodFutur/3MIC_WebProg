import { generatePlayground } from '/modules/playground.mjs'
import { level1Blueprint } from '/modules/levels.mjs'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
window.ctx = ctx

let playground = generatePlayground(level1Blueprint, canvas.width, canvas.height);
window.playground = playground;
