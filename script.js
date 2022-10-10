const weightInput = document.querySelector('#wei');
const heightInput = document.querySelector('#hei');
const button = document.querySelector('#btn');
const result = document.querySelector('#result');


button.addEventListener("click", () => {
    weight = weightInput.value;
    height = heightInput.value;
    hasil = weight/(height/100)**2;
    
    BMI= hasil.toFixed(1);
        
    if (BMI < 18.5){
        category = 'Underweight'
    } else if ((BMI >= 18.5) && (BMI <= 24.9)){
        category = 'Normal Weight'
    } else if ((BMI >= 25) && (BMI <= 29.9)){
        category = 'Overweight'
    } else {
        category = 'Obesity'
    }
    
    // const text = `Your BMI is ${BMI} which means You are ${category}`;
    // result.innerText = text;
    const text = `Your BMI is <span class="bold">${BMI}</span> which means You are <span class="bold">${category}</span>`;
    result.innerHTML = text;
});