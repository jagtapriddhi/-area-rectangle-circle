const rectangleRadio = document.getElementById('rectangle');
const circleRadio = document.getElementById('circle');
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const radiusInput = document.getElementById('radius');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
	if (rectangleRadio.checked) {
		const length = parseFloat(lengthInput.value);
		const width = parseFloat(widthInput.value);
		const area = length * width;
		resultParagraph.textContent = `The area of the rectangle is: ${area} sq. units`;
	} else if (circleRadio.checked) {
		const radius = parseFloat(radiusInput.value);
		const area = Math.PI * radius * radius;
		resultParagraph.textContent = `The area of the circle is: ${area.toFixed(2)} sq. units`;
	}
});

