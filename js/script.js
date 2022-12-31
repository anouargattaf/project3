let texte1 = document.getElementById('texte1');
let result1 = document.getElementById('result1');
let select = document.getElementById('select'); 

texte1.addEventListener('input', function(){
    makeResult();
})
select.addEventListener('change', function(){
    makeResult();
})
function makeResult(){
    if(select.value == 'decode'){
        result1.value = atob(texte1.value);
    }else{
        result1.value = btoa(texte1.value);
    }
}