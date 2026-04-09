const { useEffect, useMemo, useState } = React;

const CATALOG = [
  {
    id: "protein",
    title: "Proteínové snacky",
    highlight: "low sugar",
    products: [
      {
        id: "protein-bar",
        name: "FitFuel Protein Bar",
        description: "Tyčinka s vysokým obsahom bielkovín na rýchle doplnenie energie po tréningu.",
        price: 2.5,
        image: "images/FitFuelProteinBar.jpg",
      },
      {
        id: "protein-cookies",
        name: "Protein Cookies",
        description: "Chrumkavé cookies s proteínom, keď chceš sladké bez zbytočného cukru.",
        price: 2.0,
        image: "images/ProteinCookies.webp",
      },
      {
        id: "protein-brownie",
        name: "Protein Brownie",
        description: "Šťavnaté brownie s proteínom ako fit dezert do práce aj po tréningu.",
        price: 2.8,
        image: "images/ProteinBrownie.webp",
      },
      {
        id: "protein-muffin",
        name: "Protein Muffin",
        description: "Mäkký muffin s vyšším podielom bielkovín na sýtu desiatu.",
        price: 2.5,
        image: "images/ProteinMuffin.webp",
      },
      {
        id: "protein-waffles",
        name: "Protein Waffles",
        description: "Proteínové wafle pripravené na rýchly snack bez zdĺhavej prípravy.",
        price: 3.0,
        image: "images/ProteinWaffles.png",
      },
    ],
  },
  {
    id: "breakfast",
    title: "Raňajky / Meals",
    highlight: "Rýchla príprava a stabilná energia",
    products: [
      {
        id: "protein-oatmeal",
        name: "Protein Oatmeal (instantná kaša)",
        description: "Instantná kaša s proteínom na teplé raňajky za pár minút.",
        price: 2.2,
        image: "images/ProteinOatmeal-instantna-kasa.png",
      },
      {
        id: "protein-granola",
        name: "Protein Granola",
        description: "Chrumkavá granola s bielkovinami, vhodná s jogurtom aj samostatne.",
        price: 4.5,
        image: "images/ProteinGranola.png",
      },
      {
        id: "overnight-oats",
        name: "Overnight Oats (ready)",
        description: "Hotové overnight oats na okamžité raňajky bez varenia.",
        price: 3.5,
        image: "images/OvernightOats(ready).webp",
      },
      {
        id: "pancake-mix",
        name: "Fitness Pancake Mix",
        description: "Zmes na fitness palacinky s vyšším obsahom proteínu a jednoduchou prípravou.",
        price: 5.9,
        image: "images/FitnessPancakeMix.webp",
      },
    ],
  },
  {
    id: "drinks",
    title: "Nápoje",
    highlight: "Hydratácia, výkon a low kcal voľby",
    products: [
      {
        id: "protein-shake",
        name: "Protein Shake (ready-to-drink)",
        description: "Ready-to-drink shake na doplnenie bielkovín počas dňa.",
        price: 3.0,
        image: "images/ProteinShake(ready-to-drink).webp",
      },
      {
        id: "smoothie",
        name: "Smoothie (low kcal)",
        description: "Ovocné smoothie s nižšou kalorickou hodnotou pre ľahké osvieženie.",
        price: 2.8,
        image: "images/Smoothie(low kcal).jpg",
      },
      {
        id: "energy-drink",
        name: "Zero sugar energy drink",
        description: "Energetický nápoj bez cukru na sústredenie pred tréningom alebo prácou.",
        price: 2.0,
        image: "images/Zerosugarenergydrink.webp",
      },
      {
        id: "electrolyte-drink",
        name: "Electrolyte drink",
        description: "Nápoj s elektrolytmi na lepšiu hydratáciu počas výkonu.",
        price: 1.8,
        image: "images/Electrolytedrink.jpg",
      },
    ],
  },
  {
    id: "supplements",
    title: "Zdravé doplnky",
    highlight: "Chuť bez výčitiek",
    products: [
      {
        id: "protein-peanut-butter",
        name: "Protein Peanut Butter",
        description: "Arašidové maslo s proteínom vhodné do kaše, smoothie aj na toast.",
        price: 4.9,
        image: "images/ProteinPeanutButter.jpg",
      },
      {
        id: "protein-choco-spread",
        name: "Protein Chocolate Spread",
        description: "Čokoládová nátierka s bielkovinami, keď chceš sladké vo fit verzii.",
        price: 5.5,
        image: "images/ProteinChocolateSpread.jpg",
      },
      {
        id: "fitness-nuts-mix",
        name: "Mix orechov (fitness snack)",
        description: "Praktický orechový mix na rýchly snack medzi jedlami.",
        price: 3.5,
        image: "images/Mixorechov(fitness snack).jpg",
      },
      {
        id: "low-cal-sauces",
        name: "Low-calorie sauces (čokoláda, karamel)",
        description: "Nízkokalorické omáčky na dochutenie jedál bez zbytočných kalórií.",
        price: 3.0,
        image: "images/Low-calorie-sauces-cokolada-karamel.webp",
      },
    ],
  },
];

const FAQ = [
  {
    q: "Čo je FitFuel?",
    a: [
      "FitFuel je značka zameraná na zdravý životný štýl, ktorá ponúka funkčné potraviny a snacky navrhnuté pre aktívnych ľudí. Naším cieľom je prinášať chutné a nutrične vyvážené riešenia pre každodenný život.",
    ],
  },
  {
    q: "Pre koho sú produkty FitFuel určené?",
    a: [
      "Naše produkty sú ideálne pre každého, kto cvičí alebo športuje, chce jesť zdravšie, nemá čas na prípravu jedla alebo hľadá rýchle a kvalitné snacky.",
    ],
  },
  {
    q: "Sú vaše produkty vhodné aj do diéty?",
    a: [
      "Áno. Produkty FitFuel sú navrhnuté tak, aby podporovali rôzne ciele, ako je redukcia váhy, naberanie svalov aj udržanie formy. Dbáme na vyvážené makrá a kvalitné zloženie.",
    ],
  },
  {
    q: "Obsahujú vaše produkty cukor?",
    a: [
      "Snažíme sa minimalizovať pridaný cukor a používame kvalitné suroviny. Konkrétne zloženie sa líši podľa produktu, všetky informácie sú uvedené pri jednotlivých produktoch.",
    ],
  },
  {
    q: "Ako prebieha doručenie?",
    a: [
      "Objednávky spracovávame čo najrýchlejšie. Doručenie zvyčajne trvá 1 až 3 pracovné dni v závislosti od lokality.",
    ],
  },
  {
    q: "Môžem si objednávku vyzdvihnúť osobne?",
    a: [
      "V závislosti od dostupnosti ponúkame aj možnosť osobného odberu alebo nákupu na vybraných eventoch.",
    ],
  },
  {
    q: "Predávate aj na eventoch alebo festivaloch?",
    a: [
      "Áno, FitFuel sa pravidelne zúčastňuje rôznych fitness eventov, festivalov a športových podujatí, kde si zákazníci môžu produkty vyskúšať priamo na mieste.",
    ],
  },
  {
    q: "Kde vás môžem sledovať?",
    a: [
      "FitFuel môžete sledovať na sociálnych sieťach, kde pravidelne zdieľame novinky, tipy na stravovanie a fitness obsah.",
    ],
  },
];

const BLOG_POSTS = [
  {
    date: "15.03.2026",
    title: "FitFuel na evente: energia, výkon a zdravé snacky v akcii!",
    paragraphs: [
      "Na jednom z najväčších fitness eventov sme mali možnosť predstaviť FitFuel priamo ľuďom, ktorí žijú aktívnym životným štýlom. Návštevníci si mohli vyskúšať naše produkty, ochutnať healthy snacky a zažiť, ako chutí funkčná výživa v praxi.",
      "Ukázali sme, že aj na evente sa dá jesť kvalitne, chutne a bez kompromisov. FitFuel priniesol energiu, výkon a nový pohľad na stravovanie v pohybe.",
    ],
  },
  {
    date: "10.03.2026",
    title: "Funkčné potraviny vo fitness: základ výkonu a regenerácie",
    paragraphs: [
      "Ak chceš z tréningu vyťažiť maximum, nestačí len makať – dôležité je aj to, čo ješ. Funkčné potraviny zohrávajú kľúčovú úlohu pri podpore výkonu, regenerácie a celkovej vitality.",
      "Správne zvolené jedlo dokáže doplniť energiu, podporiť rast svalov a urýchliť regeneráciu po náročnom tréningu. FitFuel prináša riešenia, ktoré sú rýchle, efektívne a prispôsobené modernému životnému štýlu.",
    ],
  },
  {
    date: "05.03.2026",
    title: "Rýchle a zdravé stravovanie: ako to zvládnuť každý deň",
    paragraphs: [
      "V dnešnom rýchlom svete často nemáme čas pripravovať si plnohodnotné jedlá. To však neznamená, že sa musíš vzdať kvalitnej stravy.",
      "FitFuel ukazuje, že aj rýchle jedlo môže byť nutrične hodnotné a chutné. Stačí mať po ruke správne produkty, ktoré ti dodajú energiu počas dňa, podporia výkon a pomôžu ti držať sa svojich cieľov bez zbytočného stresu.",
    ],
  },
];

const PRODUCT_META = {
  "protein-bar": {
    serving: "1 tyčinka (60 g)",
    detail:
      "Vysokoproteínová tyčinka na rýchlu desiatu pred tréningom aj po ňom, ktorá zasýti bez ťažkého pocitu.",
    nutrition: { calories: 210, protein: 20, carbs: 18, fat: 7, sugar: 2 },
  },
  "protein-cookies": {
    serving: "1 balenie (55 g)",
    detail: "Proteínové cookies pre chuť na sladké, keď chceš mať makrá stále pod kontrolou.",
    nutrition: { calories: 195, protein: 15, carbs: 17, fat: 8, sugar: 3 },
  },
  "protein-brownie": {
    serving: "1 brownie (70 g)",
    detail: "Šťavnaté brownie s vyšším podielom bielkovín ako fit dezert po tréningu alebo do práce.",
    nutrition: { calories: 240, protein: 23, carbs: 22, fat: 9, sugar: 4 },
  },
  "protein-muffin": {
    serving: "1 muffin (50 g)",
    detail: "Mäkký proteínový muffin na sýtu desiatu, ktorá podporí regeneráciu počas dňa.",
    nutrition: { calories: 230, protein: 13, carbs: 24, fat: 8, sugar: 5 },
  },
  "protein-waffles": {
    serving: "1 balenie (350 g)",
    detail: "Praktické proteínové wafle s vyváženým pomerom makier na rýchly snack bez prípravy.",
    nutrition: { calories: 260, protein: 33, carbs: 57, fat: 20, sugar: 9 },
  },
  "protein-oatmeal": {
    serving: "1 porcia (65 g)",
    detail: "Instantná ovsená kaša s proteínom na teplé raňajky pripravené za pár minút.",
    nutrition: { calories: 250, protein: 18, carbs: 30, fat: 6, sugar: 3 },
  },
  "protein-granola": {
    serving: "1 porcia (60 g)",
    detail: "Chrumkavá granola bohatá na bielkoviny, ideálna s jogurtom alebo ako snack počas dňa.",
    nutrition: { calories: 280, protein: 14, carbs: 32, fat: 10, sugar: 6 },
  },
  "overnight-oats": {
    serving: "1 kelímok (180 g)",
    detail: "Hotové overnight oats s vyváženým profilom makier, keď potrebuješ raňajky okamžite.",
    nutrition: { calories: 290, protein: 16, carbs: 34, fat: 9, sugar: 7 },
  },
  "pancake-mix": {
    serving: "1 porcia (70 g zmesi)",
    detail: "Fitness pancake mix pre rýchle palacinky s vyšším obsahom bielkovín a nižším cukrom.",
    nutrition: { calories: 220, protein: 20, carbs: 23, fat: 5, sugar: 2 },
  },
  "protein-shake": {
    serving: "1 fľaša (330 ml)",
    detail: "Ready-to-drink protein shake pre pohodlné doplnenie bielkovín po tréningu aj na cestách.",
    nutrition: { calories: 190, protein: 25, carbs: 9, fat: 4, sugar: 6 },
  },
  smoothie: {
    serving: "1 fľaša (300 ml)",
    detail: "Ľahké low-kcal smoothie na osvieženie a rýchly príjem energie medzi jedlami.",
    nutrition: { calories: 130, protein: 6, carbs: 18, fat: 2, sugar: 12 },
  },
  "energy-drink": {
    serving: "1 plechovka (250 ml)",
    detail: "Zero sugar energy drink na podporu sústredenia pred tréningom alebo náročným dňom.",
    nutrition: { calories: 15, protein: 0, carbs: 3, fat: 0, sugar: 0 },
  },
  "electrolyte-drink": {
    serving: "1 fľaša (500 ml)",
    detail: "Elektrolytický nápoj pre lepšiu hydratáciu a obnovu minerálov pri fyzickom výkone.",
    nutrition: { calories: 25, protein: 0, carbs: 6, fat: 0, sugar: 4 },
  },
  "protein-peanut-butter": {
    serving: "1 porcia (30 g)",
    detail: "Arašidové maslo obohatené o proteín vhodné do kaše, smoothie alebo na toast.",
    nutrition: { calories: 210, protein: 14, carbs: 8, fat: 14, sugar: 3 },
  },
  "protein-choco-spread": {
    serving: "1 porcia (30 g)",
    detail: "Čokoládová nátierka s bielkovinami ako fit alternatíva klasických sladkých nátierok.",
    nutrition: { calories: 180, protein: 9, carbs: 16, fat: 9, sugar: 7 },
  },
  "fitness-nuts-mix": {
    serving: "1 balenie (50 g)",
    detail: "Mix orechov pre stabilnú energiu, zdravé tuky a rýchly snack počas dňa.",
    nutrition: { calories: 230, protein: 8, carbs: 10, fat: 18, sugar: 2 },
  },
  "low-cal-sauces": {
    serving: "1 porcia (20 ml)",
    detail: "Nízkokalorické omáčky na dochutenie kaší, palaciniek a dezertov bez zbytočných kalórií.",
    nutrition: { calories: 35, protein: 1, carbs: 4, fat: 1, sugar: 0 },
  },
};

const euro = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});
const IMAGE_VERSION = "20260404-1";
const withImageVersion = (path) => `${path}?v=${IMAGE_VERSION}`;

const SHIPPING_HOME_PRICE = 5;

const initialCheckoutContact = {
  fullName: "",
  street: "",
  city: "",
  zip: "",
  country: "Slovensko",
  email: "",
  phone: "",
  companyPurchase: false,
  companyName: "",
  ico: "",
  dic: "",
  differentAddress: false,
  deliveryStreet: "",
  deliveryCity: "",
  deliveryZip: "",
  deliveryCountry: "Slovensko",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidSkPhone(value) {
  const s = value.replace(/\s/g, "");
  return /^(\+421[1-9]\d{8}|0[1-9]\d{8})$/.test(s);
}

function isValidSkZip(value) {
  return /^\d{3}\s?\d{2}$/.test(value.trim());
}

function validateCheckoutContact(f) {
  const errors = {};

  const nameParts = f.fullName.trim().split(/\s+/).filter(Boolean);
  if (nameParts.length < 2) {
    errors.fullName =
      "Zadajte meno a priezvisko oddelené medzerou (napr. Ján Novák). Obidve časti aspoň 3 znaky.";
  } else if (nameParts[0].length < 3 || nameParts[nameParts.length - 1].length < 3) {
    errors.fullName = "Meno aj priezvisko musia mať aspoň 3 znaky.";
  }

  const em = f.email.trim();
  if (!em) {
    errors.email = "Vyplňte e-mail.";
  } else if (!EMAIL_RE.test(em)) {
    errors.email = "E-mail musí obsahovať zavináč a doménu (napr. meno@firma.sk).";
  }

  if (!f.phone.trim()) {
    errors.phone = "Vyplňte telefónne číslo.";
  } else if (!isValidSkPhone(f.phone)) {
    errors.phone = "Použite formát +421 911 123 456 alebo 0911 123 456 (9 číslic po kóde krajiny).";
  }

  if (f.street.trim().length < 3) {
    errors.street = "Ulica a číslo musia mať aspoň 3 znaky.";
  }

  if (f.city.trim().length < 2) {
    errors.city = "Zadajte mesto (aspoň 2 znaky).";
  }

  if (!isValidSkZip(f.zip)) {
    errors.zip = "PSČ musí mať 5 číslic vo formáte 949 01 alebo 94901.";
  }

  if (f.companyPurchase) {
    if (f.companyName.trim().length < 3) {
      errors.companyName = "Názov firmy musí mať aspoň 3 znaky.";
    }
    const icoClean = f.ico.replace(/\s/g, "");
    if (!/^\d{8}$/.test(icoClean)) {
      errors.ico = "IČO musí obsahovať presne 8 číslic.";
    }
    const dicClean = f.dic.replace(/\s/g, "");
    if (dicClean && !/^\d{10}$/.test(dicClean)) {
      errors.dic = "DIČ zadajte ako 10 číslic alebo pole nechajte prázdne.";
    }
  }

  if (f.differentAddress) {
    if (f.deliveryStreet.trim().length < 3) {
      errors.deliveryStreet = "Dodacia ulica musí mať aspoň 3 znaky.";
    }
    if (f.deliveryCity.trim().length < 2) {
      errors.deliveryCity = "Zadajte mesto doručenia.";
    }
    if (!isValidSkZip(f.deliveryZip)) {
      errors.deliveryZip = "PSČ musí mať 5 číslic (napr. 811 01).";
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const [activeProductId, setActiveProductId] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [contactForm, setContactForm] = useState(() => ({ ...initialCheckoutContact }));
  const [shippingMethod, setShippingMethod] = useState("home");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [contactTriedSubmit, setContactTriedSubmit] = useState(false);

  const allProducts = useMemo(
    () =>
      CATALOG.flatMap((group) =>
        group.products.map((product) => {
          const meta = PRODUCT_META[product.id];
          return {
            ...product,
            categoryId: group.id,
            categoryTitle: group.title,
            serving: meta?.serving || "1 porcia",
            detail: meta?.detail || product.description,
            nutrition: meta?.nutrition || {
              calories: 0,
              protein: 0,
              carbs: 0,
              fat: 0,
              sugar: 0,
            },
          };
        })
      ),
    []
  );

  const productMap = useMemo(() => {
    const map = new Map();
    allProducts.forEach((product) => map.set(product.id, product));
    return map;
  }, [allProducts]);

  const visibleCategories =
    activeCategory === "all" ? CATALOG : CATALOG.filter((group) => group.id === activeCategory);

  const cartItems = useMemo(
    () =>
      Object.entries(cart).map(([id, qty]) => {
        const product = productMap.get(id);
        return {
          ...product,
          qty,
          lineTotal: product.price * qty,
        };
      }),
    [cart, productMap]
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const shippingPrice = shippingMethod === "home" ? SHIPPING_HOME_PRICE : 0;
  const orderTotal = cartTotal + shippingPrice;
  const selectedProduct = activeProductId ? productMap.get(activeProductId) : null;

  useEffect(() => {
    if (!activeProductId) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProductId(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProductId]);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const addFromModal = (id) => {
    addToCart(id);
    setActiveProductId(null);
  };

  const changeQty = (id, delta) => {
    setCart((prev) => {
      const next = (prev[id] || 0) + delta;
      const draft = { ...prev };
      if (next <= 0) {
        delete draft[id];
      } else {
        draft[id] = next;
      }
      return draft;
    });
  };

  const openCheckout = () => {
    if (!cartCount) return;
    setCheckoutStep(1);
    setTermsAccepted(false);
    setContactForm({ ...initialCheckoutContact });
    setShippingMethod("home");
    setPaymentMethod("cod");
    setContactTriedSubmit(false);
    setCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
    setCheckoutStep(1);
    setTermsAccepted(false);
    setContactTriedSubmit(false);
  };

  useEffect(() => {
    if (!checkoutOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        closeCheckout();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [checkoutOpen]);

  const contactValidation = useMemo(() => validateCheckoutContact(contactForm), [contactForm]);

  const submitOrder = () => {
    if (!cartCount || !termsAccepted) return;
    const orderCode = Math.floor(Math.random() * 9000) + 1000;
    window.alert(`Objednávka #${orderCode} bola odoslaná. Ďakujeme za nákup vo FitFuel.`);
    setCart({});
    closeCheckout();
  };

  const scrollToProducts = () => {
    document.getElementById("produkty")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">FitFuel</span>
          <span className="brand-slogan">Clean energy for your performance</span>
        </div>
        <nav className="main-nav" aria-label="Hlavná navigácia">
          <a href="#domov">Domov</a>
          <a href="#produkty">Produkty</a>
          <a href="#onas">O nás</a>
          <a href="#blog">Blog</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
          <a href="#obchodne-podmienky">Obchodné podmienky</a>
          <a href="#ochrana-udajov">Ochrana údajov</a>
        </nav>
        <a className="cart-pill" href="#produkty" aria-label="Prejsť na košík">
          Košík {cartCount}
        </a>
      </header>

      <main>
        <section id="domov" className="hero">
          <div className="hero-copy reveal rise-1">
            <p className="hero-kicker">FitFuel</p>
            <h1>Zdravé snacky pre maximálny výkon</h1>
            <p>
              FitFuel prináša rýchle, chutné a nutrične vyvážené snacky pre ľudí, ktorí chcú lepší výkon,
              lepšiu postavu a lepšie zdravie bez zdĺhavej prípravy jedla.
            </p>
            <div className="hero-chips">
              <span>Rýchla energia</span>
              <span>Vyvážené makrá</span>
              <span>Do práce aj fitka</span>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToProducts}>
                Nakúpiť teraz
              </button>
              <a className="btn btn-ghost" href="#onas">
                Zisti viac
              </a>
            </div>
          </div>
          <div className="hero-panel reveal rise-2">
            <p className="panel-kicker">Pre aktívny životný štýl</p>
            <h2>Palivo na tréning aj pracovný deň</h2>
            <ul>
              <li>Rýchle snacky pripravené na okamžitú konzumáciu</li>
              <li>Vyvážené makrá pre kontrolu kalórií aj výkon</li>
              <li>Chuť, ktorú zvládneš zaradiť do každodennej rutiny</li>
            </ul>
            <div className="hero-stats">
              <div>
                <strong>4 kategórie</strong>
                <span>snacky, raňajky, nápoje, doplnky</span>
              </div>
              <div>
                <strong>Ready to eat</strong>
                <span>rýchle riešenie bez varenia</span>
              </div>
              <div>
                <strong>1–3 dni</strong>
                <span>štandardné doručenie</span>
              </div>
            </div>
          </div>
        </section>

        <section id="produkty" className="section">
          <div className="section-head">
            <p className="section-kicker">E-shop</p>
            <h2>Produkty</h2>
            <p>Vyber si podľa cieľa: rýchla energia, lepšia regenerácia alebo praktické jedlo do práce.</p>
          </div>

          <div className="category-filter">
            <button
              className={activeCategory === "all" ? "active" : ""}
              onClick={() => setActiveCategory("all")}
            >
              Všetko
            </button>
            {CATALOG.map((group) => (
              <button
                key={group.id}
                className={activeCategory === group.id ? "active" : ""}
                onClick={() => setActiveCategory(group.id)}
              >
                {group.title}
              </button>
            ))}
          </div>

          <div className="catalog-layout">
            <div className="catalog-groups">
              {visibleCategories.map((group) => (
                <article className="product-group" key={group.id}>
                  <div className="group-head">
                    <h3>{group.title}</h3>
                    <span>{group.highlight}</span>
                  </div>
                  <div className="product-grid">
                    {group.products.map((product, index) => (
                      <div
                        className="product-card reveal"
                        key={product.id}
                        style={{ animationDelay: `${index * 70}ms` }}
                        role="button"
                        tabIndex={0}
                        onClick={() => setActiveProductId(product.id)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setActiveProductId(product.id);
                          }
                        }}
                        aria-label={`Zobraziť detail produktu ${product.name}`}
                      >
                        <div className="product-media">
                          <img src={withImageVersion(product.image)} alt={product.name} loading="lazy" decoding="async" />
                        </div>
                        <span className="product-tag">{group.title}</span>
                        <p className="product-name">{product.name}</p>
                        <p className="product-description">{product.description}</p>
                        <div className="product-row">
                          <strong>{euro.format(product.price)}</strong>
                          <button
                            className="btn btn-small"
                            onClick={(event) => {
                              event.stopPropagation();
                              addToCart(product.id);
                            }}
                            onKeyDown={(event) => event.stopPropagation()}
                          >
                            Pridať
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-box" aria-label="Košík">
              <div className="cart-head">
                <h3>Košík</h3>
                <span>{cartCount} ks</span>
              </div>
              {cartItems.length === 0 ? (
                <p className="cart-empty">Košík je prázdny. Pridaj si prvý produkt.</p>
              ) : (
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div>
                        <p>{item.name}</p>
                        <small>{euro.format(item.lineTotal)}</small>
                      </div>
                      <div className="qty">
                        <button onClick={() => changeQty(item.id, -1)} aria-label="Znížiť množstvo">
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button onClick={() => changeQty(item.id, 1)} aria-label="Zvýšiť množstvo">
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="cart-foot">
                <p>
                  Spolu <strong>{euro.format(cartTotal)}</strong>
                </p>
                <button className="btn btn-primary" disabled={!cartCount} onClick={openCheckout}>
                  Dokončiť objednávku
                </button>
                <small>Doručenie zvyčajne 1 až 3 pracovné dni.</small>
              </div>
            </aside>
          </div>
        </section>

        <section id="onas" className="section">
          <article className="about-card">
            <h2>O nás</h2>
            <h3>Prečo FitFuel?</h3>
            <p>
              Myšlienka FitFuel vznikla z presvedčenia, že zdravý životný štýl nemusí byť komplikovaný ani
              nudný. V dnešnom rýchlom svete je často náročné nájsť kvalitné, chutné a nutrične vyvážené
              jedlo, ktoré podporuje výkon aj regeneráciu.
            </p>
            <p>
              Preto sme sa rozhodli vytvoriť FitFuel – značku, ktorá prináša funkčné, chutné a dostupné
              riešenia pre každého, kto chce žiť aktívne a zdravo.
            </p>
            <h3>Nie sme len o jedle</h3>
            <p>
              FitFuel nie je len o produktoch. Je to komunita ľudí, ktorí na sebe pracujú, chcú sa cítiť
              lepšie a posúvať svoje limity.
            </p>
          </article>
        </section>

        <section id="blog" className="section">
          <div className="section-head">
            <p className="section-kicker">Novinky</p>
            <h2>Blog</h2>
            <p>Články z FitFuel sveta – eventy, výživa a tipy na každý deň.</p>
          </div>
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article className="blog-card" key={post.title}>
                <time dateTime={post.date.split(".").reverse().join("-")}>{post.date}</time>
                <h3>{post.title}</h3>
                {post.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section">
          <div className="section-head">
            <h2>FAQ</h2>
          </div>
          <div className="faq-list">
            {FAQ.map((item, index) => (
              <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={item.q}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{item.q}</button>
                <div className="faq-answer">
                  {(Array.isArray(item.a) ? item.a : [item.a]).map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="kontakt" className="section contact">
          <div className="contact-inner">
            <div className="contact-intro">
              <h2>Kontakt</h2>
              <p>
                Napíš nám alebo nás sleduj na sociálnych sieťach – radi poradíme s výberom produktov alebo
                objednávkou.
              </p>
            </div>
            <dl className="contact-grid">
              <div className="contact-row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:fitfuel@gmail.com">fitfuel@gmail.com</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Instagram</dt>
                <dd>
                  <a href="https://instagram.com/fitfuel.sk" target="_blank" rel="noreferrer">
                    fitfuel.sk
                  </a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Telefón</dt>
                <dd>
                  <a href="tel:+421911123456">+421 911 123 456</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Adresa sídla</dt>
                <dd>Kmeťkova 27, 949 01 Nitra</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="obchodne-podmienky" className="section">
          <div className="legal-section">
            <h2>Obchodné podmienky</h2>
            <p className="legal-warning">
              Tento text slúži ako vzorová súčasť školského projektu internetového obchodu FitFuel. Nie je právne
              záväzný ani kompletný v zmysle osobitných predpisov; pri reálnom podnikaní je potrebné vypracovať podmienky
              s odborníkom a prispôsobiť ich prevádzke.
            </p>
            <p>
              <strong>Účinnosť:</strong> 01.03.2026
            </p>

            <h3>1. Základné ustanovenia</h3>
            <ol>
              <li>
                Tieto obchodné podmienky (ďalej len „OP“) upravujú práva a povinnosti predávajúceho a kupujúceho pri
                kúpe tovaru prostredníctvom internetového obchodu FitFuel (ďalej len „e-shop“).
              </li>
              <li>
                Predávajúcim je: FitFuel, IČO: .........., so sídlom Kmeťkova 27, 949 01 Nitra, Slovenská republika
                (ďalej len „predávajúci“).
              </li>
              <li>
                Kupujúcim je fyzická alebo právnická osoba, ktorá odošle objednávku cez e-shop. Ak ide o spotrebiteľa v
                zmysle zákona č. 250/2007 Z. z., vzťahuje sa na neho ochrana podľa príslušných predpisov.
              </li>
              <li>
                Zaslaním objednávky kupujúci potvrdzuje, že sa oboznámil s týmito OP a že s nimi súhlasí.
              </li>
            </ol>

            <h3>2. Objednávka a uzatvorenie kúpnej zmluvy</h3>
            <ol>
              <li>
                Objednávku je možné uskutočniť prostredníctvom nákupného košíka v e-shope. Údaje uvedené v objednávke sú
                predávajúcim považované za správne.
              </li>
              <li>
                Kúpna zmluva medzi predávajúcim a kupujúcim vzniká odoslaním objednávky kupujúcim a jej prijatím
                predávajúcim. Predávajúci potvrdí prijatie objednávky elektronicky na uvedený e-mail, ak to technické
                možnosti umožňujú.
              </li>
              <li>
                Predávajúci je oprávnený odmietnuť objednávku najmä pri nedostupnosti tovaru, zjavnej chybe v cene alebo
                pri podozrení z omylu či zneužitia.
              </li>
            </ol>

            <h3>3. Cena a platobné podmienky</h3>
            <ol>
              <li>
                Ceny tovaru sú uvedené v e-shope v eurách s DPH, ak sa na tovar vzťahuje, a sú platné v čase odoslania
                objednávky.
              </li>
              <li>
                K cene tovaru sa môže pripočítať doprava podľa zvoleného spôsobu doručenia uvedeného v objednávkovom
                procese.
              </li>
              <li>
                Platba je možná spôsobmi ponúkanými v e-shope (napr. dobierka, bankový prevod). Podrobnosti sú uvedené pri
                dokončení objednávky.
              </li>
            </ol>

            <h3>4. Dodanie tovaru</h3>
            <ol>
              <li>
                Predávajúci dodá tovar v primeranej lehote po potvrdení objednávky; orientačná doba doručenia je uvedená
                v e-shope (napr. 1–3 pracovné dni), podľa dostupnosti a zvoleného spôsobu dopravy.
              </li>
              <li>
                Nebezpečenstvo poškodenia a náhodnej skazy na tovare prechádza na kupujúceho prevzatím tovaru od
                dopravcu alebo pri osobnom odbere, ak je ponúkaný.
              </li>
              <li>
                Pri osobnom odbere platia pokyny predávajúceho ohľadom miesta a času vyzdvihnutia uvedené v potvrdení
                objednávky alebo na webe.
              </li>
            </ol>

            <h3>5. Právo spotrebiteľa odstúpiť od zmluvy</h3>
            <ol>
              <li>
                Spotrebiteľ má právo odstúpiť od kúpnej zmluvy do 14 dní odo dňa prevzatia tovaru bez uvedenia dôvodu,
                ak zákonom nie je výnimka (napr. niektoré druhy tovaru).
              </li>
              <li>
                Odstúpenie je potrebné oznámiť predávajúcemu v lehote a spôsobom umožňujúcim preukázanie včasného
                uplatnenia práva. Tovar je potrebné vrátiť alebo odovzdať bez zbytočného odkladu, najneskôr do 14 dní od
                odstúpenia od zmluvy.
              </li>
              <li>
                Pri splnení podmienok má spotrebiteľ nárok na vrátenie zaplatenej ceny tovaru spôsobom dohodnutým so
                predávajúcim, v súlade s platnými právnymi predpismi.
              </li>
            </ol>

            <h3>6. Reklamácie a zodpovednosť za vady</h3>
            <ol>
              <li>
                Predávajúci zodpovedá za vady tovaru v rozsahu ustanovení zákona č. 40/1964 Zb. (Občiansky zákonník) v
                platnom znení a zákona č. 250/2007 Z. z. o ochrane spotrebiteľa, ak ide o spotrebiteľa.
              </li>
              <li>
                Reklamáciu je možné uplatniť u predávajúceho na kontaktných údajoch uvedených v e-shope (e-mail, adresa).
                Predávajúci vybaví reklamáciu v lehotách podľa zákona.
              </li>
            </ol>

            <h3>7. Ochrana osobných údajov</h3>
            <p>
              Spracovanie osobných údajov sa riadi samostatným dokumentom{" "}
              <a href="#ochrana-udajov">Pravidlá ochrany osobných údajov</a>, ktorý tvorí neoddeliteľnú súčasť
              informovania kupujúceho.
            </p>

            <h3>8. Záverečné ustanovenia</h3>
            <ol>
              <li>
                Predávajúci si vyhradzuje právo tieto OP zmeniť. Zmena nadobúda účinnosť zverejnením v e-shope; k
                objednávkam vzniknutým pred zmenou sa použijú OP platné v čase odoslania objednávky.
              </li>
              <li>
                Právne vzťahy neupravené týmito OP sa riadia právnym poriadkom Slovenskej republiky.
              </li>
              <li>
                Kontakt: e-mail fitfuel@gmail.com, telefón +421 911 123 456, adresa sídla Kmeťkova 27, 949 01 Nitra.
              </li>
            </ol>
          </div>
        </section>

        <section id="ochrana-udajov" className="section">
          <div className="legal-section">
            <h2>Ochrana osobných údajov</h2>
            <p className="legal-warning">
              Upozornenie: Tento dokument bol vytvorený ako vzorový a nie je právne záväzný. Odporúčame jeho obsah
              konzultovať s právnikom a upraviť podľa konkrétnych potrieb vášho e-shopu.
            </p>
            <p>
              Prevádzkovateľ e-shopu FitFuel, IČO .........., so sídlom Kmeťkova 27, 949 01 Nitra, spracováva
              osobné údaje poskytnuté kupujúcim za účelom plnenia a dodatočného potvrdenia obchodných podmienok,
              spracovania elektronickej objednávky, realizácie dodávky, zúčtovania platieb a nevyhnutnej komunikácie
              medzi zmluvnými stranami po dobu vyžadovanú podľa platných právnych predpisov.
            </p>
            <h3>Základné ustanovenia</h3>
            <ol>
              <li>
                Správcom osobných údajov podľa § 5 písm. o) zákona č. 18/2018 Z. z. o ochrane osobných údajov je
                FitFuel, IČO .........., so sídlom Kmeťkova 27, 949 01 Nitra (ďalej len „Správca“).
              </li>
              <li>Kontaktné údaje správcu sú: e-mail: fitfuel@gmail.com, tel.: +421 911 123 456.</li>
              <li>Osobnými údajmi sa rozumejú všetky informácie identifikujúce fyzickú alebo právnickú osobu.</li>
            </ol>
            <h3>Zdroje spracovávaných osobných údajov</h3>
            <ol>
              <li>
                Správca spracováva osobné údaje, ktoré mu poskytol kupujúci, a ktoré získal na základe plnenia
                kúpnej zmluvy a spracovania elektronickej objednávky v internetovom obchode FitFuel.
              </li>
              <li>Správca spracováva len identifikačné a kontaktné údaje kupujúceho nevyhnutné pre plnenie kúpnej zmluvy.</li>
              <li>
                Osobné údaje sú spracovávané za účelom dodávky, zúčtovania platieb a komunikácie medzi zmluvnými
                stranami po dobu vyžadovanú právnymi predpismi. Údaje nebudú zverejňované ani prenášané do tretích
                krajín.
              </li>
            </ol>
            <h3>Účel spracovania osobných údajov</h3>
            <p>Správca spracováva osobné údaje kupujúceho z nasledujúcich dôvodov:</p>
            <ol>
              <li>Za účelom registrácie na webovej stránke e-shopu FitFuel.</li>
              <li>Za účelom vybavenia elektronickej objednávky (meno, adresa, e-mail, telefónne číslo).</li>
              <li>Za účelom plnenia práv a povinností vyplývajúcich zo zmluvného vzťahu medzi kupujúcim a správcom.</li>
              <li>Poskytnutie osobných údajov je nevyhnutné pre uzatvorenie a plnenie kúpnej zmluvy.</li>
            </ol>
            <h3>Doba uchovávania osobných údajov</h3>
            <ol>
              <li>
                Správca uchováva osobné údaje po dobu nevyhnutnú na výkon práv a povinností vyplývajúcich zo
                zmluvného vzťahu a následne po dobu 3 rokov od jeho ukončenia.
              </li>
              <li>Po uplynutí tejto doby budú osobné údaje vymazané.</li>
            </ol>
            <h3>Príjemcovia a spracovatelia osobných údajov</h3>
            <p>
              Treťou stranou, ktorá môže prijímať osobné údaje, sú subdodávatelia správcu, ktorých služby sú
              nevyhnutné pre fungovanie e-shopu a realizáciu objednávok.
            </p>
            <p>Subdodávatelia môžu zahŕňať:</p>
            <ul>
              <li>poskytovateľa e-shopového systému,</li>
              <li>doručovacie služby (napr. kuriérske spoločnosti),</li>
              <li>nástroje na analýzu webovej stránky (napr. Google Analytics).</li>
            </ul>
            <h3>Práva kupujúceho</h3>
            <p>Podľa zákona má kupujúci právo:</p>
            <ol>
              <li>Na prístup k svojim osobným údajom.</li>
              <li>Na opravu nepresných údajov.</li>
              <li>Na vymazanie osobných údajov.</li>
              <li>Vzniesť námietku proti spracovaniu.</li>
              <li>Na prenositeľnosť údajov.</li>
              <li>Odvolať súhlas so spracovaním osobných údajov e-mailom na adrese fitfuel@gmail.com.</li>
              <li>Podať sťažnosť na Úrad na ochranu osobných údajov SR.</li>
            </ol>
            <h3>Zabezpečenie osobných údajov</h3>
            <ol>
              <li>Správca prijal primerané technické a organizačné opatrenia na zabezpečenie osobných údajov.</li>
              <li>
                Údaje sú chránené najmä prostredníctvom zabezpečeného prístupu, hesiel, antivírusovej ochrany a
                pravidelnej údržby systémov.
              </li>
            </ol>
            <h3>Záverečné ustanovenia</h3>
            <ol>
              <li>Odoslaním objednávky kupujúci potvrdzuje, že bol oboznámený s podmienkami ochrany osobných údajov a súhlasí s nimi.</li>
              <li>Súhlas je vyjadrený zaškrtnutím príslušného políčka v objednávke.</li>
              <li>Správca si vyhradzuje právo tieto podmienky kedykoľvek upraviť. Nová verzia bude zverejnená na webovej stránke.</li>
            </ol>
            <p>
              <strong>Tieto pravidlá nadobúdajú účinnosť dňa 01.03.2026.</strong>
            </p>
          </div>
        </section>
      </main>

      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setActiveProductId(null)}>
          <article
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setActiveProductId(null)} aria-label="Zavrieť detail produktu">
              ×
            </button>

            <div className="modal-media">
              <img src={withImageVersion(selectedProduct.image)} alt={selectedProduct.name} />
            </div>

            <div className="modal-content">
              <span className="modal-category">{selectedProduct.categoryTitle}</span>
              <h3 id="product-modal-title">{selectedProduct.name}</h3>
              <p className="modal-price">{euro.format(selectedProduct.price)}</p>
              <p className="modal-detail">{selectedProduct.detail}</p>
              <p className="modal-serving">Nutričné hodnoty na porciu: {selectedProduct.serving}</p>

              <div className="modal-nutrition">
                <div className="nutrition-item">
                  <span>Kalórie</span>
                  <strong>{selectedProduct.nutrition.calories} kcal</strong>
                </div>
                <div className="nutrition-item">
                  <span>Bielkoviny</span>
                  <strong>{selectedProduct.nutrition.protein} g</strong>
                </div>
                <div className="nutrition-item">
                  <span>Sacharidy</span>
                  <strong>{selectedProduct.nutrition.carbs} g</strong>
                </div>
                <div className="nutrition-item">
                  <span>Tuky</span>
                  <strong>{selectedProduct.nutrition.fat} g</strong>
                </div>
                <div className="nutrition-item">
                  <span>Cukry</span>
                  <strong>{selectedProduct.nutrition.sugar} g</strong>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn btn-primary" onClick={() => addFromModal(selectedProduct.id)}>
                  Pridať do košíka
                </button>
                <button className="btn btn-modal-ghost" onClick={() => setActiveProductId(null)}>
                  Zavrieť
                </button>
              </div>
            </div>
          </article>
        </div>
      )}

      {checkoutOpen && (
        <div className="checkout-backdrop" onClick={closeCheckout}>
          <article
            className="checkout-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={closeCheckout} aria-label="Zavrieť objednávku">
              ×
            </button>

            {checkoutStep === 1 && (
              <>
                <p className="checkout-step-label">Krok 1 z 4</p>
                <h2 id="checkout-title">Kontaktné údaje</h2>
                <p className="checkout-sub">Kontakt, fakturačná adresa a prípadne údaje firmy alebo iné miesto doručenia</p>
                <div className="checkout-form">
                  <p className="checkout-section-title">Kontakt</p>
                  <label htmlFor="cf-name">
                    Meno a priezvisko <span className="req">*</span>
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ján Novák"
                    className={contactTriedSubmit && contactValidation.errors.fullName ? "checkout-input-invalid" : ""}
                    aria-invalid={contactTriedSubmit && !!contactValidation.errors.fullName}
                    value={contactForm.fullName}
                    onChange={(e) => setContactForm((p) => ({ ...p, fullName: e.target.value }))}
                  />
                  {contactTriedSubmit && contactValidation.errors.fullName && (
                    <p className="checkout-field-error" role="alert">
                      {contactValidation.errors.fullName}
                    </p>
                  )}
                  <label htmlFor="cf-email">
                    E-mail <span className="req">*</span>
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    autoComplete="email"
                    placeholder="jan.novak@mail.sk"
                    className={contactTriedSubmit && contactValidation.errors.email ? "checkout-input-invalid" : ""}
                    aria-invalid={contactTriedSubmit && !!contactValidation.errors.email}
                    value={contactForm.email}
                    onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))}
                  />
                  {contactTriedSubmit && contactValidation.errors.email && (
                    <p className="checkout-field-error" role="alert">
                      {contactValidation.errors.email}
                    </p>
                  )}
                  <label htmlFor="cf-phone">
                    Telefónne číslo <span className="req">*</span>
                  </label>
                  <input
                    id="cf-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+421 911 234 567"
                    className={contactTriedSubmit && contactValidation.errors.phone ? "checkout-input-invalid" : ""}
                    aria-invalid={contactTriedSubmit && !!contactValidation.errors.phone}
                    value={contactForm.phone}
                    onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))}
                  />
                  {contactTriedSubmit && contactValidation.errors.phone && (
                    <p className="checkout-field-error" role="alert">
                      {contactValidation.errors.phone}
                    </p>
                  )}

                  <p className="checkout-section-title">Fakturačná adresa</p>
                  <label htmlFor="cf-street">
                    Ulica a číslo domu <span className="req">*</span>
                  </label>
                  <input
                    id="cf-street"
                    type="text"
                    autoComplete="street-address"
                    placeholder="Kmeťkova 27"
                    className={contactTriedSubmit && contactValidation.errors.street ? "checkout-input-invalid" : ""}
                    aria-invalid={contactTriedSubmit && !!contactValidation.errors.street}
                    value={contactForm.street}
                    onChange={(e) => setContactForm((p) => ({ ...p, street: e.target.value }))}
                  />
                  {contactTriedSubmit && contactValidation.errors.street && (
                    <p className="checkout-field-error" role="alert">
                      {contactValidation.errors.street}
                    </p>
                  )}
                  <div className="checkout-row-2">
                    <div>
                      <label htmlFor="cf-city">
                        Mesto <span className="req">*</span>
                      </label>
                      <input
                        id="cf-city"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="Nitra"
                        className={contactTriedSubmit && contactValidation.errors.city ? "checkout-input-invalid" : ""}
                        aria-invalid={contactTriedSubmit && !!contactValidation.errors.city}
                        value={contactForm.city}
                        onChange={(e) => setContactForm((p) => ({ ...p, city: e.target.value }))}
                      />
                      {contactTriedSubmit && contactValidation.errors.city && (
                        <p className="checkout-field-error" role="alert">
                          {contactValidation.errors.city}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cf-zip">
                        PSČ <span className="req">*</span>
                      </label>
                      <input
                        id="cf-zip"
                        type="text"
                        autoComplete="postal-code"
                        placeholder="949 01"
                        className={contactTriedSubmit && contactValidation.errors.zip ? "checkout-input-invalid" : ""}
                        aria-invalid={contactTriedSubmit && !!contactValidation.errors.zip}
                        value={contactForm.zip}
                        onChange={(e) => setContactForm((p) => ({ ...p, zip: e.target.value }))}
                      />
                      {contactTriedSubmit && contactValidation.errors.zip && (
                        <p className="checkout-field-error" role="alert">
                          {contactValidation.errors.zip}
                        </p>
                      )}
                    </div>
                  </div>
                  <label htmlFor="cf-country">
                    Krajina <span className="req">*</span>
                  </label>
                  <select
                    id="cf-country"
                    value={contactForm.country}
                    onChange={(e) => setContactForm((p) => ({ ...p, country: e.target.value }))}
                  >
                    <option value="Slovensko">Slovensko</option>
                    <option value="Česko">Česko</option>
                    <option value="Maďarsko">Maďarsko</option>
                    <option value="Rakúsko">Rakúsko</option>
                  </select>

                  <div className="checkout-checks">
                    <label>
                      <input
                        type="checkbox"
                        checked={contactForm.companyPurchase}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, companyPurchase: e.target.checked }))
                        }
                      />
                      Nákup na firmu
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={contactForm.differentAddress}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, differentAddress: e.target.checked }))
                        }
                      />
                      Doručiť tovar na inú adresu
                    </label>
                  </div>

                  {contactForm.companyPurchase && (
                    <>
                      <p className="checkout-section-title">Údaje o firme</p>
                      <label htmlFor="cf-company">
                        Obchodné meno / názov firmy <span className="req">*</span>
                      </label>
                      <input
                        id="cf-company"
                        type="text"
                        autoComplete="organization"
                        placeholder="FitFuel Demo s.r.o."
                        className={
                          contactTriedSubmit && contactValidation.errors.companyName
                            ? "checkout-input-invalid"
                            : ""
                        }
                        aria-invalid={contactTriedSubmit && !!contactValidation.errors.companyName}
                        value={contactForm.companyName}
                        onChange={(e) => setContactForm((p) => ({ ...p, companyName: e.target.value }))}
                      />
                      {contactTriedSubmit && contactValidation.errors.companyName && (
                        <p className="checkout-field-error" role="alert">
                          {contactValidation.errors.companyName}
                        </p>
                      )}
                      <div className="checkout-row-2">
                        <div>
                          <label htmlFor="cf-ico">
                            IČO <span className="req">*</span>
                          </label>
                          <input
                            id="cf-ico"
                            type="text"
                            inputMode="numeric"
                            placeholder="47125378"
                            className={contactTriedSubmit && contactValidation.errors.ico ? "checkout-input-invalid" : ""}
                            aria-invalid={contactTriedSubmit && !!contactValidation.errors.ico}
                            value={contactForm.ico}
                            onChange={(e) => setContactForm((p) => ({ ...p, ico: e.target.value }))}
                          />
                          {contactTriedSubmit && contactValidation.errors.ico && (
                            <p className="checkout-field-error" role="alert">
                              {contactValidation.errors.ico}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="cf-dic">DIČ</label>
                          <input
                            id="cf-dic"
                            type="text"
                            inputMode="numeric"
                            placeholder="1234567890"
                            className={contactTriedSubmit && contactValidation.errors.dic ? "checkout-input-invalid" : ""}
                            aria-invalid={contactTriedSubmit && !!contactValidation.errors.dic}
                            value={contactForm.dic}
                            onChange={(e) => setContactForm((p) => ({ ...p, dic: e.target.value }))}
                          />
                          {contactTriedSubmit && contactValidation.errors.dic && (
                            <p className="checkout-field-error" role="alert">
                              {contactValidation.errors.dic}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {contactForm.differentAddress && (
                    <>
                      <p className="checkout-section-title">Dodacia adresa</p>
                      <label htmlFor="cf-delivery-street">
                        Ulica a číslo domu <span className="req">*</span>
                      </label>
                      <input
                        id="cf-delivery-street"
                        type="text"
                        placeholder="Mierová 12"
                        className={
                          contactTriedSubmit && contactValidation.errors.deliveryStreet
                            ? "checkout-input-invalid"
                            : ""
                        }
                        aria-invalid={contactTriedSubmit && !!contactValidation.errors.deliveryStreet}
                        value={contactForm.deliveryStreet}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, deliveryStreet: e.target.value }))
                        }
                      />
                      {contactTriedSubmit && contactValidation.errors.deliveryStreet && (
                        <p className="checkout-field-error" role="alert">
                          {contactValidation.errors.deliveryStreet}
                        </p>
                      )}
                      <div className="checkout-row-2">
                        <div>
                          <label htmlFor="cf-delivery-city">
                            Mesto <span className="req">*</span>
                          </label>
                          <input
                            id="cf-delivery-city"
                            type="text"
                            placeholder="Bratislava"
                            className={
                              contactTriedSubmit && contactValidation.errors.deliveryCity
                                ? "checkout-input-invalid"
                                : ""
                            }
                            aria-invalid={contactTriedSubmit && !!contactValidation.errors.deliveryCity}
                            value={contactForm.deliveryCity}
                            onChange={(e) =>
                              setContactForm((p) => ({ ...p, deliveryCity: e.target.value }))
                            }
                          />
                          {contactTriedSubmit && contactValidation.errors.deliveryCity && (
                            <p className="checkout-field-error" role="alert">
                              {contactValidation.errors.deliveryCity}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="cf-delivery-zip">
                            PSČ <span className="req">*</span>
                          </label>
                          <input
                            id="cf-delivery-zip"
                            type="text"
                            placeholder="811 03"
                            className={
                              contactTriedSubmit && contactValidation.errors.deliveryZip
                                ? "checkout-input-invalid"
                                : ""
                            }
                            aria-invalid={contactTriedSubmit && !!contactValidation.errors.deliveryZip}
                            value={contactForm.deliveryZip}
                            onChange={(e) =>
                              setContactForm((p) => ({ ...p, deliveryZip: e.target.value }))
                            }
                          />
                          {contactTriedSubmit && contactValidation.errors.deliveryZip && (
                            <p className="checkout-field-error" role="alert">
                              {contactValidation.errors.deliveryZip}
                            </p>
                          )}
                        </div>
                      </div>
                      <label htmlFor="cf-delivery-country">
                        Krajina <span className="req">*</span>
                      </label>
                      <select
                        id="cf-delivery-country"
                        value={contactForm.deliveryCountry}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, deliveryCountry: e.target.value }))
                        }
                      >
                        <option value="Slovensko">Slovensko</option>
                        <option value="Česko">Česko</option>
                        <option value="Maďarsko">Maďarsko</option>
                        <option value="Rakúsko">Rakúsko</option>
                      </select>
                    </>
                  )}
                </div>
                <div className="checkout-actions">
                  <button type="button" className="link-back" onClick={closeCheckout}>
                    &lt; Späť do košíka
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      if (contactValidation.valid) {
                        setContactTriedSubmit(false);
                        setCheckoutStep(2);
                      } else {
                        setContactTriedSubmit(true);
                      }
                    }}
                  >
                    Pokračovať
                  </button>
                </div>
              </>
            )}

            {checkoutStep === 2 && (
              <>
                <p className="checkout-step-label">Krok 2 z 4</p>
                <h2 id="checkout-title">Doprava</h2>
                <p className="checkout-sub">Vyberte si spôsob dopravy</p>
                <div className="payment-options" role="radiogroup" aria-labelledby="checkout-title">
                  <label
                    className={`payment-option ${shippingMethod === "home" ? "is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "home"}
                      onChange={() => setShippingMethod("home")}
                    />
                    <span className="payment-option-main">Doručenie od nás priamo do vášho domova</span>
                    <span className="payment-option-price">{euro.format(SHIPPING_HOME_PRICE)}</span>
                  </label>
                  <label
                    className={`payment-option ${shippingMethod === "pickup" ? "is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "pickup"}
                      onChange={() => setShippingMethod("pickup")}
                    />
                    <span className="payment-option-main">Osobný odber</span>
                    <span className="payment-option-price">{euro.format(0)}</span>
                  </label>
                </div>
                <div className="checkout-actions">
                  <button type="button" className="link-back" onClick={() => setCheckoutStep(1)}>
                    Späť
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => setCheckoutStep(3)}>
                    Pokračovať
                  </button>
                </div>
              </>
            )}

            {checkoutStep === 3 && (
              <>
                <p className="checkout-step-label">Krok 3 z 4</p>
                <h2 id="checkout-title">Platba</h2>
                <p className="checkout-sub">Vyberte spôsob platby</p>
                <div className="payment-options" role="radiogroup" aria-labelledby="checkout-title">
                  <label
                    className={`payment-option ${paymentMethod === "cod" ? "is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <span className="payment-option-main">Dobierka (hotovosť pri prevzatí)</span>
                  </label>
                  <label
                    className={`payment-option ${paymentMethod === "bank" ? "is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                    />
                    <span className="payment-option-main">Bankový prevod</span>
                  </label>
                </div>
                <div className="checkout-actions">
                  <button type="button" className="link-back" onClick={() => setCheckoutStep(2)}>
                    Späť
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => setCheckoutStep(4)}>
                    Pokračovať
                  </button>
                </div>
              </>
            )}

            {checkoutStep === 4 && (
              <>
                <p className="checkout-step-label">Krok 4 z 4</p>
                <h2 id="checkout-title">Súhrn objednávky</h2>
                <p className="checkout-sub">Skontrolujte údaje pred odoslaním</p>

                <div className="summary-block">
                  <h4>Tovar</h4>
                  <div className="summary-lines">
                    {cartItems.map((item) => (
                      <div className="summary-line" key={item.id}>
                        <span>
                          {item.name} × {item.qty}
                        </span>
                        <span>{euro.format(item.lineTotal)}</span>
                      </div>
                    ))}
                    <div className="summary-line summary-line-muted">
                      <span>Medzisúčet tovaru</span>
                      <span>{euro.format(cartTotal)}</span>
                    </div>
                    <div className="summary-line summary-line-muted">
                      <span>
                        Doprava
                        {shippingMethod === "pickup"
                          ? " (osobný odber)"
                          : " (doručenie domov)"}
                      </span>
                      <span>{euro.format(shippingPrice)}</span>
                    </div>
                  </div>
                  <div className="summary-total">
                    <span>Celkom</span>
                    <span>{euro.format(orderTotal)}</span>
                  </div>
                </div>

                <div className="summary-block">
                  <h4>Kontakt a adresy</h4>
                  <div className="summary-lines">
                    <div className="summary-line">
                      <span>Meno</span>
                      <span>{contactForm.fullName}</span>
                    </div>
                    {contactForm.companyPurchase && (
                      <>
                        <div className="summary-line">
                          <span>Firma</span>
                          <span>{contactForm.companyName}</span>
                        </div>
                        <div className="summary-line">
                          <span>IČO / DIČ</span>
                          <span>
                            {contactForm.ico}
                            {contactForm.dic ? ` / ${contactForm.dic}` : ""}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="summary-line">
                      <span>Fakturačná adresa</span>
                      <span>
                        {contactForm.street}, {contactForm.zip} {contactForm.city}, {contactForm.country}
                      </span>
                    </div>
                    {contactForm.differentAddress ? (
                      <div className="summary-line">
                        <span>Dodacia adresa</span>
                        <span>
                          {contactForm.deliveryStreet}, {contactForm.deliveryZip}{" "}
                          {contactForm.deliveryCity}, {contactForm.deliveryCountry}
                        </span>
                      </div>
                    ) : (
                      <div className="summary-line">
                        <span>Dodanie</span>
                        <span>rovnaká ako fakturačná</span>
                      </div>
                    )}
                    <div className="summary-line">
                      <span>E-mail</span>
                      <span>{contactForm.email}</span>
                    </div>
                    <div className="summary-line">
                      <span>Telefón</span>
                      <span>{contactForm.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="summary-block">
                  <h4>Doprava a platba</h4>
                  <p className="summary-payment-note">
                    {shippingMethod === "home"
                      ? `Doručenie domov (${euro.format(shippingPrice)})`
                      : "Osobný odber"}
                    {" · "}
                    {paymentMethod === "cod" ? "Dobierka (hotovosť pri prevzatí)" : "Bankový prevod"}
                  </p>
                </div>

                <label className="terms-check">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  <span>
                    Oboznámil/a som sa s{" "}
                    <a href="#obchodne-podmienky" onClick={closeCheckout}>
                      Obchodnými podmienkami
                    </a>{" "}
                    a{" "}
                    <a href="#ochrana-udajov" onClick={closeCheckout}>
                      Pravidlami ochrany osobných údajov
                    </a>{" "}
                    e-shopu a súhlasím s nimi.
                  </span>
                </label>

                <div className="checkout-actions">
                  <button type="button" className="link-back" onClick={() => setCheckoutStep(3)}>
                    Späť
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!termsAccepted}
                    onClick={submitOrder}
                  >
                    Odoslať objednávku
                  </button>
                </div>
              </>
            )}
          </article>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
