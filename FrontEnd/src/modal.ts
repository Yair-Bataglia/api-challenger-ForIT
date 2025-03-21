const filtro = document.getElementById('filtro') as HTMLBaseElement
const modal = document.getElementById('modal') as HTMLBaseElement
const agregarBtn = document.getElementById('agregar-btn') as HTMLBaseElement
const cerrarModalBtn = document.getElementById('cerrar-modal-btn') as HTMLBRElement
const formModal = document.getElementById('form-modal') as HTMLFormElement

agregarBtn.addEventListener('click', () => {
    filtro.style.display = 'block';
    modal.style.display = 'grid';
    filtro.style.pointerEvents = 'auto';
});

cerrarModalBtn.addEventListener('click', () => {
    filtro.style.display = 'none';
    modal.style.display = 'none';
    filtro.style.pointerEvents = 'none';
});

formModal.addEventListener('submit', async (e: Event) => {

    const formData = new FormData(e.target as HTMLFormElement)
    const formObject = Object.fromEntries(formData.entries())


    try {
        const res = await fetch('https://api-challenger-forit.onrender.com/api/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formObject)
        })

        if (res.ok) {
            
            const resData = await res.json()
            console.log(`Exito, respuesta del servidor: ${resData}`)
        } else {
            console.log(`Error del servidor: ${res.status}`)
        }
    } catch (error) {
        console.error("Error: ", error)
    }


})