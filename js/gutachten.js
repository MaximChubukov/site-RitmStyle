
    const gutItems = document.querySelectorAll('.gut-sm')


    for (const gutItem of gutItems) {
        gutItem.addEventListener('click', () => {
            clearActiveClasses()


            gutItem.classList.add('gut-lg')
        })
    }

    function clearActiveClasses() {
        gutItems.forEach((gutItem) => {
            gutItem.classList.remove('gut-lg')
        })

}


