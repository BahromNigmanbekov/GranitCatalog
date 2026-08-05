# QR-katalog loyihasi — Claude uchun to'liq prompt

> **Foydalanish:** quyidagi matnni to'liq nusxalab, Claude.ai Pro'da yangi chatga tashlang. Rasmlar tayyor bo'lgach, ikkinchi xabarda ularni yuklaysiz.

---

## PROMPT (shu yerdan nusxalang)

Sen tajribali frontend dizayner va dasturchisan — kichik dizayn-studiyaning bosh dizayneri. Mening tabiiy tosh (granit, marmar, travertin) savdosi bilan shug'ullanadigan biznesim uchun **statik mahsulot katalogi** qurishing kerak. Bu shunchaki katalog — hech qanday savat, buyurtma, ro'yxatdan o'tish yoki narx yo'q.

### 1. Loyiha konteksti

Biz mijozlarga borganda qog'oz katalog ko'tarib yurmaymiz. Buning o'rniga vizitka/stikerdagi QR kodni skaner qilamiz — telefon brauzeri ochiladi va mijoz bizdagi barcha toshlarni ko'radi: rasmi, tavsifi, va eng muhimi — o'sha toshdan qilingan **tugallangan obyektlar** (real ish namunalari).

Mijoz bu sahifani do'kon ichida, ba'zan sekin internetda, ko'pincha telefonda ochadi. Shuning uchun sahifa **darhol ochilishi va hech qachon qotib qolmasligi** shart. Bu birinchi taassurot — ochilishi bilan "voy" degan reaksiya berishi kerak, lekin bu "voy" tezlik hisobidan bo'lmasin.

**Auditoriya:** qurilish/remont qilayotgan xususiy mijozlar, dizaynerlar, prorablar. Yoshi 25–60. Ular texnik odam emas — soddalik va aniq rasm muhim.

### 2. Texnik talablar (qat'iy)

- **Backend yo'q.** Barcha ma'lumot JS ichida statik massiv (`const STONES = [...]`) sifatida saqlanadi.
- **Bitta HTML fayl** — CSS va JS shu faylning ichida. Hech qanday build step, npm, framework yo'q. Vanilla JS.
- **Tashqi kutubxona yo'q** (CDN'dan hech narsa tortilmaydi — internet sekin bo'lsa sahifa buzilmasin). Shrift ham system font stack yoki `@font-face` bilan lokal.
- **Mobile-first.** Asosiy qurilma — telefon (360–430px kenglik). Keyin planshet va desktop.
- **Routing:** URL hash orqali (`#/stone/tan-brown`). Mijoz aniq bir toshni linkini ulashganda o'sha tosh ochilsin. Orqaga tugmasi to'g'ri ishlasin.
- **Offline-ga chidamli:** rasm yuklanmasa ham layout buzilmaydi (skeleton/placeholder qoladi).
- **Til:** butun interfeys o'zbek tilida (lotin). Toshlar nomi original yozilishida qoladi.

### 3. Performance — bu eng muhim talab

Sahifa qotib qolsa loyiha muvaffaqiyatsiz hisoblanadi. Shuning uchun:

- Barcha rasmlar `loading="lazy"` + `decoding="async"` + aniq `width`/`height` (layout shift bo'lmasin).
- Katalog grid'da faqat kichik thumbnail ko'rsatiladi; katta rasm faqat detal sahifasi ochilganda yuklanadi.
- Agar tosh soni ko'payib ketsa — grid uchun oddiy virtualizatsiya yoki "yana yuklash" (lazy pagination, 12 tadan).
- Animatsiyalar faqat `transform` va `opacity` orqali. `box-shadow`, `filter`, `width` animatsiya qilinmaydi.
- Qidiruv inputiga debounce (150ms).
- `prefers-reduced-motion` hurmat qilinadi.
- Maqsad: 3G'da ham birinchi ekran 2 soniyada chiqsin.

### 4. Ma'lumot strukturasi

Har bir tosh uchun quyidagi schema'ni ishlat. Rasmlarni men keyinroq beraman — hozircha `images` va `projects` maydonlarini placeholder bilan to'ldir (masalan `assets/tan-brown-1.jpg`), lekin kodni shunday yozki, men faqat fayl nomlarini almashtirsam ishlab ketsin.

```js
{
  id: "tan-brown",
  name: "Tan Brown",
  origin: "Hindiston",           // kelib chiqishi
  type: "granit",                // granit | marmar | travertin | keramogranit | boshqa
  colorFamily: "jigarrang",      // filtr uchun: qora, oq, kulrang, jigarrang, yashil, pushti, bej
  finish: ["polirovka", "termo"],// ishlov turlari
  description: "...",            // 2–3 jumla, sotuvchi tilida emas, tushunarli tilda
  specs: {
    thickness: "20 mm / 30 mm",
    formats: "600×300, 600×600, plita",
    application: ["pol", "zinapoya", "peshtaxta", "fasad"],
    hardness: "6–7 Mos",
    absorption: "past"
  },
  images: ["assets/tan-brown-1.jpg"],        // toshning o'zi (yaqindan tekstura)
  projects: [                                 // tugallangan obyektlar
    { image: "assets/tan-brown-obj-1.jpg", caption: "Zinapoya, xususiy uy" }
  ],
  featured: false
}
```

Jami **54 ta tosh** bo'ladi. Hozircha quyidagi 25 tasini kirit, qolganini keyin qo'shaman:

1. Komandor Black
2. Kont Black Koja
3. Labradorid — Ukraina
4. Tan Brown — Hindiston
5. Absolute Black — Hindiston
6. Angola Black — Angola, Afrika
7. Granit Galaxy
8. Keramogranit Mikrokristallit
9. Marmar Raja Green — Hindiston
10. Granit Plitka Polirovka A
11. Granit Plitka Suyuq Polirovka A
12. Kuksaroy
13. Bolyasina
14. Kolotiy
15. Diamond Black
16. Black Marmar
17. Zarband Marmar
18. Granit Rozoviy
19. Granit Qorabog' Navbahor
20. Granit Aurora
21. Travertin Paxta Gul — Qirg'iziston
22. Travertin Ilon Gul
23. Travertin Dojdik Gul
24. Granit Butterfly
25. Granit Kapusta

Tavsiflarni (`description`) o'zing yoz — har bir tosh uchun realistik, kasbiy, lekin oddiy tilda. Uydirma texnik raqam yozma; noaniq joyda umumiy, xavfsiz ta'rif ber. Men keyin tekshirib to'g'rilayman.

### 5. Ekranlar

**A. Katalog (bosh ekran)**
- Yuqorida qisqa sarlavha va toshlar soni.
- Qidiruv maydoni: nom, kelib chiqishi va tur bo'yicha izlaydi. Xatoga chidamli (registr, bo'shliq, `'`/`'` farqi, lotin/kiril aralashmasi).
- Filtr chiplar: tur (granit / marmar / travertin / keramogranit) va rang oilasi bo'yicha. Bir necha filtr birga ishlaydi. Aktiv filtrlar ko'rinib turadi, "Tozalash" tugmasi bor.
- Grid: telefonda 2 ustun, planshetda 3, desktopda 4. Har bir karta — tosh tekstura rasmi + nomi + kelib chiqishi.
- Natija topilmasa: bo'sh holat ekrani mijozga nima qilishni aytadi ("Boshqa nom bilan qidiring yoki filtrlarni tozalang" + tugma).

**B. Tosh sahifasi (detal)**
- Katta rasm (bir nechta bo'lsa — svayp qilinadigan galereya, indikator bilan).
- Nomi, turi, kelib chiqishi.
- Tavsif.
- Texnik ma'lumot — o'qish oson jadval/ro'yxat ko'rinishida.
- **"Tugallangan ishlar"** bloki — shu toshdan qilingan obyektlar rasmi va qisqa izoh. Bu sahifaning eng qimmatli qismi, shunga yarasha joy ber.
- Pastda: "O'xshash toshlar" (bir xil tur yoki rang oilasidan 3–4 ta).
- Orqaga qaytish katalogdagi avvalgi scroll pozitsiyasini saqlaydi.

### 6. Dizayn yo'nalishi

Avval kod yozmasdan, qisqa dizayn rejasini tuz: 4–6 ta nomlangan rang (hex), 2 ta shrift roli (display + body), layout konsepsiyasi, va **bitta signature element** — sahifa esda qoladigan yagona detal. Keyin bu rejani tanqid qil: agar biror qismi "har qanday katalog uchun yasalgan shablon" bo'lsa — o'zgartir va nimani nega o'zgartirganingni ayt. Faqat shundan keyin kod yoz.

Yo'nalish bo'yicha ko'rsatmalar:

- **Tosh o'zi qahramon.** Interfeys tinch, rang past to'yingan, kontrast aniq bo'lsin — chunki ekranda 54 xil rangli tekstura bor. Rangli interfeys ular bilan urishadi.
- Grid kartalari — tekstura rasmi to'liq kartani egallaydi, matn ustida emas, ostida. Toshning haqiqiy rangini buzadigan overlay, gradient yoki filtr **ishlatma**.
- Karta ochilishi silliq bo'lsin: bosilganda rasm o'sha joydan detal sahifasiga o'sib chiqadigan his (shared-element hissi, lekin arzon usulda — `transform` orqali).
- Klassik AI-shablonlardan qoch: krem fon + serif + terrakota aksent; qora fon + kislotali yashil; gazeta-uslub hairline chiziqlar. Bu mavzu uchun o'zingcha qaror qabul qil.
- Sensorli maqsadlar kamida 44×44px. Fokus ko'rinadigan bo'lsin.
- Matn: aktiv nisbat, sodda fe'llar, "Yuborish" emas "Qidirish". Har bir element bitta ish qiladi.

### 7. Nima QILMASLIK kerak

- Narx, savat, buyurtma tugmasi, forma, login yo'q.
- Biz haqimizda / kontakt sahifasi yo'q — bu faqat tosh katalogi.
- Og'ir kutubxona, 3D, parallax, kursor effekti, avtomatik karusel yo'q.
- localStorage/sessionStorage ishlatma.
- Uydirma sertifikat, mukofot, mijoz sharhi yozma.

### 8. Yetkazish

1. Avval dizayn rejasi va tanqidi (qisqa).
2. Keyin bitta to'liq HTML fayl.
3. Oxirida qisqa izoh: rasmlarni qayerga qo'yishim kerak, qolgan 29 ta toshni qanday qo'shaman, va faylni qanday hostga qo'yib QR kod yasashim mumkin.

---

## Prompt tugadi

### Keyingi qadamlar (sizga eslatma)

**Rasmlar:** har bir tosh uchun 2 xil rasm kerak — (1) tekstura yaqindan, bir xil yorug'likda va bir xil rakursda olingan, (2) tugallangan obyekt. Bir xil sharoitda suratga olish katalogni professional ko'rsatadi. Rasmlarni yuklashdan oldin `.webp` formatiga o'tkazing, thumbnail 600px, katta rasm 1600px'dan oshmasin.

**Hosting va QR:** faylni GitHub Pages, Netlify yoki Cloudflare Pages'ga bepul qo'yasiz — hammasi statik faylni qo'llab-quvvatlaydi. Keyin o'sha havoladan QR kod generatsiya qilasiz. QR skaner qilinganda telefon standart brauzerni ochadi.
