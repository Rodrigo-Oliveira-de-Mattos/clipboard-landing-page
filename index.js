const btnDownload = document.querySelectorAll('.download')

btnDownload.forEach((element) => {
    element.addEventListener('click', () => {
        alert('DOWNLOAD...')
    })
});