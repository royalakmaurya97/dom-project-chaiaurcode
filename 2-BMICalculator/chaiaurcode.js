const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    console.log(height)
    console.log(weight)

    if (isNaN(height) || height <= 0) { // Check for NaN first
        results.innerHTML = `Please give a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) { // Check for NaN first
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Show the result
        // results.innerHTML = `<span>${bmi}</span>`
        // results.innerHTML= `<span>{if (${bmi}>18.6) {
            
        // }}</span>`
        // const condition = document.querySelector("#condition")

        if (bmi>18.6) {
            results.innerHTML = `<span>Under Weight : ${bmi}</span>`
            
        }else if (24.9>=18.6) {
            results.innerHTML = `<span>Normal Range : ${bmi}</span>`
            
        }else{
            results.innerHTML = `<span>Greater than : ${bmi} </span>`
        }
    }
});
