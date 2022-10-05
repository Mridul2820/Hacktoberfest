document.getElementById('increment').addEventListener('click', () => {
    document.getElementById('count').style.animation='rotateAnimation 2s linear infinite';
        new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
           
            document.getElementById('count').style.animation='none';
            document.getElementById('count').innerText++;
        });
      
});

document.getElementById('decrement').addEventListener('click', () => {
    if(document.getElementById('count').innerText > 0){
 
    document.getElementById('count').style.animation='rotateAnimation 2s linear infinite';
    new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
        document.getElementById('count').innerText--;
        document.getElementById('count').style.animation='none';
       
    });
    }
    else
    {
        alert('You can not decrement below 0');
    }
});

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('count').innerText = 0;
});