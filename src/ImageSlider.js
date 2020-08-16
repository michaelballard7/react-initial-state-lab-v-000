// your ImageSlider code here!
import React from 'react'

<<<<<<< HEAD
 class ImageSlider extends React.Component {
    constructor(){
        super();
        this.state = {currentSlideIndex: 0}
    }


    render() {
        return (
            `I am on slide ${this.state.currentSlideIndex}`
        )
    }
}



export default ImageSlider
=======
export default class ImageSlider extends React.Component {
    constructor(props){
        super(props)

        state = {
            currentSlideIndex:0
        }
    }

    render(){

        return `I am on slide ${this.state.currentSlideIndex}`

    }
}
>>>>>>> 5e7c8f1c3d41b4ce9f51da7f13139fdea6db4296
