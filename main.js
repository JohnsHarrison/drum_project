
const bassDrum = document.querySelector(".bass_drum")
bassDrum.addEventListener('click', ()=>{
    let sound = new Audio('./assets/bassdrum.mp3')
    sound.play()
    console.log("i have been clicked")
})
const snare = document.querySelector(".snare")
snare.addEventListener('click',()=>{
    let sound = new Audio('./assets/snare.mp3')
    sound.play()
    console.log("i have been clicked")
})

const highHat = document.querySelector(".high_hat")
highHat.addEventListener('click',()=>{
    let sound = new Audio('./assets/highHatOpen.mp3')
    sound.play()
    console.log("i have been clicked")
})

const crash = document.querySelector(".crash")
crash.addEventListener('click',()=>{
    let sound = new Audio('./assets/crash.mp3')
    sound.play()
    console.log("i have been clicked")
})

const ride = document.querySelector(".ride")
ride.addEventListener('click',()=>{
    let sound = new Audio('./assets/ride.mp3')
    sound.play()
    console.log("i have been clicked")
})

const smallTom = document.querySelector(".tom_1")
smallTom.addEventListener('click',()=>{
    let sound = new Audio('./assets/smallTom.mp3')
    sound.play()
    console.log("i have been clicked")
})

const medTom = document.querySelector(".tom_2")
medTom.addEventListener('click',()=>{
    let sound = new Audio('./assets/medTom.mp3')
    sound.play()
    console.log("i have been clicked")
})

const floorTom = document.querySelector(".floor_tom")
floorTom.addEventListener('click',()=>{
    let sound = new Audio('./assets/floorTom.mp3')
    sound.play()
    console.log("i have been clicked")
})


document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'k' || e.key.toLowerCase() === ' '  || e.key.toLowerCase() === 'l') {
        let sound = new Audio('./assets/bassdrum.mp3')
        sound.play()
    }else if(e.key.toLowerCase() === 's'){
        let sound = new Audio('./assets/snare.mp3')
        sound.play()
    }else if (e.key.toLowerCase()==='h' && e.shiftKey){
        let sound = new Audio('./assets/highHatClosed.mp3')
        sound.play()
    }else if (e.key.toLowerCase()==='h'){
        let sound = new Audio('./assets/highHatOpen.mp3')
        sound.play()
    }else if (e.key.toLowerCase() === 'c' || e.key.toLowerCase() ==='y'){
        let sound = new Audio('./assets/crash.mp3')
        sound.play()
    }else if (e.key.toLowerCase() === 'r' || e.key.toLowerCase() === 'j'){
        let sound = new Audio('./assets/ride.mp3')
        sound.play()
    }else if (e.key.toLowerCase() === 'q'){
        let sound = new Audio('./assets/smallTom.mp3')
        sound.play()
    }else if (e.key.toLowerCase() === 'w'){
        let sound = new Audio('./assets/medTom.mp3')
        sound.play()
    }else if (e.key.toLowerCase() === 'e'){
        let sound = new Audio('./assets/floorTom.mp3')
        sound.play()
    }else if (e.shiftKey){
        let sound = new Audio('./assets/highHatPedal.mp3')
        sound.play()
    }
})