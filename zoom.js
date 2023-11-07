let zoom = document.querySelector('.gallery');
zoom.addEventListener('mousemove', (e) => {
    zoom.style.setProperty('--zoom-show', 'block');
    let positionPx = e.x - zoom.getBoundingClientRect().left;
    let positionPy = e.y - zoom.getBoundingClientRect().top;
    let positionX = 100 * positionPx / zoom.offsetWidth;
    let positionY = 100 * positionPy / zoom.offsetHeight;
    zoom.style.setProperty('--zoom-x', positionX + '%');
    zoom.style.setProperty('--zoom-y', positionY + '%');
}) 

zoom.addEventListener('mouseout', () =>{
    zoom.style.setProperty('--zoom-show', 'none');
}) 