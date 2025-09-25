const img1 = document.getElementById('colorado')
const img2 = document.getElementById('iceland')
const img3 = document.getElementById('waterfall')
const img4 = document.getElementById('autumn')
const img5 = document.getElementById('sea')
const img6 = document.getElementById('flowers')
const img7 = document.getElementById('creek')
const img8 = document.getElementById('mountains')

import colorado from "./img/colorado.jpg"
import iceland from "./img/iceland.jpg"
import waterfall from "./img/waterfall.jpg"
import autumn from "./img/autumn.jpg"
import sea from "./img/sea.jpg"
import flowers from "./img/flowers.jpg"
import creek from "./img/creek.jpg"
import mountains from "./img/mountains.jpg"

img1.src=colorado;
img2.src=iceland;
img3.src=waterfall;
img4.src=autumn;
img5.src=sea;
img6.src=flowers;
img7.src=creek;
img8.src=mountains;

export {
    colorado, iceland, waterfall, autumn, sea, flowers, creek, mountains
}