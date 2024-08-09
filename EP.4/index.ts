function SayHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayOfWeek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfWeek === 4) {
        console.log('สวัสดีวันพุธ')
    } else if (dayOfWeek === 5) {
        console.log('สวัสดีวันพฤหัสบดี')
    } else if (dayOfWeek === 6) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayOfWeek === 7) {
        console.log('สวัสดีวันเสาร์')
}
}

SayHi(6)


function SayHiSW(dayOfWeek: number) {
    switch(dayOfWeek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
    }
}

SayHi(1)


function meOrYou(size: string) {
    switch(size) {
        case 's':
            console.log('ผอม')
            break
        case 'm':
            console.log('ผอม')
            break
        case 'l':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('อ้วน')
            break
        case '2xl':
            console.log('อ้วน')
            break
    }
}

meOrYou('s')

const x: number = 0.4
const y: number = 0.2

console.log(x + y)


const x: number = 0.1
const y: number = 0.2

console.log((x * 10 + y * 10 ) /10)

const x: number = 46
const y: number = 41

console.log(x + y)

const x: number = 46

console.log(x)


const x: number = 46

console.log(x.toString())

function fixDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixDecimal(40.5919, 14))

function fixDecimal(n: number) {
    const x = n.toLocaleString()
    return x
}

console.log(fixDecimal(10000))
//[LOG]: "10,000" 

const str: string = 'ณเดชณ์ ณ บางแค แคร์บางคน บางคนหลายใจ บางคนใจเดียว เกิดที่บางแค ช่วยแม่ขายข้าวมันไก่'

console.log(str.length)//นับว่ามีกี่ตัว นับทุกอย่าง
//[LOG]: 83 

const str: string = 'Hello'

console.log(str.charAt(2))//บอกตำแหน่ง
//[LOG]: "l" 

const str: string = 'Anchalee'

console.log(str.toUpperCase())
console.log(str.toLowerCase())
//[LOG]: "ANCHALEE" 
//[LOG]: "anchalee" 


function checkStringLenth(n: string) {
    const x = n.length
    console.log(x)
}
checkStringLenth('Anchalee')

function getCharByIndex(msg: string, index: number) {
    return msg.charAt(index)
}

console.log(getCharByIndex('หิวข้าววววว',5))

function getCharByIndex(msg: string, index: number) {
    const x = msg.charAt(index)
    return x // x ตัวแปรใช้แล้วทิ้ง
}

console.log(getCharByIndex('หิวข้าววววว',5))

const str: string = 'อยากกลับบ้านมากกกก'

console.log(str.indexOf('ก'))

const str: string = 'รักเธอคนนี้'

console.log(str.includes('เธอ')) 

function checkStrIndex(str: string, search: string) {
    if(str.includes(search)) {
        console.log(str.indexOf(search))
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

checkStrIndex('อยากกินไอศกรีม', 'อยาก')