const modal = document.getElementById('modal');
const button = document.getElementById('button');

button.addEventListener('click', ()=>  modal.classList.add('modal--show'))

modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal--show')) modal.classList.remove('modal--show')
})