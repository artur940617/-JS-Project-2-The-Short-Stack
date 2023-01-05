
let wrapper = document.createElement('div')
let back = document.getElementById('back')

class Beer {
    constructor(data) {
        this.data = data
        this.card = document.createElement('div')
        this.name = document.createElement('h1')
        this.img = document.createElement('img')
        this.description = document.createElement('p')
        this.brewed = document.createElement('span')
        this.more = document.createElement('p')

    }

    renderElements() {
        wrapper.setAttribute('class', 'wrapper')
        this.card.setAttribute('class', 'card')
        this.img.setAttribute('class', 'img')
        this.name.setAttribute('class', 'name')
        this.description.setAttribute('class', 'desc')
        this.brewed.setAttribute('class', 'brewed')
        this.more.setAttribute('class', 'desc')
        wrapper.appendChild(this.card)
        this.card.appendChild(this.name)
        this.card.appendChild(this.img)
        this.card.appendChild(this.description)
        this.card.appendChild(this.brewed)
        this.card.appendChild(this.more)
        this.name.innerText = this.data.name
        this.img.src = this.data.image_url
        this.description.innerText = this.data.description
        this.brewed.innerText = 'brewed ' + this.data.first_brewed
        this.more.innerText = this.data.brewers_tips
        document.body.appendChild(wrapper)
    }

}


fetch(`https://api.punkapi.com/v2/beers/${3}`)
    .then((response) => response.json())
    .then((data) => {
        data.map((elem) => {
            let beer = new Beer(elem)
            beer.renderElements()
            console.log(elem)

        })
    })



back.addEventListener('click', () => {
    window.location.href = `../index.html`
})

