let sum: number = 0 // for loop

for (let i = 1; i <= 365; i++) {
    sum = sum + i
}

console.log('Total: ', sum)
//[LOG]: "Total: ",495

let sum: number = 0 // while loop
let i: number = 1

while (i <= 31) {
    sum = sum +1
    i++
}

console.log('Total: ', sum)
//[LOG]: "Total: ",495

let sum: number = 0 // the do while loop
let i: number = 1

do {
    sum = sum + i
    i++
} while (i <= 31)

console.log('Total: ', sum)
//[LOG]: "Total: ",495

let sum: number = 0 // infinity loop อย่าหาทำ
let i: number = 1

while (i <= 31) {
    sum = sum +1
    i++
}

console.log('Total: ', sum)

let count: number = 0 // ถ้าใส่ 46 - 49 จะหยุด infinity loop ได้

while (true) {
    console.log("อยากกลับบ้าน")
    count++
    if (count === 10) {
        break
    }
}

for (let i = 1; i <= 18; i++) {
    console.log('ฉันอายุ ' + i + ' ปี')
}

let i: number = 1
while (i <= 18) {
    console.log('ฉันอายุ ' + i + ' ปี')
    i++
}

let i: number = 1
do {
    console.log('ฉันอายุ ' + i + ' ปี')
    i++
} while (i <= 18)

const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']
const num: number[] = [1, 2, 3, 4, 5]
const bool: boolean[] = [true, true, false, false]



const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']



const friends: string[] = ['May', 'June', 'July', 'Ausgust', 'September']

for (let i = 0; i < 5; i ++) {
    if(friends[i] === 'September') {
        console.log('ไปกินหมูกระทะกันน')
    }
}
// [LOG]: "ไปกินหมูกระทะกันน" 


const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < 10; i ++) {
    if(num[i] === 3 || num[i] === 5 || num[i] === 7) {
        num[i] = 0
    }
}
console.log(num)
//[LOG]: [1, 2, 0, 4, 0, 6, 0, 8, 9, 10] 
