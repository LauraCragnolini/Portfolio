window.onload = () => {
    const uxButton = document.querySelector('#ux-button');
    uxButton.addEventListener('click', () => {
        
        document.querySelector('#tarjetas-ux').style.display = 'flex';
        document.querySelector('#tarjetas-industrial').style.display = 'none';
        AOS.refresh()
        console.log(AOS.refresh)
    })

    const industrialButton = document.querySelector('#industrial-button');
    industrialButton.addEventListener('click', () => {
        
        document.querySelector('#tarjetas-ux').style.display = 'none';
        document.querySelector('#tarjetas-industrial').style.display = 'flex';
        AOS.refresh()
    })
}