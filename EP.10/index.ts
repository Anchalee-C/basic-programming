// zane.com -> No
// tan@ -> No
// safe@utk.ac.th -> Yes
// poppy@gmail.com -> Yes

const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    }
]

function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิกแล้ว ยินดีต้อนรับ คุณ' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16 ตัว')
        }
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}

register('happy.@mail.com', '123four56019')

// กฎการเข้ารหัส
// เปลี่ยน u เป็น +
// เปลี่ยน 6 เป็น *
// เปลี่ยน 0 เป็น ^

// +u6*0^ --> ++**^^ --> uu6600

const database0 = [
    {
        email: 'user@gmail.com',
        password: 'loveYo+3^^^'
    },
    {
        email: 'usernumber02@gmail.com',
        password: 'MyFault0+++00'
    }
]

function decyptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email: string, password: string) {
    const user = database0.filter(function (element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        if (decyptPassword(user[0].password) === password) {
            alert('คุณทำการเข้าสู่ระบบสำเร็จแล้ว')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ แล้วลองใหม่')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('usernumber02@gmail.com', 'MyFault0uuu00')