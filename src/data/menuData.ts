import { MenuItem, CategoryId } from '../types';

export const RESTAURANT_INFO = {
  name: "Dippin Dot's",
  fullName: "Dippin Dot's Restaurant & Bar B Q",
  established: 2017,
  tagline: "Good Food, Good Mood | BBQ Makes Everything Better",
  phone: "0312 3655216",
  whatsapp: "923123655216",
  address: "Near IBA University, 100ft Road, Sukkur, Sindh",
  mapUrl: "https://maps.google.com/?q=IBA+University+100ft+Road+Sukkur",
  timing: "12:00 PM - 02:00 AM (Open Daily)",
  deliveryFee: 150,
  freeDeliveryThreshold: 1500,
  estimatedDeliveryTime: "30 - 45 Mins",
  minOrder: 300,
};

export const CATEGORIES: { id: CategoryId; name: string; icon: string; count?: number }[] = [
  { id: 'all', name: 'All Items', icon: 'UtensilsCrossed' },
  { id: 'deals', name: 'Exclusive Deals', icon: 'Flame' },
  { id: 'burgers', name: 'Burgers', icon: 'Sandwich' },
  { id: 'fries', name: 'Loaded Fries', icon: 'Sparkles' },
  { id: 'momos', name: "Momo's Special", icon: 'Soup' },
  { id: 'pizzas', name: 'Pizzas & Sandwiches', icon: 'Pizza' },
  { id: 'bbq_karahi', name: 'BBQ, Karahi & Sajji', icon: 'Flame' },
  { id: 'rolls_broast', name: 'Rolls & Broast', icon: 'Beef' },
  { id: 'dippin_dots', name: "Dippin' Dots Ice Cream", icon: 'IceCream2' },
  { id: 'drinks', name: 'Drinks & Shakes', icon: 'CupSoda' },
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  // --- 8 FEATURED HOME CARDS (Burgers, Fries & Handhelds) ---
  {
    id: 'feat-1',
    name: "Dippin's Helepeno Zinger Burger",
    urduName: "ڈپن ہیلپینو زنگر برگر",
    category: 'burgers',
    price: 470,
    originalPrice: 530,
    description: "Extra crispy golden fried chicken breast fillet loaded with hot pickled jalapenos, creamy secret garlic mayo and crisp iceberg lettuce in a toasted sesame bun.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.02 AM (1).jpeg",
    isFeaturedHome: true,
    isSpicy: true,
    isBestseller: true,
    options: {
      spiciness: ['Medium Spicy', 'Extra Spicy', 'Mild'],
      addCheese: true,
      drinks: ['Pepsi (Regular)', '7Up', 'Mirinda', 'None']
    }
  },
  {
    id: 'feat-2',
    name: "Hot & Fried Zinger Combo",
    urduName: "ہاٹ اینڈ فرائیڈ زنگر کومبو",
    category: 'burgers',
    price: 550,
    originalPrice: 680,
    description: "Super value meal: 1 Signature Crispy Zinger Burger served with a crunchy fried chicken drumstick, golden salted fries, and a chilled regular drink.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.01 AM (1).jpeg",
    isFeaturedHome: true,
    isBestseller: true,
    includes: ['1x Zinger Burger', '1x Fried Drumstick', 'Golden French Fries', 'Regular Cold Drink'],
    options: {
      spiciness: ['Spicy', 'Crispy Mild'],
      addCheese: true,
      drinks: ['Chilled Pepsi', '7Up', 'Dew', 'Pakola']
    }
  },
  {
    id: 'feat-3',
    name: "Dippin' Special Pizza Sandwich",
    urduName: "ڈپن اسپیشل پیزا سینڈوچ",
    category: 'pizzas',
    price: 450,
    originalPrice: 500,
    description: "Soft freshly baked bread stuffed with premium mozzarella cheese, spiced chicken chunks, black olives and rich pizza sauce with mayo garlic dip.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.58 AM (3).jpeg",
    isFeaturedHome: true,
    isBestseller: true,
    options: {
      addCheese: true
    }
  },
  {
    id: 'feat-4',
    name: "A Mexican Twist Sandwich",
    urduName: "میکسیکن ٹوئسٹ سینڈوچ",
    category: 'pizzas',
    price: 450,
    originalPrice: 520,
    description: "A Mexican twist in every bite! Golden toasted crust loaded with melted cheddar, fajita spiced chicken, salsa sauce and signature drizzle.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.02 AM (2).jpeg",
    isFeaturedHome: true,
    isSpicy: true,
    options: {
      addCheese: true
    }
  },
  {
    id: 'feat-5',
    name: "Loaded Cheesy BBQ Chicken Fries",
    urduName: "لوڈڈ چیزی باربی کیو فرائز",
    category: 'fries',
    price: 420,
    originalPrice: 480,
    description: "Mountain of hot golden fries drenched in signature melted cheddar cheese, smoky shredded BBQ chicken, diced jalapenos and garlic mayo drizzle.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    isFeaturedHome: true,
    isBestseller: true,
    options: {
      spiciness: ['Mild Cheesy', 'Spicy Jalapeno'],
      addCheese: true
    }
  },
  {
    id: 'feat-6',
    name: "Crunch Bucket with Golden Fries",
    urduName: "کرنچ باسکٹ مع فرائز",
    category: 'fries',
    price: 600,
    originalPrice: 800,
    description: "4 pieces of giant crispy drumsticks fried to crunchy golden perfection, served with a basket of salted french fries and tangy chili garlic dip.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.58 AM (1).jpeg",
    isFeaturedHome: true,
    isBestseller: true,
    includes: ['4x Crispy Drumsticks', 'French Fries Basket', 'Chili Garlic Dip'],
    options: {
      spiciness: ['Crispy Hot', 'Original Golden']
    }
  },
  {
    id: 'feat-7',
    name: "Dippin' Double Smash Beef Burger",
    urduName: "ڈبل سمیش بیف برگر",
    category: 'burgers',
    price: 620,
    originalPrice: 720,
    description: "Two 100% pure seasoned beef patties seared on flat top, double American cheddar slices, caramelized grilled onions, dill pickles and smoky house sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    isFeaturedHome: true,
    options: {
      addCheese: true
    }
  },
  {
    id: 'feat-8',
    name: "Dippin Special Shawarma Roll with Fries",
    urduName: "ڈپن اسپیشل رول مع فرائز",
    category: 'rolls_broast',
    price: 300,
    originalPrice: 350,
    description: "Rolled with flavor, loaded with goodness! Fluffy paratha wrapped around succulent marinated chicken, pickled cucumbers, cabbage and signature white sauce.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.56 AM (3).jpeg",
    isFeaturedHome: true,
    isBestseller: true,
    options: {
      spiciness: ['Regular', 'Spicy Masala', 'Cheesy Roll'],
      addCheese: true
    }
  },

  // --- EXCLUSIVE DEALS SECTION ITEMS (From actual promotional flyers) ---
  {
    id: 'deal-azadi',
    name: "Azadi Mega Feast Deal",
    urduName: "آزادی میگا فیسٹ ڈیل",
    category: 'deals',
    price: 1499,
    originalPrice: 1950,
    description: "1 Large 13-Inch Pizza of your choice, 4 Crispy Fried Wings with sauce, and 1 Chilled 1.5 Liter Cold Drink. Ideal for family and friends sharing!",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.58 AM.jpeg",
    isDeal: true,
    isBestseller: true,
    persons: "3 - 4 Persons",
    includes: [
      '1x 13" Large Premium Pizza',
      '4x Crispy Golden Chicken Wings',
      '1x 1.5 Liter Chilled Soft Drink'
    ]
  },
  {
    id: 'deal-platter-1',
    name: "Signature BBQ Platter 1",
    urduName: "سگنیچر بی بی کیو پلیٹر 1",
    category: 'deals',
    price: 1700,
    originalPrice: 2100,
    description: "Fresh & hot grilled platter for 2 to 3 persons. Charcoal grilled to perfection with aromatic rice, spicy chutney, fresh salad and 1 Liter soft drink.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.59 AM.jpeg",
    isDeal: true,
    isBestseller: true,
    persons: "2 - 3 Persons",
    includes: [
      '1x Chicken Leg Tikka',
      '1/2 Plate Reshmi Kabab',
      '1/2 Plate Malai Boti',
      '1/2 Plate Red Boti',
      '2x Pieces Crispy Drumsticks',
      'Aromatic Spiced Mandi/BBQ Rice',
      'Signature Mint Raita & Chili Dip',
      '1 Liter Cold Drink'
    ]
  },
  {
    id: 'deal-platter-2',
    name: "Signature BBQ Platter 2",
    urduName: "سگنیچر بی بی کیو پلیٹر 2",
    category: 'deals',
    price: 2499,
    originalPrice: 2800,
    description: "Grand feast for 5 to 6 persons. Includes chest & leg tikka, succulent kababs, juicy boti, 4 drumsticks, rice, sauce and 1.5 Liter drink.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.57 AM (2).jpeg",
    isDeal: true,
    isBestseller: true,
    persons: "5 - 6 Persons",
    includes: [
      '1x Chicken Chest Tikka',
      '1x Chicken Leg Tikka',
      '1/2 Plate Reshmi Kabab',
      '1/2 Plate Malai Boti',
      '1/2 Plate Red Boti',
      '1/2 Plate Adana Kabab',
      '4x Pieces Crispy Drumsticks',
      'Large Platter Aromatic Rice & Sauces',
      '1.5 Liter Cold Drink'
    ]
  },
  {
    id: 'deal-platter-3',
    name: "Signature Royal BBQ Platter 3",
    urduName: "شاہی سگنیچر بی بی کیو پلیٹر 3",
    category: 'deals',
    price: 3999,
    originalPrice: 4850,
    description: "The ultimate royal spread for 7 to 8 persons! Features premium slow-cooked Half Kg Mutton, Chicken Chest, Leg Tikka, four types of gourmet kababs, rice and jumbo drink.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.57 AM (1).jpeg",
    isDeal: true,
    isBestseller: true,
    persons: "7 - 8 Persons",
    includes: [
      '0.5 Kg Tender Mutton Chunk',
      '1x Chicken Chest Tikka',
      '1x Chicken Leg Tikka',
      '1/2 Plate Reshmi Kabab',
      '1/2 Plate Malai Boti',
      '1/2 Plate Red Boti',
      '1/2 Plate Adana Kabab',
      'Grand Spiced Rice with Roasted Veggies',
      'Mint Chutney & Garlic Dip',
      'Jumbo Soft Drink'
    ]
  },
  {
    id: 'deal-sajji',
    name: "Dippin Special Chicken Sajji with Rice",
    urduName: "ڈپن اسپیشل چکن سجی مع چاول",
    category: 'deals',
    price: 1999,
    originalPrice: 2400,
    description: "Whole roasted Chicken Sajji with authentic Balochi spices cooked slowly over open charcoals, served on an extravagant bed of aromatic rice with lemon, raita & 1L Pepsi.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.58 AM (2).jpeg",
    isDeal: true,
    isBestseller: true,
    persons: "3 - 4 Persons",
    includes: [
      '1x Full Tender Charcoal Chicken Sajji',
      'Full Platter Fragrant Spiced Rice',
      'Mint Raita & Spicy Tamarind Chutney',
      '1 Liter Cold Drink'
    ]
  },
  {
    id: 'deal-crunch-bucket',
    name: "Crunch Bucket Deal",
    urduName: "کرنچ بکٹ ڈیل",
    category: 'deals',
    price: 600,
    originalPrice: 800,
    description: "4 big pieces of freshly fried Crispy Drumsticks accompanied by a basket of hot french fries and dips.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.58 AM (1).jpeg",
    isDeal: true,
    persons: "1 - 2 Persons",
    includes: ['4x Crispy Drumsticks', 'French Fries Basket', 'Dipping Sauces']
  },
  {
    id: 'deal-hot-burger-drumstick',
    name: "Hot & Fried Zinger Drumstick Deal",
    urduName: "ہاٹ اینڈ فرائیڈ زنگر ڈرم اسٹک ڈیل",
    category: 'deals',
    price: 550,
    originalPrice: 680,
    description: "Buy 1 Crispy Zinger Burger & Get a Golden Drumstick + Drink for just Rs. 550! Unbeatable crunch and value.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.01 AM (2).jpeg",
    isDeal: true,
    persons: "1 Person",
    includes: ['1x Crispy Zinger Burger', '1x Golden Drumstick', '1x Cold Drink']
  },
  {
    id: 'deal-dumpukht-half',
    name: "Mutton Dum Pukht with Rice (Half Kg)",
    urduName: "مٹن دم پخت مع چاول (آدھا کلو)",
    category: 'deals',
    price: 2000,
    originalPrice: 2300,
    description: "Slow-cooked mutton shank falling off the bone, sealed in traditional earthen steam with subtle mountain spices. Served over long-grain fragrant rice.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.57 AM.jpeg",
    isDeal: true,
    persons: "2 Persons",
    includes: ['0.5 Kg Mutton Dum Pukht', 'Flavored Rice Platter', 'Salad & Raita']
  },
  {
    id: 'deal-dumpukht-1kg',
    name: "Mutton Dum Pukht with Rice (1 Kg)",
    urduName: "مٹن دم پخت مع چاول (ایک کلو)",
    category: 'deals',
    price: 3800,
    originalPrice: 4200,
    description: "1 Kg of authentic melt-in-mouth Mutton Dum Pukht served with seasoned rice, grilled tomato & fresh hot naan.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.56 AM (2).jpeg",
    isDeal: true,
    persons: "4 - 5 Persons",
    includes: ['1 Kg Mutton Dum Pukht', 'Family Rice Platter', 'Special Chutney & Naan']
  },
  {
    id: 'deal-koyla-karahi',
    name: "Mutton Koyla Karahi (1 Kg)",
    urduName: "مٹن کوئلہ کڑاہی (ایک کلو)",
    category: 'deals',
    price: 3200,
    originalPrice: 3600,
    description: "Tender fresh mutton simmered in tomato gravy, green chilies, julienned ginger, and infused with live charcoal smoke in a traditional wok.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.56 AM.jpeg",
    isDeal: true,
    persons: "4 Persons",
    includes: ['1 Kg Mutton Koyla Karahi', '4x Rogni Naan', 'Mint Raita']
  },
  {
    id: 'deal-pizza-large',
    name: "Large Pizza Fiesta",
    urduName: "لارج پیزا فیسٹا ڈیل",
    category: 'deals',
    price: 1300,
    originalPrice: 1500,
    description: "13-inch Jumbo Pizza loaded with extra cheese, chicken tikka chunks, capsicum, onions, and black olives.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.03 AM.jpeg",
    isDeal: true,
    persons: "3 - 4 Persons",
    includes: ['1x 13" Large Loaded Pizza', 'Special Garlic Dip']
  },
  {
    id: 'deal-pizza-medium',
    name: "Medium Pizza Special",
    urduName: "میڈیم پیزا اسپیشل ڈیل",
    category: 'deals',
    price: 900,
    originalPrice: 1050,
    description: "10-inch hand-stretched pizza loaded with Italian sauce, cheddar & mozzarella blend, smoked chicken and herbs.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.03 AM (1).jpeg",
    isDeal: true,
    persons: "2 Persons",
    includes: ['1x 10" Medium Gourmet Pizza']
  },
  {
    id: 'deal-pizza-small',
    name: "Small Pizza Solo Deal",
    urduName: "اسمال پیزا سولو ڈیل",
    category: 'deals',
    price: 450,
    originalPrice: 500,
    description: "Personal 7-inch pan pizza packed with flavor and gooey cheese. Perfect quick bite!",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.02 AM (3).jpeg",
    isDeal: true,
    persons: "1 Person",
    includes: ['1x 7" Small Pan Pizza']
  },

  // --- MOMO'S SPECIAL CATEGORY ---
  {
    id: 'momo-bbq',
    name: "Dippin' BBQ Momo's",
    urduName: "باربی کیو موموز",
    category: 'momos',
    price: 450,
    description: "Freshly steamed dumplings char-grilled with spicy smoky BBQ glaze, topped with chili flakes and served with fiery red chili dipping sauce.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.00 AM.jpeg",
    isBestseller: true,
    isSpicy: true,
    serving: "8 Pieces"
  },
  {
    id: 'momo-kurkure',
    name: "Dippin' Kurkure Momo's",
    urduName: "کرکرے موموز",
    category: 'momos',
    price: 450,
    description: "Crispy outside, juicy inside! Dumplings coated in seasoned crunchy kurkure crust and fried golden. Served with schezwan garlic chutney.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.00 AM (1).jpeg",
    isBestseller: true,
    isSpicy: true,
    serving: "8 Pieces"
  },
  {
    id: 'momo-afghani',
    name: "Dippin' Afghani Malai Momo's",
    urduName: "افغانی ملائی موموز",
    category: 'momos',
    price: 550,
    description: "Steamed chicken dumplings tossed in a rich, velvety cashew cream and yogurt sauce with fresh herbs and cracked black pepper.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.00 AM (2).jpeg",
    isBestseller: true,
    serving: "8 Pieces"
  },
  {
    id: 'momo-steam',
    name: "Authentic Steamed Momo's",
    urduName: "اسٹیمڈ موموز",
    category: 'momos',
    price: 400,
    description: "Traditional bamboo-steamed Himalayan dumplings stuffed with seasoned minced chicken, scallions and ginger, paired with spicy sesame-tomato sauce.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.35.01 AM.jpeg",
    serving: "8 Pieces"
  },

  // --- BURGERS CATEGORY ---
  {
    id: 'b-classic-zinger',
    name: "Classic Crispy Zinger Burger",
    urduName: "کلاسک کرسپی زنگر برگر",
    category: 'burgers',
    price: 420,
    description: "Signature tender chicken fillet double-breaded in secret spicy crunch, topped with chilled lettuce and garlic mayonnaise.",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    isBestseller: true
  },
  {
    id: 'b-smoky-bbq',
    name: "Smoky BBQ Chicken Burger",
    urduName: "اسموکی باربی کیو چکن برگر",
    category: 'burgers',
    price: 460,
    description: "Grilled chicken fillet brushed with hickory BBQ glaze, caramelized onions, melted cheddar and crisp lettuce on a brioche bun.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'b-tower-delight',
    name: "Dippin' Tower Burger",
    urduName: "ڈپن ٹاور برگر",
    category: 'burgers',
    price: 590,
    description: "Double crispy zinger fillets stacked with a golden hashbrown, double cheese slice, creamy coleslaw and spicy signature mayo.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    isBestseller: true
  },
  {
    id: 'b-cheese-patty',
    name: "Cheesy Beef Jalapeno Burger",
    urduName: "چیزی بیف ہیلپینو برگر",
    category: 'burgers',
    price: 490,
    description: "Grilled beef patty topped with warm cheese sauce, jalapeno slices, crunchy onions and chipotle spread.",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80"
  },

  // --- FRIES & APPETIZERS ---
  {
    id: 'f-plain',
    name: "Crispy Plain Salted French Fries",
    urduName: "کلاسک سالٹڈ فرائز",
    category: 'fries',
    price: 240,
    description: "Freshly cut skin-on potatoes fried golden, tossed in sea salt. Served with tomato ketchup and garlic mayo.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'f-curly',
    name: "Spicy Masala Curly Fries",
    urduName: "اسپائسی مصالحہ کرلی فرائز",
    category: 'fries',
    price: 320,
    description: "Spiral seasoned potatoes fried extra crunchy and dusted in Sukkur chatpata masala.",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'f-pizza-fries',
    name: "Dippin' Extreme Pizza Fries",
    urduName: "ڈپن ایکسٹریم پیزا فرائز",
    category: 'fries',
    price: 460,
    description: "Golden fries baked under a blanket of mozzarella cheese, pizza sauce, chicken fajita chunks, olives and oregano.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    isBestseller: true
  },
  {
    id: 'f-nuggets',
    name: "Crispy Chicken Nuggets (8 Pcs)",
    urduName: "کرسپی چکن نگٹس",
    category: 'fries',
    price: 360,
    description: "Bite-sized tender white chicken nuggets coated in golden panko crumb. Served with honey mustard.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
  },

  // --- PIZZAS & SANDWICHES ---
  {
    id: 'p-club-sandwich',
    name: "Dippin' Triple Decker Club Sandwich",
    urduName: "ٹرپل ڈیکر کلب سینڈوچ",
    category: 'pizzas',
    price: 430,
    description: "Three layers of toasted bread filled with shredded chicken, fried egg, cheese slice, lettuce, tomato and creamy mayo. Served with fries.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
  },

  // --- ROLLS & BROAST ---
  {
    id: 'r-chest-broast',
    name: "QTR Chest Broast with Fries & Slaw",
    urduName: "کوارٹر چیسٹ بروسٹ",
    category: 'rolls_broast',
    price: 580,
    description: "Crispy outside, juicy inside! Signature Quarter Chest chicken deep-fried under pressure, served with golden fries, dinner roll and fresh coleslaw.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.56 AM (1).jpeg",
    isBestseller: true,
    includes: ['Quarter Chest Piece', 'French Fries', 'Coleslaw', 'Garlic Dip', 'Dinner Roll']
  },
  {
    id: 'r-leg-broast',
    name: "QTR Leg Broast with Fries & Slaw",
    urduName: "کوارٹر لیگ بروسٹ",
    category: 'rolls_broast',
    price: 540,
    description: "Juicy quarter leg chicken piece with crispy seasoned crust, fresh dinner roll, golden fries and garlic mayo sauce.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.56 AM (1).jpeg"
  },
  {
    id: 'r-malai-roll',
    name: "Chicken Malai Boti Paratha Roll",
    urduName: "چکن ملائی بوٹی پراٹھا رول",
    category: 'rolls_broast',
    price: 320,
    description: "Charcoal grilled creamy malai boti wrapped in a crispy layered paratha with mild mint yogurt sauce and sliced onions.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.56 AM (3).jpeg"
  },
  {
    id: 'r-zinger-roll',
    name: "Crispy Zinger Paratha Roll",
    urduName: "کرسپی زنگر پراٹھا رول",
    category: 'rolls_broast',
    price: 330,
    description: "Crunchy sliced zinger fillet rolled inside a hot flaky paratha with spicy garlic mayo and pickled cabbage.",
    image: "/menu-assets/WhatsApp Image 2026-10-28 at 3.34.56 AM (3).jpeg"
  },

  // --- BBQ & KARAHI ---
  {
    id: 'bbq-malai-boti',
    name: "Chicken Malai Boti (Plate)",
    urduName: "چکن ملائی بوٹی (پلیٹ)",
    category: 'bbq_karahi',
    price: 550,
    description: "Boneless chicken chunks marinated in heavy cream, green coriander, and mild herbs, grilled to tender perfection over glowing coals.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    isBestseller: true
  },
  {
    id: 'bbq-reshmi-kabab',
    name: "Chicken Reshmi Kabab (4 Pcs)",
    urduName: "ریشمی کباب (۴ عدد)",
    category: 'bbq_karahi',
    price: 490,
    description: "Silky minced chicken skewers mixed with brown onions and aromatic spices, roasted over charcoal.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'bbq-tikka',
    name: "Chicken Tikka (Chest / Leg)",
    urduName: "چکن تکہ (چیسٹ / لیگ)",
    category: 'bbq_karahi',
    price: 380,
    description: "Traditional spicy red chicken tikka roasted over live coal with lemon wedges, onion rings, and mint raita.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80"
  },

  // --- DIPPIN' DOTS BEADED ICE CREAM & DESSERTS ---
  {
    id: 'dd-rainbow',
    name: "Dippin' Dots Rainbow Ice (Large Cup)",
    urduName: "ڈپن ڈاٹس رینبو آئس",
    category: 'dippin_dots',
    price: 380,
    description: "The world's famous flash-frozen beaded ice cream! Fruity explosion of strawberry, orange, blue raspberry and lime ice beads.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    isBestseller: true
  },
  {
    id: 'dd-cookies-cream',
    name: "Dippin' Dots Cookies 'n Cream",
    urduName: "ڈپن ڈاٹس کوکیز اینڈ کریم",
    category: 'dippin_dots',
    price: 400,
    description: "Tiny micro-beads of vanilla cream blended with crunchy chocolate sandwich cookie crumbs.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    isBestseller: true
  },
  {
    id: 'dd-banana-split',
    name: "Dippin' Dots Banana Split Beads",
    urduName: "ڈپن ڈاٹس بنانا اسپلٹ",
    category: 'dippin_dots',
    price: 420,
    description: "Classic banana split recreated in beads: chocolate, banana, vanilla, and strawberry beads dancing on your tongue.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'dd-cotton-candy',
    name: "Dippin' Dots Cotton Candy",
    urduName: "ڈپن ڈاٹس کاٹن کینڈی",
    category: 'dippin_dots',
    price: 390,
    description: "Sweet carnival carnival cotton candy flavor in colorful pink and blue flash-frozen ice cream beads.",
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'dd-chocolate-chip',
    name: "Dippin' Dots Choc Chip Cookie Dough",
    urduName: "ڈپن ڈاٹس چاک چِپ ڈو",
    category: 'dippin_dots',
    price: 420,
    description: "Creamy vanilla beads loaded with real chocolate chip cookie dough nuggets and milk chocolate beads.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80"
  },

  // --- DRINKS & SHAKES ---
  {
    id: 'dr-oreo-shake',
    name: "Thick Oreo Cookies Shake",
    urduName: "اورائیو ملک شیک",
    category: 'drinks',
    price: 350,
    description: "Crushed Oreo biscuits blended thick with vanilla ice cream, whole milk, and chocolate syrup drizzle.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    isBestseller: true
  },
  {
    id: 'dr-mint-margarita',
    name: "Fresh Mint Margarita",
    urduName: "منٹ مارگریٹا",
    category: 'drinks',
    price: 260,
    description: "Zesty fresh mint leaves, lime juice, black salt, and sparkling soda blended over crushed ice.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'dr-cold-drinks',
    name: "Cold Drinks (1.5 Liter)",
    urduName: "کولڈ ڈرنک (۱.۵ لیٹر)",
    category: 'drinks',
    price: 220,
    description: "Chilled 1.5 Liter bottle of Pepsi, 7Up, Mirinda, or Dew.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS = [
  {
    name: "Saadullah Memon",
    role: "IBA Sukkur Student",
    comment: "The Helepeno Zinger Burger and Loaded Fries are unmatched in Sukkur! And having real Dippin' Dots ice cream beads right after is heavenly.",
    rating: 5,
    tag: "Verified Customer"
  },
  {
    name: "Dr. Ayesha Qureshi",
    role: "Local Foodie",
    comment: "Signature BBQ Platter 2 is our go-to for weekend dinners. The mutton dum pukht and chicken sajji aroma is out of this world. Super fast delivery!",
    rating: 5,
    tag: "Family Platter Lover"
  },
  {
    name: "Kamran Soomro",
    role: "Sukkur Resident",
    comment: "Best deals in town! Hot & Fried Burger deal at Rs 550 with drumstick and drink is an unbeatable combo. Always hot and fresh.",
    rating: 5,
    tag: "Regular Visitor"
  }
];
