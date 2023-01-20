console.log('JS Loaded...')

const
    itemOptionsBtns = document.querySelectorAll('.item-options'),
    itemRefOptionsBtns = document.querySelectorAll('.item-ref-options'),
    itemNotes = document.querySelectorAll('.item-note')



itemOptionsBtns.forEach(itemOptionBtn => {
    itemOptionBtn.addEventListener('click', e => {
        const optionsList = itemOptionBtn.querySelector('.item-options-list')
        optionsList.classList.toggle('hidden')

        console.log('click')
    })
})
itemRefOptionsBtns.forEach(itemOptionBtn => {
    itemOptionBtn.addEventListener('click', e => {
        const optionsList = itemOptionBtn.querySelector('.item-options-list')
        optionsList.classList.toggle('hidden')

        console.log('click')
    })
})

