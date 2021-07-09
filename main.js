audios.style.display = 'none'
// const URL = 'https://api.alquran.cloud/v1/surah/'
const URL = 'https://api.quran.sutanlab.id/surah/'

var input = document.querySelector('.input');
var text = document.querySelector('.text-wrapper');
var div = document.querySelector('.div-wrapper');

let value = input.value

input.onkeyup = (event) => {

    if (event.keyCode === 13) {
        
        if (input.value > 114) {
            alert("Bunday sura yoq")
        }
        
        text.innerHTML = ""
        
        async function quran() {
            // const response = await fetch(URL + input.value + '/ar.alafasy')
            const response = await fetch(URL + input.value)

            let surah = await response.json()
            console.log(surah);

            const testarray = surah.data.verses
            const reverse = testarray.reverse()

            div.innerHTML = ''
            let surah_name = document.createElement("h1")
            surah_name.textContent = surah.data.name.long
            div.appendChild(surah_name)
            
            testarray.forEach(element => {
                
                let a = document.createElement("a")
                a.classList.add('text')
                a.textContent = element.text.arab + '    ' + '۝'

                let for_wrapper = document.createElement('div')
                for_wrapper.classList.add('for_wrapper')
                for_wrapper.appendChild(a)
                
                text.appendChild(for_wrapper)
                
                
                a.onclick = (event) => {
                    audios.innerHTML = null
                    const notifi = new Audio(element.audio.primary)
                    audios.append(notifi)
                    notifi.play()
                }

            })
        }
        
        quran()
        
    }
    
}