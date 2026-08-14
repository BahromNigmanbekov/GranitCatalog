// Russian and English description overrides, keyed by stone id.
// The Uzbek text always comes straight from stones.json (the admin
// dashboard only ever edits that file, in Uzbek). If a stone id below is
// missing (e.g. a brand-new product added after this file was written),
// the app falls back to showing the Uzbek description for ru/en too,
// rather than a blank field.
export const DESCRIPTIONS_I18N: Record<string, { ru: string; en: string }> = {
  "granit-qorabog-navbahor": {
    ru: "Характерный гранит с ярким контрастом красно-чёрных тонов. Создан для смелых и запоминающихся интерьерных решений. Особенно эффектно смотрится на небольшой акцентной стене или столешнице.",
    en: "A distinctive granite with a bold contrast of red and black tones. Designed for striking, confident interior solutions. Looks especially impressive on a small accent wall or countertop.",
  },
  "granit-butterfly": {
    ru: "Aurora Granite — высококачественный природный гранит, отличающийся изысканным природным рисунком из серых, белых и чёрных оттенков. Благодаря прочности, долговечности и привлекательному внешнему виду широко используется во внутренней и внешней отделке. Высокая устойчивость к влаге, теплу, царапинам и погодным воздействиям делает его надёжным выбором для кухонных столешниц, напольных покрытий, лестниц, фасадов и памятников.",
    en: "Aurora Granite is a premium natural granite distinguished by its refined natural pattern of grey, white and black tones. Thanks to its strength, long service life and attractive appearance, it is widely used for both interior and exterior finishing. High resistance to moisture, heat, scratching and weathering makes it a reliable choice for kitchen countertops, flooring, staircases, façades and monuments.",
  },
  "gazgan-marble": {
    ru: "Gazgan Marble (светлый газганский мрамор) — мрамор бежевого оттенка, добываемый в Узбекистане. Обычно применяется для внутренней и внешней отделки, в качестве строительного и декоративного камня. Также известен под названиями «Гасган мрамор», «Гасган светлый», «Газган холодный».",
    en: "Gazgan Marble is a beige-toned marble quarried in Uzbekistan. It is commonly used for interior and exterior finishing, as building stone and decorative stone, among other applications. It is also known as Gasgan Marble, Gasgan Light, or Gazgan Cold.",
  },
  "gazgan-black-marble": {
    ru: "Gazgan Black Marble — чёрный мрамор, добываемый в Узбекистане. Может широко применяться для внутренней и внешней отделки, в качестве строительного и декоративного камня.",
    en: "Gazgan Black Marble is a black marble quarried in Uzbekistan. It can be widely used for interior and exterior finishing, as building stone and decorative stone.",
  },
  "r-black-granite": {
    ru: "R Black Granite — разновидность чёрного гранита, добываемого в Индии. Этот камень отлично подходит для наружной и внутренней облицовки стен и полов, памятников, столешниц, мозаики, фонтанов, отделки бассейнов и стен, лестниц, подоконников и других дизайнерских проектов. Также известен как индийский чёрный гранит или индийский Impala Black. R Black Granite может обрабатываться разными способами: полировка, распил, шлифовка, точечная обработка, пескоструйная обработка, состаривание и другие.",
    en: "R Black Granite is a type of black granite quarried in India. This stone is excellent for exterior and interior wall and floor cladding, monuments, countertops, mosaics, fountains, pool and wall surrounds, staircases, window sills and other design projects. It is also known as Indian Black Granite or Indian Impala Black. R Black Granite can be finished in various ways: polished, sawn, honed, flamed, sandblasted, tumbled and more.",
  },
  "absolute-black": {
    ru: "Самая примечательная особенность Absolute Black Granite — его ровный и однородный чёрный цвет. Камень обладает насыщенным, глубоким чёрным тоном без заметных вкраплений или прожилок. Эта однородность придаёт граниту особую элегантность и делает его прекрасным выбором для современных стилей дизайна.",
    en: "The most notable feature of Absolute Black Granite is its consistent, uniform black colour. It has a pure, deep black tone with no visible variation or veining. This uniformity gives the granite an elegant, refined look, making it an excellent choice for modern and contemporary design styles.",
  },
  "angola-black-granite": {
    ru: "Главная особенность Angola Black Granite — насыщенный, глубокий чёрный цвет. Тёмный фон добавляет любому пространству изысканности и элегантности, создавая смелый и выразительный образ. Однородная окраска делает этот гранит универсальным выбором, гармонично дополняющим как современные, так и классические стили дизайна.",
    en: "The defining feature of Angola Black Granite is its rich, deep black colour. The dark background adds a sense of elegance and refinement to any space, creating a bold and dramatic statement. Its consistent colouring makes it a versatile choice that complements both modern and traditional design styles.",
  },
  "black-diamond-granit": {
    ru: "Black Diamond Granite — изысканный природный гранит, отличающийся глубоким чёрным цветом и мелкими сверкающими кристаллическими вкраплениями. Его современный и роскошный вид широко используется во внутренней и внешней отделке жилых, офисных и коммерческих зданий. Полированная поверхность красиво отражает свет, придавая любому пространству особую элегантность.",
    en: "Black Diamond Granite is an elegant natural granite distinguished by its deep black colour and fine, sparkling crystalline flecks. Its modern, luxurious look is widely used in the interior and exterior decoration of residential, office and commercial buildings. The polished surface beautifully reflects light, lending an air of elegance to any space.",
  },
  "labradorite-granite": {
    ru: "Labradorite Granite обладает не только красивым внешним видом, но и такими преимуществами, как высокая прочность, устойчивость к царапинам, теплу и влаге. Он является идеальным выбором для кухонных столешниц, напольных покрытий, стеновых панелей, лестниц, интерьера ванных комнат и декоративных элементов. Полированная поверхность ещё ярче раскрывает природное сияние кристаллов.",
    en: "Labradorite Granite offers not only a beautiful appearance but also benefits such as high strength and resistance to scratching, heat and moisture. It is an ideal choice for kitchen countertops, flooring, wall panels, staircases, bathroom interiors and decorative elements. Its polished surface further enhances the natural brilliance of its crystals.",
  },
  "tan-brown": {
    ru: "Tan Brown Granite обладает высокой плотностью и отличной устойчивостью к царапинам, теплу, влаге и повседневному использованию. Полированная поверхность ярче раскрывает природные оттенки камня и сохраняет блеск на долгие годы. Благодаря этому он широко применяется для кухонных столешниц, напольных покрытий, лестниц, стеновых панелей и наружной облицовки фасадов.",
    en: "Tan Brown Granite has high density and excellent resistance to scratching, heat, moisture and everyday use. Its polished surface brings out the stone's natural colours more vividly and retains its shine for many years. This makes it widely used for kitchen countertops, flooring, staircases, wall panels and exterior façade work.",
  },
  "raja-green-marble": {
    ru: "На отполированной поверхности Raja Green Marble природные прожилки проявляются особенно ярко, придавая каждой плите неповторимый вид. Он широко используется в отделке стен, полов, лестниц, колонн, декоративных панелей, а также в интерьере ванных комнат и гостиных.",
    en: "On the polished surface of Raja Green Marble, the natural veining stands out vividly, giving each slab a unique look. It is widely used for wall cladding, flooring, staircases, columns, decorative panels, and bathroom and living room interiors.",
  },
  "himalaya-blue": {
    ru: "Этот гранит широко используется для кухонных столешниц, кухонных островов, лестниц, напольных покрытий, отделки стен, фасадов и других декоративных элементов. Благодаря уникальному природному рисунку каждая плита неповторима и придаёт роскошный вид как современным, так и классическим интерьерам.",
    en: "This granite is widely used for kitchen countertops, kitchen islands, staircases, flooring, wall decoration, façades and other decorative elements. Thanks to its unique natural pattern, every slab is one of a kind, lending a luxurious look to both modern and classic interiors.",
  },
  "kuksaroy-grey": {
    ru: "Kuksaroy Grey Granite отличается высокой устойчивостью к влаге, холоду, теплу, солнечному излучению и механическим воздействиям, благодаря чему широко применяется во внутренней и внешней отделке. Он выделяется долгим сроком службы, простым уходом и способностью сохранять естественный вид на протяжении многих лет.",
    en: "Kuksaroy Grey Granite offers high resistance to moisture, cold, heat, sunlight and mechanical impact, making it widely used for both interior and exterior finishing. It stands out for its long service life, easy maintenance and ability to keep its natural appearance for years.",
  },
  "korabog-granite": {
    ru: "Korabog Granite — отличный материал для облицовки фасадов, отделки полов и стен, лестниц, подоконников, колонн, парапетов, памятников и элементов ландшафтного дизайна. Его износостойкость, низкое водопоглощение и долгий срок службы делают его надёжным выбором для жилых домов, офисов, торговых центров и общественных зданий.",
    en: "Korabog Granite is an excellent material for façade cladding, floor and wall finishing, staircases, window sills, columns, parapets, monuments and landscaping elements. Its wear resistance, low water absorption and long service life make it a reliable choice for residential buildings, offices, shopping centres and public buildings.",
  },
  "navbahor-granite": {
    ru: "Navbahor Granite обладает высокой устойчивостью к погодным условиям, влаге и перепадам температур. Благодаря этому широко применяется как для внутренних, так и для наружных строительных работ. Является надёжным выбором для лестниц, облицовки фасадов, полов, дорожек, памятников, колонн, подоконников и элементов ландшафтного дизайна.",
    en: "Navbahor Granite is highly resistant to weathering, moisture and temperature swings. This makes it widely used for both interior and exterior construction work. It is a reliable choice for staircases, façade cladding, flooring, pathways, monuments, columns, window sills and landscaping elements.",
  },
  "suvliq-granit": {
    ru: "Suvliq Granit обладает высокой устойчивостью к износу, ударам, влаге и перепадам температур. Благодаря этому он сохраняет своё качество на протяжении многих лет даже в местах интенсивного использования, как внутри, так и снаружи. Полированная поверхность имеет изысканный блеск, а термически или шлифованно обработанные варианты обладают противоскользящими свойствами.",
    en: "Suvliq Granite is highly resistant to wear, impact, moisture and temperature changes. This allows it to retain its quality for many years even in heavily used interior and exterior areas. The polished finish has an elegant shine, while the flamed or honed finishes offer anti-slip properties.",
  },
  "zarband-marble-granit": {
    ru: "Благодаря высокой эстетической ценности отлично подходит для напольных покрытий, отделки стен, лестниц, подоконников, колонн, облицовки каминов, зон ресепшн и декоративных элементов интерьера. При правильном уходе сохраняет привлекательный вид на протяжении многих лет.",
    en: "Thanks to its high aesthetic value, it is an excellent choice for flooring, wall decoration, staircases, window sills, columns, fireplace surrounds, reception areas and decorative interior elements. With proper care, it retains its attractive appearance for many years.",
  },
  "new-force-granit": {
    ru: "Благодаря прочности и устойчивости к истиранию и повседневному использованию New Force Granite применяется в самых разных проектах внутреннего и внешнего дизайна. При полировке его природные цвета и рисунок раскрываются ярче и глубже.",
    en: "Thanks to its strength and resistance to abrasion and everyday use, New Force Granite is used in a wide range of interior and exterior design projects. When polished, its natural colours and pattern appear brighter and deeper.",
  },
  "mordosh-travertin-granit": {
    ru: "Mordosh Travertine Granite — декоративный облицовочный материал, отличающийся уникальной текстурой и природными оттенками натурального камня. На его поверхности сочетаются мягкие бежевые, кремовые и светло-коричневые тона, создавая естественный и спокойный образ.",
    en: "Mordosh Travertine Granite is a decorative cladding material distinguished by the unique texture and natural colours of the stone. Its surface blends soft beige, cream and light brown tones, creating a natural, calming look.",
  },
  "iran-limeston-travertin-granit": {
    ru: "Iran Limestone Travertine — природный известняк и травертин, добываемый в Иране, отличающийся натуральными бежевыми, кремовыми и светло-коричневыми оттенками, а также мягкой текстурой. Природные слои и мелкая минеральная структура на поверхности камня придают ему спокойный и изысканный вид.",
    en: "Iran Limestone Travertine is a natural limestone and travertine stone quarried in Iran, distinguished by its natural beige, cream and light brown tones and soft texture. The natural layering and fine mineral structure on the stone's surface give it a calm, refined look.",
  },
  "kont-black-granit": {
    ru: "Тёмный цвет камня придаёт интерьеру солидный, премиальный вид. Поверхность с обработкой Leathered мягко отражает свет, создавая более оригинальный образ по сравнению с обычным полированным чёрным гранитом. Особенность отделки Leathered — наличие на поверхности мелких природных углублений и текстуры.",
    en: "The stone's dark colour gives any interior a serious, premium look. Its leathered finish softly reflects light, creating a more distinctive character than ordinary polished black granite. What makes the leathered finish special is the fine natural texture and subtle surface indentations it retains.",
  },
  "onix-slab-granit": {
    ru: "Рисунок и распределение цвета каждой плиты естественным образом отличаются, поэтому каждая плита имеет неповторимый вид. Полированная поверхность ярче раскрывает природные цвета и слои камня.",
    en: "The pattern and colour distribution of each slab naturally differ, giving every slab its own unique look. The polished surface brings out the stone's natural colours and layering even more vividly.",
  },
  "forest-black-granit": {
    ru: "Forest Black Granite — гранит с глубоким чёрным фоном, отличающийся природными белыми, серыми и серебристыми минеральными узорами. Его контрастный рисунок придаёт камню современный и премиальный вид. Распределение узора и цвета на каждой плите естественным образом отличается.",
    en: "Forest Black Granite features a deep black base, distinguished by natural white, grey and silvery mineral patterns. Its bold contrasting pattern gives the stone a modern, premium look. The distribution of pattern and colour naturally varies from slab to slab.",
  },
  "galaxy-granit": {
    ru: "Galaxy Granite — премиальный природный гранит с глубоким чёрным фоном, на поверхности которого сверкают золотисто-жёлтые, а иногда и серебристые минеральные вкрапления. Благодаря мелким ярким минеральным частицам, напоминающим звёзды на ночном небе, он известен под названием Black Galaxy.\n\nЧёрный фон камня в сочетании с природным золотистым блеском придаёт ему роскошный, глубокий и современный вид. При полировке минеральные вкрапления проявляются ещё ярче. Размер и плотность вкраплений на каждой плите могут естественным образом отличаться.",
    en: "Galaxy Granite is a premium natural granite with a deep black base, its surface sparkling with golden-yellow and sometimes silvery mineral flecks. Thanks to these fine, bright mineral specks resembling stars in a night sky, it is popularly known as Black Galaxy.\n\nThe stone's black background combined with its natural golden shimmer gives it a luxurious, deep and modern look. When polished, the mineral flecks stand out even more vividly. The size and density of the flecks may naturally vary from slab to slab.",
  },
  "tanbrown-black-slab": {
    ru: "Tan Brown Black Slab — разновидность природного гранита, отличающаяся гармоничным сочетанием коричневых, чёрных тонов и мелких золотистых кристаллов. Его плотная и прочная структура, красивая природная текстура и высокая износостойкость делают его подходящим материалом как для современных, так и для классических интерьеров.",
    en: "Tan Brown Black Slab is a type of natural granite distinguished by a harmonious blend of brown and black tones with fine golden crystal flecks. Its dense, sturdy structure, attractive natural texture and high durability make it a suitable material for both modern and classic interiors.",
  },
  "gazgon-tabiiy-korkasi": {
    ru: "G'azg'on Tabiiy Ko'rkasi («Природная красота Газгана») — натуральный камень, добываемый в знаменитом узбекском регионе Газган. Он отличается гармоничным сочетанием природных цветов, мягкой минеральной текстурой и особым рисунком. Естественные слои и плавные цветовые переходы на поверхности камня придают ему изысканный и природный вид.",
    en: "G'azg'on Tabiiy Ko'rkasi (\"Natural Beauty of Gazgan\") is a natural stone quarried in Uzbekistan's renowned Gazgan region. It stands out for its harmonious natural colour blend, soft mineral texture and distinctive pattern. The natural layering and smooth colour transitions on the stone's surface give it a refined, natural appearance.",
  },
};
