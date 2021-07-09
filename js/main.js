const surah_name = [
    "Al-Faatiha",
    "Al-Baqara",
    "Aal-i-Imraan",
    "An-Nisaa",
    "Al-Maaida",
    "Al-An'aam",
    "Al-A'raaf",
    "Al-Anfaal",
    "At-Tawba",
    "Yunus",
    "Hud",
    "Yusuf",
    "Ar-Ra'd",
    "Ibrahim",
    "Al-Hijr",
    "An-Nahl",
    "Al-Israa",
    "Al-Kahf",
    "Maryam",
    "Taa-Haa",
    "Al-Anbiyaa",
    "Al-Hajj",
    "Al-Muminoon",
    "An-Noor",
    "Al-Furqaan",
    "Ash-Shu'araa",
    "An-Naml",
    "Al-Qasas",
    "Al-Ankaboot",
    "Ar-Room",
    "Luqman",
    "As-Sajda",
    "Al-Ahzaab",
    "Saba",
    "Faatir",
    "Yaseen",
    "As-Saaffaat",
    "Saad",
    "Az-Zumar",
    "Ghafir",
    "Fussilat",
    "Ash-Shura",
    "Az-Zukhruf",
    "Ad-Dukhaan",
    "Al-Jaathiya",
    "Al-Ahqaf",
    "Muhammad",
    "Al-Fath",
    "Al-Hujuraat",
    "Qaaf",
    "Adh-Dhaariyat",
    "At-Tur",
    "An-Najm",
    "Al-Qamar",
    "Ar-Rahmaan",
    "Al-Waaqia",
    "Al-Hadid",
    "Al-Mujaadila",
    "Al-Hashr",
    "Al-Mumtahana",
    "As-Saff",
    "Al-Jumu'a",
    "Al-Munaafiqoon",
    "At-Taghaabun",
    "At-Talaaq",
    "At-Tahrim",
    "Al-Mulk",
    "Al-Qalam",
    "Al-Haaqqa",
    "Al-Ma'aarij",
    "Nooh",
    "Al-Jinn",
    "Al-Muzzammil",
    "Al-Muddaththir",
    "Al-Qiyaama",
    "Al-Insaan",
    "Al-Mursalaat",
    "An-Naba",
    "An-Naazi'aat",
    "Abasa",
    "At-Takwir",
    "Al-Infitaar",
    "Al-Mutaffifin",
    "Al-Inshiqaaq",
    "Al-Burooj",
    "At-Taariq",
    "Al-A'laa",
    "Al-Ghaashiya",
    "Al-Fajr",
    "Al-Balad",
    "Ash-Shams",
    "Al-Lail",
    "Ad-Dhuhaa",
    "Ash-Sharh",
    "At-Tin",
    "Al-Alaq",
    "Al-Qadr",
    "Al-Bayyina",
    "Az-Zalzala",
    "Al-Aadiyaat",
    "Al-Qaari'a",
    "At-Takaathur",
    "Al-Asr",
    "Al-Humaza",
    "Al-Fil",
    "Quraish",
    "Al-Maa'un",
    "Al-Kawthar",
    "Al-Kaafiroon",
    "An-Nasr",
    "Al-Masad",
    "Al-Ikhlaas",
    "Al-Falaq",
    "An-Naas",
]

// const testtesttest = 

document.getElementById('play_sound').onclick = () => {
    console.log('asd');
}

audios.style.display = 'none'
// const URL = 'https://api.alquran.cloud/v1/surah/'
const URL = 'https://api.quran.sutanlab.id/surah/'

var input = document.querySelector('.input');
var text = document.querySelector('.text-wrapper');
var div = document.querySelector('.div-wrapper');

let value = input.value

input.onkeyup = (event) => {
    
    if (event.keyCode === 13) {
        
        
        
        text.innerHTML = ""
        async function quran() {
            // const response = await fetch(URL + input.value + '/ar.alafasy')
            const response = await fetch(URL + input.value)
            
            let surah = await response.json()
            console.log(surah);
            
            const testarray = surah.data.verses
            // const reverse = testarray.reverse()
            
            div.innerHTML = ''
            let surah_name = document.createElement("h1")
            surah_name.textContent = surah.data.name.long
            div.appendChild(surah_name)
            if (input.value > 114) {
                alert('Bunday sura yoq!')
                surah_name.textContent = ''
                div.innerHTML = ''
            }
            
            testarray.forEach(element => {
                
                let a = document.createElement("a")
                a.classList.add('text')
                a.textContent = element.text.arab + '    ' + '۝'
                
                let for_wrapper = document.createElement('div')
                for_wrapper.classList.add('for_wrapper')
                for_wrapper.appendChild(a)
                
                text.appendChild(for_wrapper)
                
                
                a.onclick = (event) => {
                    let actives = document.querySelectorAll('.active')
                actives.forEach(li => li.classList.remove('active'))
                    audios.innerHTML = null
                    const notifi = new Audio(element.audio.primary)
                    audios.append(notifi)
                    notifi.play()
                }
                
            })
            
            
            const tttt = surah.data.verses.length
            
            let index = 0
            
            function readSurah(index) {
                
                let actives = document.querySelectorAll('.active')
                actives.forEach(li => li.classList.remove('active'))
                
                let textP = document.querySelectorAll('a')
                textP[index].classList.add('active')
                audios.innerHTML = null
                let textAudio = new Audio(surah.data.verses[index].audio.primary)
                audios.appendChild(textAudio)
                textAudio.play()
                textAudio.onended = () => {
                    if (index < tttt) {
                        return readSurah(index + 1)
                    }
                }
                
                play_sound.onclick = () => {
                    textAudio.play()
                    
                    textAudio.onended = () => {
                        if (index < tttt) {
                            return readSurah(index + 1)
                        }
                    }
                }
                
                pause_sound.onclick = () => {
                    audios.innerHTML = null
                    textAudio.pause()
                    audios.appendChild(textAudio)
                }
                
            }
            
            const read_all = document.getElementById('read_all')
            
            read_all.onclick = () => {
                readSurah(index);
            }
            
            
            
            pause_sound.onclick = () => {
                audios.innerHTML = null
                textAudio.pause()
                audios.appendChild(textAudio)
            }
            
            
        }
        
        quran()
        
    }
    
}