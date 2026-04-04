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
    q: "Ako dlho trvá doručenie?",
    a: "Doručenie štandardne trvá 2 až 3 pracovné dni od potvrdenia objednávky.",
  },
  {
    q: "Sú produkty vhodné do diéty?",
    a: "Áno, produkty sú navrhnuté s dôrazom na makrá, aby sa hodili do redukcie aj naberania.",
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

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const [activeProductId, setActiveProductId] = useState(null);

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

  const handleCheckout = () => {
    if (!cartCount) return;
    const orderCode = Math.floor(Math.random() * 9000) + 1000;
    window.alert(`Objednávka #${orderCode} bola odoslaná. Ďakujeme za nákup vo FitFuel.`);
    setCart({});
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
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
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
                <strong>2–3 dni</strong>
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
                <button className="btn btn-primary" disabled={!cartCount} onClick={handleCheckout}>
                  Dokončiť objednávku
                </button>
                <small>Štandardné doručenie 2 až 3 pracovné dni.</small>
              </div>
            </aside>
          </div>
        </section>

        <section id="onas" className="section split">
          <div className="split-card">
            <h2>O nás</h2>
            <p>
              FitFuel vznikol pre ľudí, ktorí chcú jesť lepšie, no nestíhajú variť každý deň. Spájame chuť,
              kvalitu a výkon do produktov, ktoré vieš zaradiť do reálneho tempa života.
            </p>
          </div>
          <div className="split-card">
            <h3>Pre koho je FitFuel</h3>
            <ul className="persona">
              <li>
                <strong>Ideálny zákazník: Martin, 23 rokov</strong>
                <span>Chodí do fitka 4 až 5x týždenne, sleduje makrá a potrebuje rýchly snack do práce.</span>
              </li>
              <li>
                <strong>Neideálny zákazník: Jozef, 45 rokov</strong>
                <span>
                  Nerobí vedomé rozhodnutia v strave, rieši len najnižšiu cenu a neocení kvalitu surovín.
                </span>
              </li>
            </ul>
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
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="kontakt" className="section contact">
          <div>
            <h2>Kontakt</h2>
            <p>Napíš nám, ak potrebuješ poradiť s výberom produktov alebo objednávkou.</p>
          </div>
          <div className="contact-cards">
            <a href="mailto:fitfuel@gmail.com">fitfuel@gmail.com</a>
            <a href="https://instagram.com/fitfuel.sk" target="_blank" rel="noreferrer">
              @fitfuel.sk
            </a>
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
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
