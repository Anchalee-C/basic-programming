const n: number = 50.515 // 50 = Int , 50.25 = Float
console.log(n.toFixed(5)) // เพิ่มทศนิยมให้ครบตามเลขที่ใส่ ไม่ควรเกิน 17 จะเริ่มเพี้ยน [LOG] = String
console.log(Number(n.toFixed(5))) // string to number


const str: string = 'นายอาติโชคช่วย โชคหล่นทับ'

console.log(str.slice(3,14)) // อ = 3, หลัง'ย' = 14
// [LOG]: ["อาติโชคช่วย"]

const str1: string = 'นายอาติโชคช่วย สิ่งมหัศสจรรย์ โชคหล่นทับ ของโลกยุคโบราณ อันดับที่ไหน'

console.log(str1.slice(str1.indexOf('โชคหล่นทับ'), str1.indexOf('โชคหล่นทับ') + "โชคหล่นทับ".length))
// [LOG]: ["โชคหล่นทับ"]

const str2: string = 'ไตหาหัวจาม ตามหาหัวใจ ไทมำ ทำไม หนูจึ้งจิ้งจอก'

console.log(str2.split(" "))
//[LOG]: ["ไตหาหัวจาม", "ตามหาหัวใจ", "ไทมำ", "ทำไม", "หนูจึ้งจิ้งจอก"] หลัง mid

const str3: string = 'อัญชลีวันทา ทดสอบเป็นตัวอย่าง'

console.log(str3.replace('ทดสอบเป็นตัวอย่าง', 'ไม่ทราบนามสกุล'))
// [LOG]: "อัญชลีวันทา ไม่ทราบนามสกุล"

const str4: string = 'ไทมำ ไตหาหัวจาม ตามหาหัวใจ หนูจึ้งจิ้งจอก ไทมำ'

console.log(str4.replace('ไทมำ', 'แมวสีดำ'))
// [LOG]: "แมวสีดำ ไตหาหัวจาม ตามหาหัวใจ หนูจึ้งจิ้งจอก ไทมำ"

console.log(str4.replaceAll('ไทมำ', 'แมวสีดำ'))
//[LOG]: "แมวสีดำ ไตหาหัวจาม ตามหาหัวใจ หนูจึ้งจิ้งจอก แมวสีดำ"

function getPrefix(name: string) {
    if (name.includes('นาย'))
        return 'นาย'
    else (name.includes('นางสาว'))
        return 'นางสาว'
}

console.log(getPrefix('นางสาวอัญชัญ นามดอกไม้'))
// [LOG]: "นางสาว" 