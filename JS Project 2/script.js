let btn = document.getElementById('btn')
let loader = document.getElementById('loader')
let wrapper = document.createElement('div')

class Beer {
    constructor(data) {
        this.data = data
        this.card = document.createElement('div')
        this.name = document.createElement('h1')
        this.img = document.createElement('img')
        this.description = document.createElement('p')
        this.brewed = document.createElement('span')
    }

    renderElements() {
        wrapper.setAttribute('class', 'wrapper')
        this.card.setAttribute('class', 'card')
        this.img.setAttribute('class', 'img')
        this.name.setAttribute('class', 'name')
        this.description.setAttribute('class', 'desc')
        this.brewed.setAttribute('class', 'brewed')
        wrapper.appendChild(this.card)
        this.card.appendChild(this.name)
        this.card.appendChild(this.img)
        this.card.appendChild(this.description)
        this.card.appendChild(this.brewed)
        this.name.innerText = this.data.name
        this.img.src = this.data.image_url
        this.description.innerText = this.data.description
        this.brewed.innerText = 'brewed ' + this.data.first_brewed
        document.body.appendChild(wrapper)
    }
    moreInformation() {
        this.card.addEventListener('click', () => {
            window.location.href = `./beer${this.data.id}/beer${this.data.id}.html`
            console.log(this.data.card)

        })
    }
}


fetch(`https://api.punkapi.com/v2/beers/`)
    .then((response) => response.json())
    .then((data) => {
        data.map((elem) => {
            let beer = new Beer(elem)
            beer.renderElements()
            loader.style.display = 'none'
            beer.moreInformation()
	
        })
		
    })




