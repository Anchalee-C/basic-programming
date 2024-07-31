function helloWorld() {
    console.log("สวัสดี")
}

helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log (name)
}

helloName('Mar') // มี input ไม่มี output

function getpi() {
    return 3.14
}

console.log(getpid) // ไม่มี input แต่มี output

function st(fname: string, sname: string, tname: string) {
    if (fname === 'mix' || sname === 'zane' && tname === 'forth') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    } 
}

st('mix', 'zane', 'forth')

function territory(sex: string, height: number, weight: number) {
    if (sex === 'male' && (height >= 170 || weight > 50 && weight <= 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่ผ่านเกณฑ์')
    }       
}

territory('male', '175', '68')

function money(age: number, salary: number, เงินฝากรวม: number) {
    if (age > 16 && salary <= 70000 && เงินฝากรวม <= 50000) {
        console.log('รับ 1000 บาท')
    } else {
        console.log('อด...')
    }
}

money('18', '1200', '25000')

function MBI(height: number, weight: number) { // หน่วยเป็นเมตร
    let MBI: string = weight/(height * height)
    if (MBI < 18.50) {
         return'น้ำหนักน้อย / ผอม'
    } else if (MBI >= 18.50 && MBI <= 22.90) {
        return'ปกติ (สุขภาพดี)'
    } else if (MBI >= 23 && MBI <= 24.90) {
        return'ท้วม / โรคอ้วนระดับ 1'
    } else if (MBI >= 25 && MBI <= 29.90) {
        return'อ้วน / โรคอ้วนระดับ 2'
    } else if (MBI > 30) {
        return'อ้วนมาก / โรคอ้วนระดับ 3'
    }
}

console.log(MBI('1.50', '45'))