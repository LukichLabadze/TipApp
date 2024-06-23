const bill = document.getElementById('money')
const incorrect = document.querySelector('.incorrect-bill')
const percs = document.querySelectorAll('.perc-numbers')
const numOfPeople = document.getElementById('numOfPeople')
const tipAmount = document.getElementById('tip')
const totalAmount = document.getElementById('total')

const reset = document.getElementById('reset')





bill.addEventListener('input', function(){
      const multiplier = parseFloat(this.value)
    
    if (multiplier> 0){
      incorrect.style.display = 'none'
      numOfPeople.addEventListener('input', function(){

        const humans = parseFloat(this.value)
  
      percs.forEach((element) => {
        const number = parseFloat(element.innerHTML.replace('%', ''));
        element.addEventListener('click', () => {
          tipAmount.innerHTML = (number * multiplier) / 100 / humans
          totalAmount.innerHTML = parseFloat(tipAmount.innerHTML) * humans + multiplier
        })
        
      });
    });
    } else {
        incorrect.style.display = 'block'
    }

    
});

reset.addEventListener('click', function() {
  // Reload the page
  location.reload();
});




