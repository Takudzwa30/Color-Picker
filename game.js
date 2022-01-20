
const btn = document.querySelector('body');

const btnpress = () => {

    const ds = document.querySelector('body');
    
    let r = Math.round(Math.random(Math.floor) * 255);
    let g = Math.round(Math.random(Math.floor) * 255);
    let b = Math.round(Math.random(Math.floor) * 255);
    
    let newColor = `rgb(${r},${g},${b})`;
    
    
    ds.style.backgroundColor = newColor;

}

btn.addEventListener('click', btnpress);

