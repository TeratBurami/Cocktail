const menu = [
    'Irish coffee', 'Manhattan', 'Bourbun Mojito', 'Creamsicle Punch',
    'Moscov mule', 'Green Dream', 'EL diable', 'Blue lagoon',
    'Margarita', 'Classic gin and tonic', 'Martini', 'Rum Nehroni',
    'Mojito', 'Brandy sour', 'French 95', 'White russian']

const dropdown = [
    'djwiasdwa', 'dwasdwasd', 'jiojojiojo', 'ppllwasd'
]

var items
for (let cocktail = 1; cocktail <= menu.length; cocktail++) {
    // console.log(`${cocktail}:${menu[cocktail]}`)
    const listItem = document.createElement('li')
    listItem.innerHTML += `
    <div style="display:flex;justify-content:space-between;margin-bottom:5rem;font-style: italic;font-weight:bold;font-size:1.3rem">
        <div>${menu[cocktail - 1]}</div>
        <div>${String((cocktail)).padStart(2, '0')}</div>
    </div>
    <div class="img" style="scale:80%"></div>
    `
    listItem.setAttribute('class', 'list')
    document.querySelector('.menu-items').appendChild(listItem)
}

let droplist = document.createElement('ul')
dropdown.forEach((item) => {
    let text = document.createElement('li')
    text.textContent = item
    console.log(text)
    droplist.appendChild(text)  
})

const list=document.getElementsByClassName('timeline-items')
const mouseOver=(index)=>{
    list[index].lastElementChild.appendChild(droplist)
    list[index].lastElementChild.setAttribute('class','drop-down')
}

const mouseOut=(index)=>{
    // e.lastElementChild.removeChild()
    list[index].lastElementChild.setAttribute('class','test')
    console.log(list[index].lastElementChild)
    // list[index].lastElementChild.removeChild()
}