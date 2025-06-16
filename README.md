
# 🧠 Pe-Rahat

ระบบ API สำหรับจัดการข้อมูลนักศึกษาและ Hint โดยสามารถตรวจสอบ, เพิ่ม, และดึงข้อมูล Hint ของนักเรียนได้อย่างง่ายดายผ่าน RESTful API

## 📁 Postman Collection

ไฟล์นี้คือ Postman Collection สำหรับการทดสอบ API ต่าง ๆ ภายในระบบ Pe-Rahat

## 📦 Endpoints ที่มีให้ใช้งาน

### ✅ 1. Authenticate นักเรียน

**URL:** `POST /user/auth`  
**คำอธิบาย:** ใช้ยืนยันตัวตนด้วย student_id

**ตัวอย่าง Request:**
```json
{
  "student_id": "68130500085"
}
```

---

### 🔎 2. ตรวจสอบสถานะของนักเรียน

**URL:** `GET /user/checked/:studentId`  
**คำอธิบาย:** ตรวจสอบว่านักเรียนได้ลงทะเบียนหรือยัง

**ตัวอย่าง URL:**  
```
http://localhost:3000/user/checked/67130500085
```

---

### 💡 3. ดึง Hint ของนักเรียน

**URL:** `GET /hint/getbyStudent`  
**คำอธิบาย:** ใช้ดึง Hint ของนักเรียนตาม student_id (อยู่ใน body)

**ตัวอย่าง Request Body:**
```json
{
  "student_id": "68130500085"
}
```

---

### ➕ 4. เพิ่ม Hint ใหม่

**URL:** `POST /hint/addHint`  
**คำอธิบาย:** เพิ่ม Hint สำหรับนักเรียน

**ตัวอย่าง Request:**
```json
{
  "Hint": "ANT LOVE NOTE",
  "student_id": "67130500085"
}
```

---

## ▶️ วิธีใช้งาน

1. ติดตั้ง Postman หากยังไม่มี: [ดาวน์โหลดที่นี่](https://www.postman.com/downloads/)
2. Import ไฟล์ `Pe-Rahat.postman_collection.json` เข้า Postman
3. ตรวจสอบว่า Backend ทำงานอยู่ที่ `http://localhost:3000`
4. เลือก API ที่ต้องการทดสอบและกด "Send"

---

## ⚙️ ความต้องการระบบ

- Node.js (แนะนำ: v16+)
- Express server รันที่พอร์ต 3000
- Postman สำหรับทดสอบ API

---

## 👨‍💻 ผู้จัดทำ

Thanaphat  
Pe-Rahat Project 2025
