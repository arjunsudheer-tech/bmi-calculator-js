

const heightInput = document.querySelector('#height-input');
const weightInput = document.querySelector('#weight-input');

const calculateButton = document.querySelector('.calculate-button');

const bmiResult = document.querySelector('.bmi-result');
const bmiCategory = document.querySelector('.bmi-category');

calculateButton.addEventListener('click' , () => {
  calculateBMI();
});

document.addEventListener('keydown' , (event) => {
  if(event.key === 'Enter') {
    calculateBMI();
  }
});

function calculateBMI() {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if(height <= 0 || weight <= 0) {
    alert('Enter valid height and weight');
    return;
  }

  const heightMeters = height / 100;

  const bmi = Number((weight / (heightMeters * heightMeters)).toFixed(2));

  bmiResult.textContent = bmi;

  if(bmi < 18.5) {
    bmiCategory.innerHTML = `
    <p class="underweight">Underweight</p>
    <p>🌱 Fuel your body well and focus on getting stronger.</p>
    `;
  } else if(bmi < 25) {
    bmiCategory.innerHTML = `
    <p class="normal">Normal</p>
    <p>💪 Great work! Keep building healthy habits.</p>
    `;
  } else if(bmi < 30) {
    bmiCategory.innerHTML = `
    <p class="overweight">Overweight</p>
    <p>🚶 You're on the journey. Small daily improvements add up.</p>
    `;
  } else {
    bmiCategory.innerHTML = `
    <p class="obese">Obese</p>
    <p>🔥 Start where you are. One healthy choice at a time.</p>
    `;
  }


  heightInput.value = '';
  weightInput.value = '';
}
