const menu = [
    'Irish coffee', 'Manhattan', 'Bourbun Mojito', 'Creamsicle Punch',
    'Moscov mule', 'Green Dream', 'EL diable', 'Blue lagoon',
    'Margarita', 'Classic gin and tonic', 'Martini', 'Rum Nehroni',
    'Mojito', 'Brandy sour', 'French 95', 'White russian']

const picture=[
    ['pre1.jpg','pre2.jpg'],
    ['dawn1.jpg','dawn2.jpg'],
    ['gold1.jpg','gold2.jpg'],
    ['american1.jpg','american2.jpg'],
    ['',''],
    ['','darkage.jpg'],
    ['redis1.jpg','redis2.jpg'],
    ['revival1.jpg','revival2.jpg'],
]

const topic=[
    'First mention of the word \"cock-tail\"',
    '\"cocktail\" first appearing in print in 1803',
    'From a Printed Definition to a Forbidden Fruit',
    'Prohibition Doesn\'t Mean No One is Drinking it',
    'Witnessed a cocktail revival, with Tiki and the Martini competing',
    '\"Moonwalk\" cocktail in honor of the Apollo 11',
    'A resurgence of interest in classic cocktails',
    'The innovations of cocktails'
]

const text=[
    'It was in the decades and centuries prior to 1800 that the artform of the Mixed Drink was evolving. Instead of recipes for individual drinks, the pattern was to created mixed drink "categories".',
    'The cocktail comes onto the scene in the beginning of the 1800\'s and very gradually begins to get noticed. The concept of "mixed drink categories" was still prevalent, but over time would lose its luster.',
    'Entering into this era, the cocktail is still just "yet another" mixed drink category, which isn\'t necessarily seen as being any more important than the others, but that changes quickly. ',
    'The "Great Cocktail Lobotomy" descends upon the US. During this decade the art and craft of the cocktail is all but forgotten, in the US anyway. Many American bartenders go to Europe where they can continue serving cocktails.',
    'With Prohibition over, the general public attempted to reestablish their pursuits of the well-turned drink, but too much had been forgotten, and too many bad habits had been formed. The birth of Tiki almost reminds us of the craft of the cocktail, but it eventually becomes a façade of itself. Renewed interest in the Martini tries to remind us of what we had forgotten, but the Vodka Martini turns it into little more than an alcohol delivery vehicle.',
    'The cocktail turns comical. Many eschew cocktails since they see them as "what their parents used to drink", and those who eventually do partake, favor the syrupy sweet beverages which remind them of their childhood. ',
    'The decade leading up to 2000 saw a slowly growing interest in rediscovering the cocktail. There was a small, but dedicated group of individuals who began to dig into the long forgotten cocktailian craft as it existed prior to Prohibition and would set the stage for giving the cocktail a greater exposure.',
    'In the early 2000s, Milk & Honey and Zig Zag Café kicked off the craft cocktail movement. Events like "A Tribute to Professor Jerry Thomas" and the founding of Tales of the Cocktail showcased cocktail culture\'s rise. The Museum of the American Cocktail and Regans\' Orange Bitters #6 added to the momentum. By 2014, cocktail trends were mapped through Estately Blog\'s state-by-state rankings.'

]

const bottles=[
    [{
        name:'Brandy',
        detail:'Brandy is a spirit distilled from fermented fruit juice, most but also from other fruits like apples or pears',
        image:'images/starter/Bottle/Bottle-01.png',
        percent:'35% to 60%',
        price:'$13-245'
    },
    {
        name:'Gin',
        detail:'Gin is a distilled spirit that is made from grain and flavored with botanicals. It is most noted for its pine flavor due to its main ingredient, juniper berries.',
        image:'images/starter/Bottle/Bottle-02.png',
        percent:'36% to 50%',
        price:'$24-109'
    }],
    [{
        name:'Tequila',
        detail:'Tequila is a distilled spirit made from the agave plant that can only be produce in certain regions of Mexico.',
        image:'images/starter/Bottle/Bottle-03.png',
        percent:'50% to 51%',
        price:'$50-150'
    },
    {
        name:'Rum',
        detail:'Rum is a liquor distilled from sugar. The sugar may be either pure cane sugar, a syrup, or molassses',
        image:'images/starter/Bottle/Bottle-04.png',
        percent:'36% to 50%',
        price:'$10-40'
    }],
    [{
        name:'Vodka',
        detail:'The name vodka originates from the Russian word "voda," meaning water.',
        image:'images/starter/Bottle/Bottle-05.png',
        percent:'40% to 95%',
        price:'$10-125'
    },
    {
        name:'Whisky',
        detail:'Whisky or Whiskey is a type of liquor made from fermented grain mash. Whisky is typically aged in wooden casks.',
        image:'images/starter/Bottle/Bottle-06.png',
        percent:'40% to 50%',
        price:'$27-270'
    }],

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

let droplist = document.createElement('div')

const list=document.getElementsByClassName('timeline-items')
const mouseOver=(index)=>{
    droplist.innerHTML=`
    <div style="padding:0.5rem 2rem 0.5rem 2rem; display:flex; justify-content:between; gap:2rem">
        <div style="display:flex; flex-direction:column; justify-content:space-between;">
            <h3 style="font-size:2rem;font-family: 'Overused Grotesk Regular';">${topic[index]}</h3>
            <p style="font-size:1rem;font-family: 'Overused Grotesk Regular';">${text[index]}</p>
        </div>
        <div style="display:grid;grid-template-columns: 50% 50%; gap:2rem; margin:auto">
            ${picture[index][0]? `<img src="images/timeline/${picture[index][0]}" style="width:16rem;height:10rem;object-fit:cover;border-radius:0.5rem">`:''}
            ${picture[index][1]? `<img src="images/timeline/${picture[index][1]}" style="width:16rem;height:10rem;object-fit:cover;border-radius:0.5rem">`:''}
        </div>
    </div>
    `

    list[index].lastElementChild.appendChild(droplist)
    list[index].lastElementChild.setAttribute('class','drop-down')
}



const mouseOut=(index)=>{
    list[index].lastElementChild.setAttribute('class','test')
    list[index].lastElementChild.firstElementChild.remove()
}


var page=0
let bottleDisplay=document.getElementById('right-container');
bottleDisplay.innerHTML=`
    <button style="cursor:pointer ;position: absolute; top: 30%; font-size: 2rem; background: none; border:none">&lt;</button>
    <button style="cursor:pointer ;position: absolute; left:95%; top: 30%; font-size: 2rem; background: none; border:none">&gt;</button>
    <div style="border-left: solid 1px black;">
        <div style="margin:1rem 2rem 0 0;float:right;background:#415E43; border-radius:5rem;padding:0rem 1rem 0rem 1rem; width:fit-content">
            <h3 style="font-size:1.2rem;margin:0;text-align:center;font-family: Overused Grotesk Light;color:white;">${bottles[page][0].percent}</h3>
            <p style="font-size:0.6rem;color:white;margin:0 0 0.3rem 0;font-family: Overused Grotesk Light;">Concentration of Alcohol</p>
        </div>
        <img src="${bottles[page][0].image}" style="object-fit:cover; width:100%">
        <div>
            <h3 id="name1" style="font-size:1.5rem;font-family: Overused Grotesk Light;border-bottom: solid 1px black;border-top: solid 1px black; padding:0.5rem 0.5rem 0.5rem 2rem;margin:0;">${bottles[page][0].name}</h3>
            <div style="font-family: Overused Grotesk Light;font-size:0.8rem;display:flex; justify-content:space-between;padding:0.5rem">
                <p style="width:70%">${bottles[page][0].detail}</p>
                <p style="">${bottles[page][0].price}</p>
            </div>
        </div>
    </div>
    <div style="border-left: solid 1px black;">
        <div id="preview2" class="img" style="border-bottom: solid 1px black;"></div>
        <div>
            <h3 id="name2" style="font-style: italic; border-bottom: solid 1px black; padding-bottom: 0.5rem; padding-left: 1rem"></h3>
            <p id="detail2" style="padding: 1rem;"></p>
        </div>
    </div>
`
