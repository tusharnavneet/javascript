const form=document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){

    e.preventDefault();

    const height=parseFloat(document.querySelector('#height').value);// default coming in string
    const weight=parseInt(document.querySelector('#weight').value);

    const result=document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height))
    {
        result.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        result.innerHTML=`Please give a valid weight ${weight}`;
    }
    else
   {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
        result.innerHTML = `<span style="color:blue;">Underweight: ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        result.textContent = `Normal Range: ${bmi}`;
    } else {
        result.innerHTML = `<span style="color:red;">Overweight: ${bmi}</span>`;
    }
}

})