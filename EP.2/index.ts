function add(a: number, b: number) { return a + b }

console.log(add(5, 8))


function minus(a: number, b: number) { return a - b }

console.log(minus(8, 4))

function multiple(a: number, b: number, c: number, d: number) { return a * b * c * d }

console.log(multiple(2, 3, 4, 5))

function หิว(หิวจริงมั้ย: boolean) {
    if (หิวจริงมั้ย === true) { console.log('หิวจริง') }
    else { console.log('ไม่หิว') }
}

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50) { return 'grade F' }
    else if (score < 60) { return 'grade D' }
    else if (score < 70) { return 'grade C' }
    else if (score < 80) { return 'grade B' }
    else if (score >= 80) { return 'grade A' }
}

console.log(grade(25, 25, 30))