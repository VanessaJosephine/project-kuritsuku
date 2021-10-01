import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      cart: [],
      fav: [],
      // Will be rendered accordingly
      products: [
        {
          name: "Low pH Jelly Cleanser",
          selectedVariant: 0,
          id: 1,
          featured: true,
          price: 99000,
          quantity: 10,
          favqty: 1,
          size: "100 ml",
          category: "Cleanser",
          details: "A Vegan Jelly-textured facial cleanser ",
          info: "A Vegan Jelly-textured facial cleanser that is formulated with very gentle ingredients, NO SLS & NO PEG. Clinically tested to balance skin pH, soothe the skin, remove dirt & excess sebum, without making the skin dry, stretched, & damaging the skin barrier. Contains Japanese Mugwort, Tea Tree, Centella, & Peppermint. Suitable for All skin types, even for sensitive , & acne-prone skin.",
          features: ["Hypoallergenic Certified", "Suitable for Acne Prone + Sensitive Skin", "Dermatologist Tested"],
          images: [
            'Low5.jpg',
            'Low1.jpg',
            'Low3.jpg',
            'Low2.jpg',
          ]
        },
        {
            name: "Alpha Squalaneoxidant Deep Cleansing Oil",
            selectedVariant: 0,
            id: 2,
            featured: true,
            price: 89000,
            quantity: 30,
            favqty: 1,
            size: "40 ml",
            category: "Cleanser",
            details: "Deeply cleanse after a heavy day",
            info: "A vegan cleansing oil that works well to clean sebum, dust, dirt, waterproof makeup & sunscreen completely. Equipped with MICELLE TECHNOLOGY which has the ability to bind dirt & it will turn into a milky texture when in contact with water, thus making the skin clean without leaving any residue and it is non-stripping.",
            features: ["Hypoallergenic Certified", "Suitable for Sensitive Skin", "Dermatologist Tested", "Non-Comedogenic Certified"],
            images: [
              'Alpha3.jpg',
              'Alpha1.jpg',
              'Alpha2.jpg',
            ]
          },
          {
            name: "Omega Butter Deep Cleansing Balm",
            selectedVariant: 0,
            id: 3,
            featured: true,
            price: 145000,
            quantity: 20,
            favqty: 1,
            size: "40 gr",
            category: "Cleanser",
            details: "O MA GAH! It melts the dirt away!",
            info: "A vegan cleanser in the form of a soft balm that is infused with antioxidants Botanical Extracts, OMEGA 3-6-9, Vitamins A & E that removes all dirt, excess sebum, waterproof sunscreen without leaving any residue or causing a burning sensation, leaving the skin clean & moisturized.",
            features: ["BPOM Certified", "Dermatologist Tested"],
            images: [
              'Balm1.jpg',
              'Balm2.jpg',
              'Balm3.jpg',
            ]
          },
          {
            name: "Level 1% Encapsulated Retinol",
            selectedVariant: 0,
            id: 4,
            featured: true,
            price: 155000,
            quantity: 5,
            favqty: 1,
            category: "Serum",
            size: "20 ml",
            details: "Level Up Your Skincare Game with Powerful Yet Gentle Encapsulated Retinol",
            info: "Reduce wrinkles, help tighten skin, maintain youthful & supple skin with Retinol, the Gold Standard for Anti-Aging. It is equipped with Encapsulation Technology, making it more stable & has 2x more effective efficacy than ordinary Retinol, but still gentle. Contains 4-t-Butylcyclohexanol, which is clinically proven to quickly relieve symptoms of irritation (burning & stinging reaction). Use at night & sunscreen in the morning is a must.",
            features: ["Encapsulation technology makes it less irritant", "More stable & faster penetration/absorption into the skin", "Suitable for acne-prone & bumpy skin", "Reduces clogged pores & blackheads", "Key to Youthful, Brightening & Glowing Skin"],
            images: [
              'Retinol1.jpg',
              'Retinol2.jpg',
              'Retinol1.jpg',
            ]
          },
          {
            name: "AHA 7%, BHA 1%, PHA 3% Weekly Peeling Solution",
            selectedVariant: 0,
            id: 5,
            featured: true,
            price: 125000,
            quantity: 0,
            favqty: 1,
            category: "Serum",
            details: "Get Rid of Clogged Pores for Good!",
            size: "20 ml",
            info: "Stronger % Dose option for you who are used to AHA BHA PHA actives, infused with Mugwort & Calendula to level up your exfoliation routine! Helps clean clogged pores, remove dead skin cells, disguise acne scars, help brighten skin & maintain skin moisture!",
            features: ["Vegan Friendly", "Fungal Acne Friendly", "Dermatologist Tested", "Preggo & Teenagers Friendly"],
            images: [
              'ABP1.jpg',
              'ABP2.jpg',
              'ABP1.jpg',
            ]
          },
          {
            name: "Salmon DNA + Marine Collagen Elixir",
            selectedVariant: 0,
            id: 6,
            featured: true,
            price: 155000,
            quantity: 50,
            favqty: 1,
            category: "Serum",
            details: "FOREVER YOUTH BECAUSE #AGEDONTCARE!",
            size: "20 ml",
            info: "Skin Booster elixir from deep blue ocean, infused with 62% Deep Sea Water, Salmon DNA, Pseudoalteromonas Ferment Extract, Hydrolyzed Marine Collagen, & Pearl. Promotes skin elasticity, Revitalize uneven skin texture, Boost Collagen 1 & 4 production, Skin regeneration, & Restoring back your Skin's Glow.",
            features: ["Non-Comedogenic Certified", "Fungal Acne Friendly", "Dermatologist Tested", "Suitable for Sensitive skin"],
            images: [
              'Salmon1.jpg',
              'Salmon2.jpg',
              'Salmon3.jpg',
            ]
          },
          {
            name: "Holygrail Multipeptide Youth Elixir",
            selectedVariant: 0,
            id: 7,
            featured: true,
            price: 129.000,
            quantity: 60,
            favqty: 1,
            category: "Serum",
            details: "Get Your Youthful Skin Back In 15 Days!",
            size: "20 ml",
            info: "Anti Aging Elixir helps to tighten & restore your skin elasticity by reducing muscle movement that can create wrinkles & fine lines. Formulated with 65% Rosa Damascena Water, SYN®-AKE & Argireline (known as BOTOX LIKE EFFECT) & other 10 human-identical peptides.",
            features: ["Non-Comedogenic Certified", "Hypoallergenic", "Dermatologist Tested", "Suitable for Sensitive skin"],
            images: [
              'Holy1.jpg',
              'Holy2.jpg',
              'Holy3.jpg',
            ]
          },
          {
            name: "HYALuronic9+ Advanced + B5 Serum",
            selectedVariant: 0,
            id: 8,
            featured: true,
            price: 115000,
            quantity: 20,
            favqty: 1,
            category: "Serum",
            details: "HYDRATE DEEPLY, STAY HYDRATED, STAY SUPPLE",
            size: "20 ml",
            info: "A serum that contains 9 types of Hyaluronic Acid, B5 (Panthenol) & Chlorella, has an essential role in stimulating Collagen & delivers maximum hydration for 48 hours!",
            features: ["Vegan Friendly", "Non-Comedogenic Certified", "Hypoallergenic", "Dermatologist Tested", "Moisture Lock 48HR"],
            images: [
              'HYA1.jpg',
              'HYA2.jpg',
              'HYA1.jpg',
            ]
          },
          {
            name: "5% Niacinamide Barrier Serum",
            selectedVariant: 0,
            id: 9,
            featured: true,
            price: 89000,
            quantity: 0,
            favqty: 1,
            category: "Serum",
            details: "Say goodbye to Dark Spot, Dull, & Damaged Skin Barrier!",
            size: "20 ml",
            info: "RENEWAL Niacinamide OG, a Vegan Formula with 3 types of Ceramide & Hydrolyzed Algae Extract. Helps Strengthen Skin barrier, Brighten, Disguise dark spots/hyperpigmentation, Reduce acne, Redness, Moisturize skin, & Minimize dry chapped skin.",
            features: ["Vegan Friendly", "Non-Comedogenic Certified", "Hypoallergenic", "Dermatologist Tested", "Moisture Lock 48HR"],
            images: [
              'NIA1.jpg',
              'NIA2.jpg',
              'NIA1.jpg',
            ]
          },
          {
            name: "Ceramic Skin Saviour Moisturizer Gel",
            selectedVariant: 0,
            id: 10,
            featured: true,
            price: 299000,
            quantity: 5,
            favqty: 1,
            category: "Moisturizer",
            details: "Hydrate, Revive, Strengthen, and get your #CeramicSkin!",
            size: "50 ml",
            info: "An Ultimate Clinically ProvenCeramic Skin Saviour Moisturizer Gel, with 9 Powerful Clean Supercharged Ingredients. Enriched by Ceramide, Peptide, & Hydrolyzed Marine Collagen, It’s a type #1 Collagen & the most bioavailable of all other types of collagen. Hydrolyzed Marine Collagen can absorb more quickly & more easily at 1.5x Faster than other types of Collagen to Hydrate, Revive, and Strengthen your skin. Experience 24 hours of moisture lock, make sure you own it, and it will be your skin savior.",
            features: ["EWG & Clean Ingredients", "Non-Comedogenic Certified", "Hypoallergenic Certified", "Reef Safe Verified", "Moisture Lock 48HR"],
            images: [
              'CER1.jpg',
              'CER2.jpg',
              'CER3.jpg',
            ]
          },
          {
            name: "GAME CHANGER Tripeptide Eye Concentrate Gel",
            selectedVariant: 0,
            id: 11,
            featured: true,
            price: 145000,
            quantity: 5,
            favqty: 1,
            category: "Moisturizer",
            details: "GAME CHANGER Eye Cream!",
            size: "20 ml",
            info: "A Game Changer that contains 3 Powerful Peptide to treat skin contour around the eyes, overcome eye fatigue such as Dark Circles, Eye Bags, Wrinkles, & Aging in the eyes due to everyday exposure to blue light. It also smoothens & provides moisture in the eye skin area, so the eyes look fresher. Increase skin elasticity, brightens dark circles (in 3-4 weeks), hydrate for up to 18 hours, & prevent free radical damage with antioxidant power from Poria Cocos Extract. This lightweight gel texture absorbs quickly & leaves your eye area feeling soft and awaken",
            features: ["Best for Dark Circles", "Best for Puffiness", "Best for Fine Lines & Wrinkles"],
            images: [
              'Eye1.jpg',
              'Eye2.jpg',
              'Eye3.jpg',
            ]
          },
          {
            name: "GLOW MAKER AHA BHA PHA Clarifying Treatment Toner",
            selectedVariant: 0,
            id: 12,
            featured: true,
            price: 119000,
            quantity: 15,
            favqty: 1,
            category: "Toner",
            details: "MAKE YOUR OWN GLOW IN 30 DAYS WITH #GLOWMAKER!",
            size: "100 ml",
            info: "A Mild Daily Exfoliating Toner with a low % of AHA, BHA, PHA that is suitable for beginners or sensitive skin. Exfoliate from the skin's deepest layer to the outermost layer. Clinically proven to Get rid of dead skin cells, Unclogged pores, Soften your skin texture, Even out skin tone, Removes the remaining dirt so that the skin can absorb serum + moisturizer efficiently, Fight Acne, blackheads & whiteheads in 30 days. Let your skin glow!",
            features: ["Non-Comedogenic Certified", "Suitable For Acne Prone+Sensitive Skin", "Alcohol-Free"],
            images: [
              'GLOW1.jpg',
              'GLOW2.jpg',
              'GLOW3.jpeg',
            ]
          },
          {
            name: "SUPPLE POWER Hyaluronic9+ Onsen Essence Toner",
            selectedVariant: 0,
            id: 13,
            featured: true,
            price: 199000,
            quantity: 12,
            favqty: 1,
            category: "Toner",
            details: "ESSENCE TONER FOR DEEP HYDRATION & NOURISHMENT! ",
            size: "120 ml",
            info: "Discover the freshness of 79% Onsen Belgium Hot Spring Water & 9 Layers of Hyaluronic Acid, which hydrates the skin to the deepest pores. Introducing you: Supple Power HYALuronic9 + Onsen Essence Toner, rich in minerals to provide maximum moisture in every skin's layer, maintain skin elasticity, balance skin pH after exfoliation & prepare skin to absorbs serum + moisturizer maximally. Get your Fresh & Supple Skin with Somethinc #SupplePower.",
            features: ["Non-Comedogenic Certified", "Suitable for acne prone + sensitive skin ", "48HR Moisture Lock Test Passed"],
            images: [
              'SUP1.jpg',
              'SUP2.jpg',
              'SUP3.jpg',
            ]
          },
    ]  
    },
    mutations: {
      // Add to cart / remove from cart function
      addToCart(state, payload) {
        state.cart.push(Number(payload))
      },
      removeFromCart(state, payload) {
        let indexToDelete = state.cart.indexOf(Number(payload));
        state.cart.splice(indexToDelete, 1)
      },
      // Products inventory should be increase / decrease accordingly
      decrementProductInventory(state, payload) {
        let product = state.products.find(product => product.id === Number(payload))
        product.quantity--;
      },
      incrementProductInventory(state, payload) {
        let product = state.products.find(product => product.id === Number(payload))
        product.quantity++;
      },
      // The same goes for the my-favorite feature
      addToFav(state, payload) {
        state.fav.push(Number(payload))
      },
      removeFromFav(state, payload) {
        let indexToDelete = state.fav.indexOf(Number(payload));
        state.fav.splice(indexToDelete, 1)
      },
      decrementProductFav(state, payload) {
        let product = state.products.find(product => product.id === Number(payload))
        product.favqty--;
      },
      incrementProductFav(state, payload) {
        let product = state.products.find(product => product.id === Number(payload))
        product.favqty++;
      },
    },
    actions: {
      // Product will be added to cart and the inventory will be decreased by 1
      addToCart({ commit }, payload) {
        commit('addToCart', payload),
          commit('decrementProductInventory', payload)
      },
      // Product will be removed from cart and the inventory will be increased by 1
      removeFromCart({ commit }, payload) {
        commit('removeFromCart', payload)
        commit('incrementProductInventory', payload)
      },
      // Works the same for my-favorite feature
      addToFav({ commit }, payload) {
        commit('addToFav', payload),
          commit('decrementProductFav', payload)
      },
      removeFromFav({ commit }, payload) {
        commit('removeFromFav', payload)
        commit('incrementProductFav', payload)
      },
    },
    getters: {
      // Refers to the product in general
      // Each rendered in the prodyct page
      product: (state) => (id) => {
        return state.products.filter(p => p.id === Number(id))[0]
      },
      // Refers to the product in the cart
      // Rendered in the cart page
      cartItems: (state) => {
        return state.cart.map(
          itemId => state.products.find(
            product => product.id === itemId
          )
        )
      },
      // Refers to the product in the my-favorite
      // Rendered in the Fav page
      favItems: (state) => {
        return state.fav.map(
          itemId => state.products.find(
            product => product.id === itemId
          )
        )
      },
      // Refers to the products that have the same category
      // Rendered in the CategoryPage
      productsByCategory: (state) => (category) => {
        return state.products.filter(p => p.category === category)
      }
    }
  });