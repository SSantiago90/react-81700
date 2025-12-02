const products = [
  {
    "id": 1,
    "title": "Smartphone Xiaomi Redmi Note 13",
    "price": 99.9,
    "category": "xiaomi",
    "stock": 10,
    "img": "https://carrefourbr.vtexassets.com/arquivos/ids/182538701/image-0.jpg?v=638724823315300000",
    "description": "El equilibrio perfecto entre rendimiento y precio."
  },
  {
    "id": 2,
    "title": "Samsung Galaxy S24 Ultra",
    "price": 1299.99,
    "category": "samsung",
    "stock": 5,
    "img": "https://example.com/images/samsung_s24_ultra.jpg",
    "description": "La cúspide de la tecnología móvil con cámara Pro-Grade."
  },
  {
    "id": 3,
    "title": "iPhone 15 Pro Max",
    "price": 1399.0,
    "category": "apple",
    "stock": 7,
    "img": "https://example.com/images/iphone_15_pro_max.jpg",
    "description": "Potencia inigualable y diseño sofisticado."
  },
  {
    "id": 4,
    "title": "Motorola Edge 50 Neo",
    "price": 349.5,
    "category": "motorola",
    "stock": 15,
    "img": "https://example.com/images/motorola_edge_50_neo.jpg",
    "description": "Pantalla curva e inmersiva para el entretenimiento."
  },
  {
    "id": 5,
    "title": "Google Pixel 8",
    "price": 699.0,
    "category": "google",
    "stock": 8,
    "img": "https://example.com/images/google_pixel_8.jpg",
    "description": "La mejor experiencia de Android con IA de Google."
  },
  {
    "id": 6,
    "title": "Xiaomi 14 Pro",
    "price": 899.99,
    "category": "xiaomi",
    "stock": 6,
    "img": "https://example.com/images/xiaomi_14_pro.jpg",
    "description": "Fotografía de alta gama impulsada por Leica."
  },
  {
    "id": 7,
    "title": "Samsung Galaxy A55",
    "price": 449.0,
    "category": "samsung",
    "stock": 12,
    "img": "https://example.com/images/samsung_a55.jpg",
    "description": "Gran batería y pantalla vibrante para el día a día."
  },
  {
    "id": 8,
    "title": "iPhone SE (3ra Gen)",
    "price": 429.99,
    "category": "apple",
    "stock": 20,
    "img": "https://example.com/images/iphone_se_3gen.jpg",
    "description": "El chip potente de Apple en un diseño clásico."
  },
  {
    "id": 9,
    "title": "Motorola G84",
    "price": 249.0,
    "category": "motorola",
    "stock": 25,
    "img": "https://example.com/images/motorola_g84.jpg",
    "description": "Rendimiento sólido a un precio accesible."
  },
  {
    "id": 10,
    "title": "Google Pixel 8 Pro",
    "price": 999.0,
    "category": "google",
    "stock": 4,
    "img": "https://example.com/images/google_pixel_8_pro.jpg",
    "description": "El smartphone más inteligente de Google."
  },
  {
    "id": 11,
    "title": "Xiaomi POCO F6",
    "price": 399.0,
    "category": "xiaomi",
    "stock": 18,
    "img": "https://example.com/images/xiaomi_poco_f6.jpg",
    "description": "Ideal para *gaming* con refrigeración avanzada."
  },
  {
    "id": 12,
    "title": "Samsung Galaxy Z Fold 6",
    "price": 1799.99,
    "category": "samsung",
    "stock": 3,
    "img": "https://example.com/images/samsung_z_fold_6.jpg",
    "description": "Transforma tu móvil en una tablet."
  },
  {
    "id": 13,
    "title": "iPhone 15",
    "price": 799.0,
    "category": "apple",
    "stock": 10,
    "img": "https://example.com/images/iphone_15.jpg",
    "description": "Un salto adelante en fotografía y rendimiento."
  },
  {
    "id": 14,
    "title": "Motorola Razr 40 Ultra",
    "price": 999.0,
    "category": "motorola",
    "stock": 5,
    "img": "https://example.com/images/motorola_razr_40_ultra.jpg",
    "description": "El icónico diseño plegable renovado."
  },
  {
    "id": 15,
    "title": "OnePlus 12",
    "price": 799.0,
    "category": "oneplus",
    "stock": 9,
    "img": "https://example.com/images/oneplus_12.jpg",
    "description": "Velocidad extrema con carga ultrarrápida."
  },
  {
    "id": 16,
    "title": "Xiaomi Redmi Note 13 Pro+",
    "price": 319.0,
    "category": "xiaomi",
    "stock": 14,
    "img": "https://example.com/images/redmi_note_13_pro_plus.jpg",
    "description": "Cámara principal de 200MP asequible."
  },
  {
    "id": 17,
    "title": "Samsung Galaxy S24+",
    "price": 999.99,
    "category": "samsung",
    "stock": 6,
    "img": "https://example.com/images/samsung_s24_plus.jpg",
    "description": "Más pantalla y más batería que el S24 estándar."
  },
  {
    "id": 18,
    "title": "iPhone 15 Pro",
    "price": 1099.0,
    "category": "apple",
    "stock": 8,
    "img": "https://example.com/images/iphone_15_pro.jpg",
    "description": "Titanio, chip A17 Pro y botón de acción personalizable."
  },
  {
    "id": 19,
    "title": "Motorola E13",
    "price": 119.99,
    "category": "motorola",
    "stock": 30,
    "img": "https://example.com/images/motorola_e13.jpg",
    "description": "Funcionalidad básica y gran autonomía."
  },
  {
    "id": 20,
    "title": "Google Pixel 7a",
    "price": 499.0,
    "category": "google",
    "stock": 11,
    "img": "https://example.com/images/google_pixel_7a.jpg",
    "description": "Cámara de alta calidad a un precio intermedio."
  },
  {
    "id": 21,
    "title": "Xiaomi 13T",
    "price": 549.0,
    "category": "xiaomi",
    "stock": 7,
    "img": "https://example.com/images/xiaomi_13t.jpg",
    "description": "Rendimiento de flagship con HyperCharge."
  },
  {
    "id": 22,
    "title": "Samsung Galaxy Z Flip 6",
    "price": 1099.99,
    "category": "samsung",
    "stock": 4,
    "img": "https://example.com/images/samsung_z_flip_6.jpg",
    "description": "Diseño compacto y elegante que cabe en cualquier bolsillo."
  },
  {
    "id": 23,
    "title": "iPhone 14 Plus",
    "price": 699.0,
    "category": "apple",
    "stock": 9,
    "img": "https://example.com/images/iphone_14_plus.jpg",
    "description": "Pantalla grande y la mejor batería en un iPhone."
  },
  {
    "id": 24,
    "title": "Motorola G54",
    "price": 199.0,
    "category": "motorola",
    "stock": 22,
    "img": "https://example.com/images/motorola_g54.jpg",
    "description": "Conectividad 5G al alcance de todos."
  },
  {
    "id": 25,
    "title": "OnePlus Nord 3",
    "price": 449.0,
    "category": "oneplus",
    "stock": 16,
    "img": "https://example.com/images/oneplus_nord_3.jpg",
    "description": "La experiencia *flagship* a precio Nord."
  },
  {
    "id": 26,
    "title": "Xiaomi POCO X6 Pro",
    "price": 289.0,
    "category": "xiaomi",
    "stock": 13,
    "img": "https://example.com/images/xiaomi_poco_x6_pro.jpg",
    "description": "El rey de la gama media en rendimiento."
  },
  {
    "id": 27,
    "title": "Samsung Galaxy S23 FE",
    "price": 599.0,
    "category": "samsung",
    "stock": 10,
    "img": "https://example.com/images/samsung_s23_fe.jpg",
    "description": "Lo esencial de la serie S, para los fans."
  },
  {
    "id": 28,
    "title": "iPhone 14",
    "price": 599.0,
    "category": "apple",
    "stock": 15,
    "img": "https://example.com/images/iphone_14.jpg",
    "description": "Un móvil potente y seguro para el día a día."
  },
  {
    "id": 29,
    "title": "Google Pixel Fold",
    "price": 1699.0,
    "category": "google",
    "stock": 2,
    "img": "https://example.com/images/google_pixel_fold.jpg",
    "description": "El primer plegable de Google con diseño único."
  },
  {
    "id": 30,
    "title": "OnePlus Open",
    "price": 1499.0,
    "category": "oneplus",
    "stock": 3,
    "img": "https://example.com/images/oneplus_open.jpg",
    "description": "Un plegable ultraligero con rendimiento OnePlus."
  }
]

export default products