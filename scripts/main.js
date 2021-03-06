let hexnums = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0A", "0B", "0C", "0D", "0E", "0F",
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1A", "1B", "1C", "1D", "1E", "1F",
    "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2A", "2B", "2C", "2D", "2E", "2F",
    "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3A", "3B", "3C", "3D", "3E", "3F",
    "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4A", "4B", "4C", "4D", "4E", "4F",
    "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5A", "5B", "5C", "5D", "5E", "5F",
    "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6A", "6B", "6C", "6D", "6E", "6F",
    "77", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7A", "7B", "7C", "7D", "7E", "7F",
    "88", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8A", "8B", "8C", "8D", "8E", "8F",
    "99", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9A", "9B", "9C", "9D", "9E", "9F",
];

function createBackground(bgs, maxWidthMq) {
    if (maxWidthMq.matches) {
	for (let bg of bgs) {
	    bg.textContent = "";
	}
	return;
    }
    for (let bg of bgs) {
	bg.textContent = "";
	for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 10; j++) {
		bg.textContent += hexnums[Math.floor(Math.random() * hexnums.length)];
		bg.textContent += " ";
            }
            bg.textContent += "\n";
	}
    }
}

let bgs = document.querySelectorAll('.info-background');
let maxWidthMq = window.matchMedia("(max-width: 1000px)");
setInterval(() => {
    createBackground(bgs, maxWidthMq);
}, 100);

let not_ready_lab_links = document.querySelectorAll('.not-ready-lab-links');
not_ready_lab_links.forEach(link => {
    link.addEventListener('click', event => {
	console.log(link);
	if (!link.classList.contains('warning-active')) {
	    let notReadyWarningSpan = document.createElement("span");
	    notReadyWarningSpan.textContent = 'Not Ready yet!';
	    notReadyWarningSpan.style.color = 'red';
	    notReadyWarningSpan.style.marginLeft = '20px';
	    link.parentElement.appendChild(notReadyWarningSpan);
	    link.classList.add('warning-active');
	}
    });
});
