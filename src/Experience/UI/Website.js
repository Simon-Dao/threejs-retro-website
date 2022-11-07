import Experience from "../Experience";

export default class Website {

    constructor() {
        this.currentPage = ""
        this.experience = new Experience()
        this.htmlContainer = document.querySelector('#overlay')
    }

    update() {
        if(!Experience.zoomedIn) {
            this.hide()
        }
    }

    toggleVisibiliy() {
        
    }

    show() {
        this.htmlContainer.style.visibility = 'visible'
    }
    
    hide() {
        this.htmlContainer.style.visibility = 'hidden'
    }
}