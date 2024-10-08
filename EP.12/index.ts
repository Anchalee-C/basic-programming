// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// while loop

// let i = 0;
// while (i <= 10) {
//     console.log('while', i)
// }

// const arr = ['Toyota', 2 , true] // ควรใช้ datatype ชนิดเดียวกัน

const cars = ['Toyota', 'BMW', 'Honda']

cars.length // มีจำนวนสมาชิกทั้งหมด 3 ตัว
cars[0]
// cars[2] = 'Suzuki' // เปลี่ยนค่า

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

let i = 0
while (i < cars.length) {
    console.log("while", cars[i]);
    i++;
}

const cars1 = ['Toyota', 'BMW', 'Honda']

cars1.pop() // ['Toyota', 'BMW'] เอาตัวหลังสุดออก
cars1.push('Benz') // ['Toyota', 'BMW', 'Honda','Benz']

cars1.shift() // ['BMW', 'Honda']
cars1.unshift('BMX')
cars1.sort() // A-Z
cars1.reverse() // Z-A


const person = {
    firstName: 'John', //"firstName" ไม่ใช่ javascript object
    LastName: 'Doe',
    age: 16,
    isMale: true,
    sister: {
        firstName: 'Jane',
        LastName: 'Doe',
        age: 16,
        ismale: false,
    }
}
person.age = 18
person.sister.LastName

const friend = [
    {
        firstName: 'John',
        LastName: 'Doe',
        age: 16,
        isMale: true,
        sister: {
            firstName: 'Jane',
            LastName: 'Doe',
            age: 16,
            ismale: false,
        }
    },
    {
        firstName: 'Seppey',
        LastName: 'Doe',
        age: 16,
        isMale: true,
        sister: {
            firstName: 'Janny',
            LastName: 'Doe',
            age: 16,
            ismale: false,
        }
    }, {
        firstName: 'Stay',
        LastName: 'Doe',
        age: 16,
        isMale: true,
        sister: {
            firstName: 'Glow',
            LastName: 'Doe',
            age: 16,
            ismale: false,
        }
    }
]

friend.length

const ar = [[1, 2, 3], [2, 3, 4]]  // ซ้อน array ได้

const peoples = [
    { Name: "Bomber", age: 25 },
    { Name: "Somsri", age: 20 },
    { Name: "Kommark", age: 16 }
]

const peopeleMore: {
    name: string;
    age: number;
}[] = []

// ยาก
for (let i = 0; i < peoples.length; i++) {
    if (peoples[i].age > 20) {
        peoples.push(peoples[i])
    }
}

const products = [
    { price: 100 },
    { price: 200 },
    { price: 150 },
    { price: 300 },
    { price: 150 }
]

function updatePriceWithForLoop(
    products: {
        price: number;
    }[]
) {
    const m: {
        price: number;
    }[] = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 150) {
            m.push(products[i]);
        }
    }

    // update price 10%
    for (let i = 0; i < products.length; i++) {
        m[i].price = m[i].price * 1.1;
    }
    return m;
}

// filter = เลือกเฉพาะ
function updatePrice(products: {
    price: number;
}[]) {
    return products.filter(function (element, index) {
        return element.price > 150
    }).map(function (element, index) {
        price: element.price * 1.1
    });
}

console.log(products)

const practice = [1, 2, 3, 4, 5, 6, 7, 8] // >> ['1', '2', '3', '4', '5', '6', '7', '8']

// hard
function covertToArrayString(array: number[]) {
    const result: string[] = [];
    for (let i = 0; i < practice.length; i++) {
        result.push(array[i].toString())
    }
    return result
}

// easy
function covertToArrayStringWhiteMap(array: number[]) {
    return array.map(function (element, index) {
        return element.toString()
    })
}

console.log(covertToArrayString(practice))
console.log(covertToArrayStringWhiteMap(practice))

const names = ["April Month", "June Monthly", "July Year"];

function cutNameWhitMap(array: string[]) {
    return array.map(function (element, index) {
        const cutName = element.split(" ") // ["April", "Month"]
        return {
            firstName: cutName[0],
            lastName: cutName[1]
        }
    })
}

console.log(cutNameWhitMap(names))

const person1 = {
    firstName: 'Stay',
    lastName: 'Doe',
    age: 16,
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person1.getFullName())

const inventory = {
    name: 'Laptop Store',
    quantity: 5,
    isAvailable: function () {
        return this.quantity > 0
    }
}

console.log(inventory.isAvailable())

const account = {
    name: 'ออมไปทุกวัน',
    balance: 0,
    deposit: function (amount: number) {
        if (amount < 0) {
            console.log('กรุณาระบุจำนวนเงิน')
            return
        }
        this.balance = this.balance + amount
        console.log(' ฝากเงินจำนวน ' + amount + ' ยอดคงเหลือ ' + this.balance)
    },
    withdraw: function (amount: number) {
        if (amount > this.balance) {
            console.log(' ยอดเงินของคุณไม่พอ คุณมียอดคงเหลือ ' + this.balance)
            return
        }
        this.balance = this.balance - amount
        console.log(' ถอนเงิน ' + amount + ' ยอดเงินคงเหลือ ' + this.balance)
    }
}

account.deposit(199) //" ฝากเงินจำนวน 199 ยอดคงเหลือ 199" 
account.withdraw(100) //" ถอนเงิน 100 ยอดคงเหลือ 99" 

const covidDeath1 = database.filter(function (element, index) {
    return element.total_death > 5 && element.province !== 'ทั้งประเทศ'
})

const covidDeathOnlyProvince1 = database.map(function (element, index) {
    return ({
        province: element.province,
        total_Death: element.total_death
    })
})

console.log(covidDeathOnlyProvince)