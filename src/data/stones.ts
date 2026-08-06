export type StoneType = "granit" | "marmar" | "travertin" | "keramogranit";

export type ColorFamily =
  | "qora"
  | "oq"
  | "kulrang"
  | "jigarrang"
  | "yashil"
  | "pushti"
  | "bej";

export interface StoneProject {
  image: string;
  caption: string;
}

export interface StoneSpecs {
  thickness: string;
  formats: string;
  application: string[];
  hardness: string;
  absorption: string;
}

export interface Stone {
  id: string;
  name: string;
  origin: string;
  type: StoneType;
  colorFamily: ColorFamily;
  finish: string[];
  description: string;
  specs: StoneSpecs;
  images: string[];
  projects: StoneProject[];
  featured: boolean;
}

export const TYPE_LABELS: Record<StoneType, string> = {
  granit: "Granit",
  marmar: "Marmar",
  travertin: "Travertin",
  keramogranit: "Keramogranit",
};

export const COLOR_LABELS: Record<ColorFamily, string> = {
  qora: "Qora",
  oq: "Oq",
  kulrang: "Kulrang",
  jigarrang: "Jigarrang",
  yashil: "Yashil",
  pushti: "Pushti",
  bej: "Bej",
};

export const STONES: Stone[] = [
  {
    id: "granit-galaxy",
    name: "Granit Galaxy",
    origin: "Hindiston",
    type: "granit",
    colorFamily: "qora",
    finish: ["polirovka"],
    description:
      "Qorong'i fonda mingdan ortiq mayda kumush zarrachalar — xuddi tungi osmondek. Yorug'lik ostida sirt jonlanib, chinakam \"galaktika\" effektini beradi. E'tiborni tortadigan aksent yuzalar uchun ideal.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "zinapoya", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/granit-galaxy.jpg"],
    projects: [],
    featured: true,
  },
  {
    id: "labradorid",
    name: "Labradorid",
    origin: "Ukraina",
    type: "granit",
    colorFamily: "kulrang",
    finish: ["polirovka"],
    description:
      "Labradorit — burchak o'zgarganda rangi tovlanadigan noyob tosh: kulrang-yashil fonda oltinsimon tomirlar va ko'k-kumush yaltiroqlik uyg'unlashgan. Har bir plita betakror naqshga ega. Interyerda diqqat markazi bo'lishga mo'ljallangan.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "zinapoya", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/labradorid.jpg"],
    projects: [],
    featured: true,
  },
  {
    id: "tan-brown",
    name: "Tan Brown",
    origin: "Hindiston",
    type: "granit",
    colorFamily: "jigarrang",
    finish: ["polirovka"],
    description:
      "Iliq jigarrang fonda mayda kulrang va oq donachalar bilan bezalgan mashhur hind granitlaridan biri. Har qanday yog'du ostida bir xil ko'rinishni saqlaydi. Pol va zinapoyalar uchun sinovdan o'tgan amaliy tanlov.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "zinapoya", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/tan-brown.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "absolute-black",
    name: "Absolute Black",
    origin: "Hindiston",
    type: "granit",
    colorFamily: "qora",
    finish: ["polirovka"],
    description:
      "Nomi o'ziga xos — bir tekis, chuqur qora tus, sayoz kumush chaqnashlar bilan. Har qanday interyerga qat'iylik va nafislik qo'shadi. Eng ko'p so'raladigan klassik ranglardan biri.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "zinapoya", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/absolute-black.jpg"],
    projects: [],
    featured: true,
  },
  {
    id: "angola-black",
    name: "Angola Black",
    origin: "Angola, Afrika",
    type: "granit",
    colorFamily: "qora",
    finish: ["polirovka"],
    description:
      "Afrikaning Angola mamlakatidan kelgan zich, bir hilda qora granit. Sirti mayin, deyarli baxmalsimon tuyuladi. Peshtaxta va fasad ishlarida o'zini yaxshi ko'rsatadi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/angola-black.jpg"],
    projects: [
      { image: "/assets/angola-black-obj-1.jpg", caption: "Darvoza va fasad peshtoqi, xususiy uy" },
      { image: "/assets/angola-black-obj-2.jpg", caption: "Fasad etagi (plinth), yaqindan" },
      { image: "/assets/angola-black-obj-3.jpg", caption: "Fasad, boshqa rakurs" },
    ],
    featured: false,
  },
  {
    id: "keramogranit-mikrokristallit",
    name: "Keramogranit Mikrokristallit",
    origin: "O'zbekiston",
    type: "keramogranit",
    colorFamily: "kulrang",
    finish: ["polirovka"],
    description:
      "Sun'iy yo'l bilan ishlab chiqarilgan, bir tekis kulrang tuzilishga ega zamonaviy plita. Tabiiy toshga qaraganda yengilroq va narxi maqbulroq. Katta yuzalarni bir xil ko'rinishda qoplash uchun qulay.",
    specs: {
      thickness: "10 mm",
      formats: "600×600, 600×1200",
      application: ["pol", "devor"],
      hardness: "8 Mos",
      absorption: "juda past",
    },
    images: ["/assets/keramogranit-mikrokristallit.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "marmar-raja-green",
    name: "Marmar Raja Green",
    origin: "Hindiston",
    type: "marmar",
    colorFamily: "yashil",
    finish: ["polirovka"],
    description:
      "To'q yashil fonda ingichka och tomirlar chizilgan hashamatli marmar. Ko'pincha diqqat markazidagi devor yoki peshtaxtalarda ishlatiladi. Har bir bo'lak o'z naqsh xarakteriga ega.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta", "fasad"],
      hardness: "3–4 Mos",
      absorption: "o'rta",
    },
    images: ["/assets/marmar-raja-green.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "granit-plitka-polirovka-a",
    name: "Granit Plitka Polirovka A",
    origin: "Qozog'iston",
    type: "granit",
    colorFamily: "oq",
    finish: ["polirovka"],
    description:
      "Och rangli fonda yirik kristall bo'laklar va oltinsimon tomirlar bilan ajralib turadigan yaltiratilgan granit plitka. Yorug' xonalarni yanada ochiq ko'rsatadi. Universal tanlov — deyarli har qanday uslubga mos keladi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "zinapoya", "peshtaxta"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/granit-plitka-polirovka-a.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "granit-plitka-suyuq-polirovka-a",
    name: "Granit Plitka Suyuq Polirovka A",
    origin: "Ukraina",
    type: "granit",
    colorFamily: "jigarrang",
    finish: ["suyuq polirovka"],
    description:
      "Chuqur \"suyuq\" yaltirash usulida ishlangan, iliq jigarrang-kulrang tusli granit. Sirt oyna kabi tekis va silliq. Peshtaxta va prestijli fasadlar uchun tavsiya etiladi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/granit-plitka-suyuq-polirovka-a.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "kuksaroy",
    name: "Kuksaroy",
    origin: "O'zbekiston",
    type: "granit",
    colorFamily: "kulrang",
    finish: ["polirovka"],
    description:
      "Kulrang-ko'kimtir tusdagi, mahalliy quruvchilar orasida tanilgan tosh. Sokin, betaraf ko'rinishi tufayli istalgan mebel yoki rang bilan uyg'unlashadi. Amaliy va uzoq muddatli xizmat qiladi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "zinapoya", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/kuksaroy.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "bolyasina",
    name: "Bolyasina",
    origin: "Ukraina",
    type: "marmar",
    colorFamily: "bej",
    finish: ["polirovka"],
    description:
      "Yumshoq bej fonda mayin oqim shaklidagi tomirlar bilan bezalgan iliq tusli marmar. Yorug' va issiq muhit yaratishga xizmat qiladi. Yotoqxona va mehmonxona interyerlarida yaxshi ko'rinadi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta"],
      hardness: "3–4 Mos",
      absorption: "o'rta",
    },
    images: ["/assets/bolyasina.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "kolotiy",
    name: "Kolotiy",
    origin: "Rossiya",
    type: "granit",
    colorFamily: "kulrang",
    finish: ["kolotiy", "termo"],
    description:
      "Nomidan ko'rinib turganidek, tabiiy \"yorilgan\" — notekis relyefli sirtga ega tosh, yumshoq oqim naqshlari bilan. Tashqi hovli va zinapoyalar uchun sirg'anishga chidamli tanlov. Har bir bo'lak o'ziga xos tabiiy relyefga ega.",
    specs: {
      thickness: "30 mm",
      formats: "plita, bordyur",
      application: ["hovli", "zinapoya", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/kolotiy.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "diamond-black",
    name: "Diamond Black",
    origin: "Hindiston",
    type: "granit",
    colorFamily: "qora",
    finish: ["polirovka"],
    description:
      "Qora fonda ingichka, olmosdek yaltiroq oq tomirlar chizilgan nafis tosh. Zamonaviy va hashamatli interyerlarda diqqatni tortadi. Kam uchraydigan, shu bois o'ziga xos tanlov.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/diamond-black.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "black-marmar",
    name: "Black Marmar",
    origin: "Ispaniya",
    type: "marmar",
    colorFamily: "qora",
    finish: ["polirovka"],
    description:
      "Klassik qora marmar — ingichka oq tomirlar bilan chizilgan, kontrastli va nafis ko'rinish. Tabiiy zahiralardan qazib olinadi. Hashamatli loyihalarda diqqat markazi bo'lib xizmat qiladi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta", "fasad"],
      hardness: "3–4 Mos",
      absorption: "o'rta",
    },
    images: ["/assets/black-marmar.jpg"],
    projects: [],
    featured: true,
  },
  {
    id: "zarband-marmar",
    name: "Zarband Marmar",
    origin: "Eron",
    type: "marmar",
    colorFamily: "jigarrang",
    finish: ["polirovka"],
    description:
      "To'q jigarrang fonda oltin-krem rangli tomirlari bilan boy ko'rinishga ega marmar. Nomi \"zarband\" — oltin bilan bog'langan degan ma'noni anglatadi. Kichik hajmdagi aksent yuzalar uchun ayniqsa yarashadi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta"],
      hardness: "3–4 Mos",
      absorption: "o'rta",
    },
    images: ["/assets/zarband-marmar.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "granit-rozoviy",
    name: "Granit Rozoviy",
    origin: "Ukraina",
    type: "granit",
    colorFamily: "pushti",
    finish: ["polirovka"],
    description:
      "Iliq pushti-qizg'ish fondagi, mayda qora va kulrang donachalar bilan jonlangan granit. Yorug' va samimiy muhit yaratadi. Fasad va tashqi bezaklarda o'zini namoyon qiladi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["fasad", "zinapoya"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/granit-rozoviy.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "granit-qorabog-navbahor",
    name: "Granit Qorabog' Navbahor",
    origin: "Ozarbayjon",
    type: "granit",
    colorFamily: "pushti",
    finish: ["polirovka"],
    description:
      "Qizil-qora ranglarning kuchli kontrastiga ega, xarakterli granit. Diqqatni tortadigan, jasur interyer yechimlari uchun mo'ljallangan. Kichik aksent devor yoki peshtaxtada ta'sirchan ko'rinadi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/granit-qorabog-navbahor.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "granit-aurora",
    name: "Granit Aurora",
    origin: "Finlyandiya",
    type: "granit",
    colorFamily: "kulrang",
    finish: ["polirovka"],
    description:
      "Kulrang-ko'k tusda, muzsimon yaltiroq kristallari bilan shimoliy chirog'ini eslatuvchi granit. Fin tabiiy tosh konlaridan yetkaziladi. Sokin, sovuq rang ohangidagi interyerlar uchun mos.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/granit-aurora.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "travertin-paxta-gul",
    name: "Travertin Paxta Gul",
    origin: "Qirg'iziston",
    type: "travertin",
    colorFamily: "bej",
    finish: ["silliqlangan"],
    description:
      "Yumshoq, bir tekis krem-bej rangli, tabiiy g'ovakli tuzilishga ega travertin. Nomi paxta gulidek nafis va och ko'rinishidan kelib chiqqan. Issiq, uy sharoitidagi muhit yaratishga yordam beradi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×400, 400×400, plita",
      application: ["pol", "fasad", "hovli"],
      hardness: "3–4 Mos",
      absorption: "o'rta-yuqori",
    },
    images: ["/assets/travertin-paxta-gul.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "travertin-ilon-gul",
    name: "Travertin Ilon Gul",
    origin: "Qirg'iziston",
    type: "travertin",
    colorFamily: "bej",
    finish: ["silliqlangan"],
    description:
      "Sirtida ilon terisiga o'xshash to'lqinsimon dog'lar aks etgan, tabiiy naqshli travertin. Har bir plita betakror tasvir hosil qiladi. Pol va fasad ishlarida ifodali urg'u beradi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×400, 400×400, plita",
      application: ["pol", "fasad"],
      hardness: "3–4 Mos",
      absorption: "o'rta-yuqori",
    },
    images: ["/assets/travertin-ilon-gul.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "travertin-dojdik-gul",
    name: "Travertin Dojdik Gul",
    origin: "Qirg'iziston",
    type: "travertin",
    colorFamily: "bej",
    finish: ["silliqlangan"],
    description:
      "Yomg'ir tomchilaridek oqib tushuvchi, oltinrang-krem chiziqlarga ega yumshoq travertin. Tabiiy va issiq uslubdagi loyihalarga mos keladi. Yorug'likda oqim chiziqlari yanada yorqin ko'rinadi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×400, 400×400, plita",
      application: ["pol", "fasad", "hovli"],
      hardness: "3–4 Mos",
      absorption: "o'rta-yuqori",
    },
    images: ["/assets/travertin-dojdik-gul.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "granit-butterfly",
    name: "Granit Butterfly",
    origin: "Braziliya",
    type: "granit",
    colorFamily: "jigarrang",
    finish: ["polirovka"],
    description:
      "Qizg'ish-qora rang oqimlari qanotsimon shakl hosil qilgan, dinamik naqshli granit. Har bir plita o'ziga xos \"qanot\" tasvirini beradi. Diqqatni tortadigan aksent devor yoki peshtaxta uchun ajoyib tanlov.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/granit-butterfly.jpg"],
    projects: [],
    featured: true,
  },
  {
    id: "granit-kapusta",
    name: "Granit Kapusta",
    origin: "Ukraina",
    type: "granit",
    colorFamily: "yashil",
    finish: ["polirovka"],
    description:
      "To'q yashil fonda karam bargiga o'xshash och tusli dog'lar joylashgan, betakror naqshli granit. Tabiatga yaqin, tinch rang uyg'unligi. Katta yuzalarda naqsh yanada ta'sirchan ko'rinadi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/granit-kapusta.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "komandor-black",
    name: "Komandor Black",
    origin: "Ukraina",
    type: "granit",
    colorFamily: "qora",
    finish: ["polirovka", "termo"],
    description:
      "Chuqur, bir tekis qora tusli granit — sirti mayin kul rang donachalar bilan uyg'unlashgan. Zamonaviy va klassik makonlarga bab-baravar mos keladi. Kundalik parvarishga chidamli, uzoq yillar rangini yo'qotmaydi.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "zinapoya", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/komandor-black.jpg"],
    projects: [],
    featured: false,
  },
  {
    id: "kont-black-koja",
    name: "Kont Black Koja",
    origin: "Hindiston",
    type: "granit",
    colorFamily: "qora",
    finish: ["polirovka"],
    description:
      "Qora fonda ingichka och rang tomirlari bilan ajralib turadigan nafis granit. Yorug'lik tushganda tomirlari yengil yaltiraydi, bu esa yuzaga chuqurlik beradi. Hashamatli, lekin ortiqcha shovqinli bo'lmagan tanlov.",
    specs: {
      thickness: "20 mm / 30 mm",
      formats: "600×300, 600×600, plita",
      application: ["pol", "peshtaxta", "fasad"],
      hardness: "6–7 Mos",
      absorption: "past",
    },
    images: ["/assets/kont-black-koja.jpg"],
    projects: [],
    featured: false,
  },
];
