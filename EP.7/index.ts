const score = [10, 23, 26, 30, 33]

let sum1: number = 0

for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}

let avg = sum / score.length

console.log("Total: ", sum)
console.log("Avg: ", avg)

//[LOG]: "Total: ",  122 
//[LOG]: "Avg: ",  24.4 

const myStudents: string = "เวรี่, ซอรี่, แฮปปี้, บายบาย, โอเค้"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)
console.log(myStudentsArray[3])

// [LOG]: "เวรี่, ซอรี่, แฮปปี้, บายบาย, โอเค้" 
// [LOG]: ["เวรี่", " ซอรี่", " แฮปปี้", " บายบาย", " โอเค้"] 
// [LOG]: " บายบาย" 

const myStudentsArray2: string[] = ["เวรี่", " ซอรี่", " แฮปปี้", " บายบาย", " โอเค้"] 

console.log(myStudentsArray2.toString())

//[LOG]: "เวรี่, ซอรี่, แฮปปี้, บายบาย, โอเค้" 

const fullName: string = 'ลูกรัก เบ้าหน้าพระเจ้าสร้าง'

console.log(fullName.split(' '))
console.log(fullName.split(' ')[1])
//[LOG]: ["ลูกรัก", "เบ้าหน้าพระเจ้าสร้าง"]
//[LOG]: "เบ้าหน้าพระเจ้าสร้าง"  
console.log(fullName.split(' ')[0])

console.log(fullName.slice(0, fullName.indexOf(' ')))
//[LOG]: "ลูกรัก" 
//[LOG]: "ลูกรัก" 

const anmial: string = 'แมว*หมา*โพนี่*ฟีนิกส์'

const anmialArray: string[] = anmial.split('*')

console.log(anmialArray)
//[LOG]: ["แมว", "หมา", "โพนี่", "ฟีนิกส์"] 


const animal: string = 'แมว*หมา*โพนี่*ฟีนิกส์'

const animalArray: string[] = animal.split('*')

console.log("ตั้งต้น:", animalArray)
// [LOG]: "ตั้งต้น:",  ["แมว", "หมา", "โพนี่", "ฟีนิกส์"] 

animalArray.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", animalArray)
// [LOG]: "เอาตัวสุดท้ายออก: ",  ["แมว", "หมา", "โพนี่"] 

animalArray.push('เพนกวิน') //ใส่ต่อท้าย

console.log("ใส่ต่อท้าย: ", animalArray)
// [LOG]: "ใส่ต่อท้าย: ",  ["แมว", "หมา", "โพนี่", "เพนกวิน"] 

animalArray.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", animalArray)
// [LOG]: "เอาตัวหน้าออก: ",  ["หมา", "โพนี่", "เพนกวิน"] 

animalArray.unshift('ยูนิคอร์น') // ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ", animalArray)
// [LOG]: "ใส่ตัวหน้า: ",  ["ยูนิคอร์น", "หมา", "โพนี่", "เพนกวิน"]

const fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.sort() //เรียง A - Z

console.log("เรียง A - Z: ", fruits)
//[LOG]: "เรียง A - Z: ",  ["Apple", "Banana", "Mango", "Orange"] 

fruits.reverse() //เรียง Z - A

console.log("เรียง Z - A: ", fruits)
//[LOG]: "เรียง Z - A: ",  ["Orange", "Mango", "Banana", "Apple"] 

const fruitsSlice = fruits.slice(0, 2)

console.log("ตัด: ", fruitsSlice)
//[LOG]: "ตัด: ",  ["Orange", "Mango"] 

const nickName: string = "คอตต้อนแคนดี้,บิ้วตี้สมูตตี้,ช็อคโก้ดริ้งค์,แซนวิชทูน่า"

const nickNameArry: string[] = nickName.split(',')

console.log(nickNameArry)
// [LOG]: ["คอตต้อนแคนดี้", "บิ้วตี้สมูตตี้", "ช็อคโก้ดริ้งค์", "แซนวิชทูน่า"] 

nickNameArry.sort()

console.log("เรียง ก - ฮ: ", nickNameArry)
// [LOG]: "เรียง ก - ฮ: ",  ["คอตต้อนแคนดี้", "ช็อคโก้ดริ้งค์", "บิ้วตี้สมูตตี้", "แซนวิชทูน่า"] 

nickNameArry.reverse()

console.log("เรียงกลับ ฮ - ก: ", nickNameArry)
// [LOG]: "เรียงกลับ ฮ - ก: ",  ["แซนวิชทูน่า", "บิ้วตี้สมูตตี้", "ช็อคโก้ดริ้งค์", "คอตต้อนแคนดี้"]

const me = {
    firstName: 'CottonCandy',
    lastName: 'Verrygood',
    age: 99,
    adderss: {
        num: 12/34, 
        village: 3, 
        road: 'Bamroongrat', 
        subDistrict: 'Wiang Phang Kham',
        district: 'Mae Sai',
        province: 'Phang Nga', 
        postalCode: 10400
    },
    telephone: +6612345672, 
    phoneNumber: 2987654321,
    email:  'triceratopsonlyplants@gmail.com'
}

console.log(me.adderss.postalCode)
//[log]: 10400

//ประวัติส่วนตัว

// ชื่อ: คอตต้อนแคนดี้
// นามสกุล: เวรี่กู้ด
// อายุ: 99
// ที่อยู่ปัจจุบันเลขที่: 12/34 หมู่ที่: 3 ถนน: บำรุงราษฎร์
// ตำบล/แขวง: เวียงพาคำ อำเภอ/เขต: แม่สาย
// จังหวัด: พังงา รหัสไปรษณีย์: 10400
// โทรศัพท์: +6612345672 มือถือ: O987654321
// อีเมล์: triceratopsonlyplants@gmail.com