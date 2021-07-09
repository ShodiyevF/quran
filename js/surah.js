let testarray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114
]

const wrapper = document.querySelector('.wrapper')

const URL = 'https://api.quran.sutanlab.id/surah'

async function quran() {
    const response = await fetch(URL)
    const surah = await response.json()
    console.log(surah);
    
    const array = surah.data

    array.forEach(element => {
        let a = document.createElement('a')
        a.classList.add('link')
        // a.setAttribute('href', '/')

        let divWrapper = document.createElement('div')
        divWrapper.classList.add('div_W')
        a.appendChild(divWrapper)

        let itemWrapper = document.createElement('div')
        itemWrapper.classList.add('vahiy_oyat_W')
        divWrapper.appendChild(itemWrapper)
        
        let p = document.createElement('p')
        p.textContent = element.name.transliteration.en
        p.classList.add('text-eng')
        divWrapper.appendChild(p)
        
        let vahiy = document.createElement('p')
        vahiy.textContent = element.revelation.id
        vahiy.classList.add('text-vahiy')
        itemWrapper.appendChild(vahiy)

        let oyat = document.createElement('p')
        oyat.textContent = element.numberOfVerses + ' ' + 'oyatdan iborat'
        oyat.classList.add('text-oyat')
        itemWrapper.appendChild(oyat)
        
        let p2 = document.createElement('p')
        p2.textContent = element.name.short
        p2.classList.add('text-arb')
        a.appendChild(p2)
        
        
        
        let li = document.createElement('li')
        li.classList.add('item')
        li.appendChild(a)
        wrapper.appendChild(li)
    });

}

quran()