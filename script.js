const emojis =  ["🤖","🤖","🐔","🐔","👨‍🎓","👨‍🎓","🏈","🏈","⛏️","⛏️","🔫","🔫","✏️","✏️","👽","👽"];


var shuff_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

for(var i = 0; i<emojis.length; i++){
    let box = document.createElement('div');
    box.className='item'
    box.innerHTML = shuff_emojis[i];

    box.onclick = function(){
        this.classList.add('boxopen')
        setTimeout(function(){
        if(document.querySelectorAll('.boxopen').length>1){
            if(document.querySelectorAll('.boxopen')[0].innerHTML == document.querySelectorAll('.boxopen')[1].innerHTML){
                
                document.querySelectorAll('.boxopen')[0].classList.add('boxmatch')
                document.querySelectorAll('.boxopen')[1].classList.add('boxmatch')
                document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
                document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')
                
                if(document.querySelectorAll('.boxopen').length == emojis.length){
                    alert('COngratulations')
                }

            }
            else{
                document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
                document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')

            }
        }
        },500)
    }

   document.querySelector('.game').appendChild(box);
}
let attempts = 0;
const attemptsDisplay = document.createElement('div');
attemptsDisplay.classList.add('attempts-display');
attemptsDisplay.textContent = `Attempts: ${attempts}`;
console.log("attemptsDisplay created");
document.body.appendChild(attemptsDisplay);
console.log("attemptsDisplay appended");

document.querySelectorAll('.item').forEach(box => {
  box.addEventListener('click', () => {
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    console.log(`attempts updated to ${attempts}`);
  });
});