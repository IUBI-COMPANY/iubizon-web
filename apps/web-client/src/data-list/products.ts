export type Classification =
  | "premium"
  | "standard"
  | "budget"
  | "clearance"
  | "wholesale";

export type ProductCondition = "new" | "reconditioned";

export interface Product {
  id: string;
  model: string;
  name?: string;
  SN?: string;
  oldStock?: number;
  stock: number;
  description?: string;
  price: number;
  sub?: string;
  badge?: string;
  mainImage?: string;
  media: MediaItem[];
  condition: ProductCondition;
  displayTechnology?: string;
  lumensANSI?: number;
  brand?: string;
  type?: string;
  contrastRatio?: string;
  connectivity?: string;
  features?: string;
  nativeResolution?: string;
  aspectRatio?: string;
  throwRatio?: string;
  category?: string[];
  note?: string;
}

export interface MediaItem {
  type: string;
  src: string;
}

const DISCOUNT_PERCENTAGE = 0.42; // 42% DISCOUNT

export const products: Product[] = [
  {
    id: "980W",
    model: "H866A",
    name: "Epson PowerLite 980W",
    SN: "X4ZF9600474",
    condition: "new",
    stock: 1,
    description: "Buena proyección, detalles estéticos",
    price: 2300.0,
    badge: "Top venta",
    mainImage: "/productos/980W/1.jpg",
    media: [
      { type: "image", src: "/productos/980W/1.jpg" },
      { type: "image", src: "/productos/980W/2.jpg" },
      { type: "image", src: "/productos/980W/3.jpg" },
      { type: "image", src: "/productos/980W/4.jpg" },
      { type: "image", src: "/productos/980W/5.jpg" },
      { type: "image", src: "/productos/980W/6.jpg" },
    ],
    displayTechnology: "3LCD",
    lumensANSI: 3800,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "15,000:1",
    connectivity: "VGA/SVGA, USB, HDMI Estándar, HDMI Micro",
    features: "Altavoces integrados",
    nativeResolution: "1280 x 800",
    aspectRatio: "16:10",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `
    Proyector ideal para aulas de estudio bien iluminadas y pequeños auditorios.  Resolución WXGA ideal para presentaciones multimedia.  Lámpara con durabilidad de hasta 12,000 horas.
    Colores tres veces más brillantes, Luminosidad en Color y Excelente calidad.
    `,
  },
  {
    id: "980W-1",
    model: "H866A",
    name: "Epson PowerLite 980W",
    stock: 0,
    oldStock: 2,
    condition: "reconditioned",
    description: "Buena proyección, detalles estéticos",
    price: 2300.0,
    badge: "Top venta",
    mainImage: "/productos/980W-reacon/980w.jpg",
    media: [
      { type: "image", src: "/productos/980W-reacon/2.png" },
      { type: "video", src: "/productos/980W-reacon/980W-reacon.mp4" },
      { type: "image", src: "/productos/980W-reacon/3.png" },
      { type: "image", src: "/productos/980W-reacon/4.png" },
      { type: "image", src: "/productos/980W-reacon/5.png" },
    ],
    displayTechnology: "3LCD",
    lumensANSI: 3800,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "15,000:1",
    connectivity: "VGA/SVGA, USB, HDMI Estándar, HDMI Micro",
    features: "Altavoces integrados",
    nativeResolution: "1280 x 800",
    aspectRatio: "16:10",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `
    Proyector ideal para aulas de estudio bien iluminadas y pequeños auditorios.  Resolución WXGA ideal para presentaciones multimedia.  Lámpara con durabilidad de hasta 12,000 horas.
    Colores tres veces más brillantes, Luminosidad en Color y Excelente calidad.
    `,
  },
  {
    id: "975W",
    model: "H835A",
    name: "Epson PowerLite 975W",
    stock: 0,
    oldStock: 3,
    description: "Buena proyección, detalles estéticos",
    price: 2200.0,
    mainImage: "/productos/975W/975w.jpg",
    media: [
      { type: "image", src: "/productos/975W/2.jpg" },
      { type: "video", src: "/productos/975W/975W.mp4" },
      { type: "image", src: "/productos/975W/3.jpg" },
      { type: "image", src: "/productos/975W/4.jpg" },
      { type: "image", src: "/productos/975W/5.jpg" },
    ],
    condition: "reconditioned",
    displayTechnology: "3LCD",
    lumensANSI: 3600,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "15,000:1",
    connectivity: "HDMI/MHL, USB",
    features: "Altavoces integrados",
    nativeResolution: "1920 x 1080",
    aspectRatio: "16:10",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `El videoproyector PowerLite 975W ofrece una resolución Wide que se adapta a computadoras, tabletas y dispositivos móviles.  Ofrece una  luminosidad de 3.600 lúmenes en color y blanco para presentaciones brillantes. Alta conectividad, Miracast,  HDMI, Inalámbrica.
    Epson PowerLite 975W es el mejor proyector para el aula de clase o sala de reuninoes.  Cuenta con 3.600 lúmenes de brillo en color y blanco otorgando imágenes claras.  Su lámpara de 10,000 horas en modo Normal lo convierte en tu mejor aliado en costo de operación.`,
  },
  {
    id: "1925W",
    model: "V11H314020",
    name: "Epson PowerLite 1925W",
    stock: 0,
    oldStock: 1,
    description: "Buena proyección, detalles estéticos",
    price: 2800.0,
    mainImage: "/productos/1925W/1925w.jpg",
    media: [
      { type: "image", src: "/productos/1925W/2.jpg" },
      { type: "video", src: "/productos/1925W/1925W.mp4" },
      { type: "image", src: "/productos/1925W/3.jpg" },
      { type: "image", src: "/productos/1925W/4.jpg" },
      { type: "image", src: "/productos/1925W/5.jpg" },
    ],
    condition: "reconditioned",
    displayTechnology: "3LCD",
    lumensANSI: 4000,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "2.000:1",
    connectivity: "HDMI/MHL",
    features: "Altavoces integrados",
    nativeResolution: "1280x800",
    aspectRatio: "16:10",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `Este potente proyector produce imágenes vívidas y de alta calidad, pero aún incluye una serie de características fáciles de usar, como un módulo inalámbrico para una fácil configuración inalámbrica. Con la tecnología Epson 3LCD y 4000 lúmenes de salida de luz de color y blanco, tus presentaciones aparecerán en cualquier entorno. Con conectividad digital HDMI y resolución WXGA, puede proyectar películas HD y más. Red de conectividad: RJ-45, LAN, S-Video, USB x 3, Estándar HDMI, VGA/SVGA D-Sub Modos de vídeo 720p, 1080i, 480p, 480i`,
  },
  {
    id: "970",
    model: "H865A",
    name: "Epson PowerLite 970",
    stock: 0,
    oldStock: 1,
    description: "Bajo brillo, detalles estéticos",
    price: 2800.0,
    badge: "Oferta",
    mainImage: "/productos/970/970.jpg",
    media: [
      { type: "image", src: "/productos/970/2.jpg" },
      { type: "video", src: "/productos/970/970.mp4" },
      { type: "image", src: "/productos/970/3.jpg" },
      { type: "image", src: "/productos/970/4.jpg" },
      { type: "image", src: "/productos/970/5.jpg" },
    ],
    condition: "reconditioned",
    displayTechnology: "3LCD",
    lumensANSI: 4000,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "15,000:1",
    connectivity: "HDMI/MHL",
    features: "Altavoces integrados",
    nativeResolution: "XGA (1024 x 768 pixeles)",
    aspectRatio: "4:3",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `PowerLite 970 es la mejor herramienta de proyección para aulas bien iluminadas o pequeños auditorios. Gran rendimiento ya que ofrece una resolución XGA óptima para hojas de cálculo en adelante. Su lámpara tiene una duración hasta de 12,000 horas. 
    TecnologÍa 3LCD que brinda imágenes claras, brillantes y llenas de color. Su luminosidad de 4000 lumenes en color y 4000 en color lo convierten en la mejor opción para aulas de educación bien iluminadas. Adicional ofrece una conectividad inalámbrica opcional la cual te permite poder proyectar tu contenido sin requerir cables. 2 puertos HDMI para conectar todos los dispositivos actuales del Aula`,
  },
  {
    id: "119W",
    model: "H985A",
    name: "Epson PowerLite 119W",
    stock: 0,
    oldStock: 1,
    description: "Buena proyección, detalles estéticos",
    price: 2800.0,
    badge: "Top venta",
    mainImage: "/productos/119W/119w.jpg",
    media: [
      { type: "image", src: "/productos/119W/119w.jpg" },
      { type: "video", src: "/productos/119W/119W.mp4" },
      { type: "image", src: "/productos/119W/3.jpg" },
      { type: "image", src: "/productos/119W/4.jpg" },
      { type: "image", src: "/productos/119W/5.jpg" },
    ],
    condition: "reconditioned",
    displayTechnology: "3LCD",
    lumensANSI: 4000,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "16.000:1",
    connectivity: "USB, VGA/SVGA D-Sub, HDMI Micro, HDMI",
    features:
      "Proyección de techo, Reproductor de DVD integrado, Portátil, Pantalla integrada, HD Ready, Reproductor de Blu-ray integrado, Altavoces integrados, Enfoque automático, Corrección de color",
    nativeResolution: "1.280 x 800",
    aspectRatio: "16:10",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `PowerLite 119W es la mejor herramienta de proyección para los salones actuales. Ofrece una resolución WXGA (1.280 x 800 pixeles), con calidad de alta definición. 
    La tecnología 3LCD ofrece imágenes claras, brillantes y llenas de color. Su luminosidad es de 4.000 lúmenes en blanco2 y 4.000 lúmenes en color lo convierten en la mejor opción para aulas de educación bien iluminadas.  Adicionalmente, ofrecen conectividad inalámbrica opcional que permite proyectar contenido sin requerir cables.  Cuenta con puertos HDMI para conectar todos los dispositivos actuales del aula educativa.`,
  },
  {
    id: "108",
    model: "H860A",
    name: "Epson PowerLite 108",
    stock: 0,
    oldStock: 4,
    price: 2250.0,
    badge: "Oferta",
    mainImage: "/productos/108/108.jpg",
    media: [
      { type: "image", src: "/productos/108/2.jpg" },
      { type: "video", src: "/productos/108/108.mp4" },
      { type: "image", src: "/productos/108/3.jpg" },
      { type: "image", src: "/productos/108/4.jpg" },
      { type: "image", src: "/productos/108/5.jpg" },
    ],
    condition: "reconditioned",
    displayTechnology: "3LCD",
    lumensANSI: 3700,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "15000:1",
    connectivity: "HDMI estándar, VGA/SVGA D-Sub",
    features:
      "Altavoces incorporados, proyección en el techo, proyección sobre la mesa",
    nativeResolution: "1024 x 768",
    aspectRatio: "4:3",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `La tecnología 3LCD ofrece imágenes claras, brillantes y llenas de color. Su luminosidad de 3.700 lúmenes en color y en blanco en el PowerLite® 108`,
  },
  {
    id: "98H",
    model: "H687A",
    name: "Epson PowerLite 98H",
    stock: 2,
    price: 1400.0,
    badge: "Oferta",
    mainImage: "/productos/98H/98h.jpg",
    media: [
      { type: "image", src: "/productos/98H/2.jpg" },
      { type: "video", src: "/productos/98H/98H.mp4" },
      { type: "image", src: "/productos/98H/3.jpg" },
      { type: "image", src: "/productos/98H/4.jpg" },
      { type: "image", src: "/productos/98H/5.jpg" },
    ],
    condition: "new",
    displayTechnology: "3LCD",
    lumensANSI: 3000,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "10,000:1",
    connectivity: "HDMI estándar, VGA/SVGA D-Sub",
    features: "Altavoces integrados",
    nativeResolution: "1024 x 768",
    aspectRatio: "4:3",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `Con una conectividad de red avanzada y una calidad de imagen excepcional, el PowerLite 98H          
    ofrece una gran opción para cualquier tipo de sala. La tecnología 3LCD ofrece colores hasta 3x mas 
    brillantes que otros modelos de la competencia. Los proyectores Epson aseguran imágenes brillantes 
    y vívidas. Confiable y fácil de usar, el PowerLite 98H cuanta con una resolución XGA, 3.000 lúmenes 
    de brillo en color y 3.000 lúmenes de brillo en blanco. Proyecte y controle la imagen desde múltiples 
    dispositivos gracias a la nueva función moderador, compartiendo fácilmente el contenido con la audiencia. 
    Versátil y funcional, el PowerLite 98H cuenta con conectividad HDMI y funciones de audio premium.`,
  },
  {
    id: "EX3210",
    model: "H430A",
    name: "Epson PowerLite EX3210",
    stock: 1,
    condition: "new",
    description: "Buena proyección, detalles estéticos",
    price: 800.0,
    badge: "Nuevo",
    mainImage: "/productos/EX3210/1.jpg",
    media: [
      { type: "image", src: "/productos/EX3210/1.jpg" },
      { type: "image", src: "/productos/EX3210/2.jpg" },
      { type: "image", src: "/productos/EX3210/3.jpg" },
      { type: "image", src: "/productos/EX3210/4.jpg" },
    ],
    displayTechnology: "3LCD",
    lumensANSI: 2800,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "15,000:1",
    connectivity: "VGA/SVGA, USB, HDMI Estándar, HDMI Micro",
    features: "Altavoces integrados",
    nativeResolution: "800 x 600",
    aspectRatio: "16:10",
    throwRatio: "Proyección media/estándar",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `Proyector ideal para aulas de estudio bien iluminadas y pequeños auditorios. Resolución WXGA ideal para presentaciones multimedia. Lámpara con durabilidad de hasta 12,000 horas.`,
  },
  {
    id: "VS340",
    model: "H717A",
    name: "Epson PowerLite VS340",
    stock: 1,
    condition: "new",
    description: "Buena proyección, detalles estéticos",
    price: 999.0,
    badge: "Nuevo",
    mainImage: "/productos/VS340/1.jpg",
    media: [
      { type: "image", src: "/productos/VS340/1.jpg" },
      { type: "image", src: "/productos/VS340/2.jpg" },
      { type: "image", src: "/productos/VS340/3.jpg" },
      { type: "image", src: "/productos/VS340/4.jpg" },
    ],
    displayTechnology: "3LCD",
    lumensANSI: 3000,
    brand: "Epson",
    type: "Proyector",
    contrastRatio: "15,000:1",
    connectivity: "VGA/SVGA, USB, HDMI Estándar, HDMI Micro",
    features: "Altavoces integrados",
    nativeResolution: "1280 x 800",
    aspectRatio: "16:10",
    throwRatio: "Proyección media/alta",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `Proyector ideal para aulas de estudio bien iluminadas y pequeños auditorios. Resolución WXGA ideal para presentaciones multimedia. Lámpara con durabilidad de hasta 12,000 horas.`,
  },
  {
    id: "Proyector-Led-Portatil-Hy350-Magcubic-Full-Hd-1080p-Android",
    model: "HY350",
    name: "Proyector Led Portátil Hy350 Magcubic Full Hd 1080p Android",
    stock: 4,
    oldStock: 20,
    condition: "new",
    description: "",
    price: 550.0,
    badge: "Nuevo",
    mainImage: "/productos/HY350/HY350.jpg",
    media: [
      { type: "image", src: "/productos/HY350/HY350.jpg" },
      { type: "image", src: "/productos/HY350/1.webp" },
      { type: "image", src: "/productos/HY350/2.webp" },
      { type: "image", src: "/productos/HY350/3.webp" },
      { type: "image", src: "/productos/HY350/4.webp" },
      { type: "image", src: "/productos/HY350/5.webp" },
      { type: "image", src: "/productos/HY350/6.webp" },
      { type: "image", src: "/productos/HY350/7.webp" },
      { type: "image", src: "/productos/HY350/8.webp" },
      { type: "video", src: "/productos/HY350/outboxing.mp4" },
    ],
    displayTechnology: "3LCD",
    lumensANSI: 580,
    brand: "MagCubic",
    type: "Proyector",
    connectivity: "USB, HDMI Estándar, Wi-Fi 6 y Bluetooth 5.0.",
    features: "Altavoces integrados",
    nativeResolution: "Full HD 1080p con soporte para 4K",
    throwRatio: "Proyección baja/media",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Proyectores para Home Theater",
    ],
    note: `
        - Sistema Operativo: Android 11.0
        - Procesador (CPU Allwinner H713 ARM Cortex-A53 de cuatro núcleos
        - Procesador Gráfico (GPU): Mali-G31 compatible con OpenGL ES 3.2 y OpenCL 2.0
        - Memoria RAM/ROM: 2 GB + 32 GB
        
        Características del Producto:
        
        Actualización a Proyector Inteligente con Android TV 11.0
        Este proyector inteligente cuenta con un sistema operativo Android integrado que soporta WiFi 6 de doble banda (5.8G/2.4G) y Bluetooth 5.0. Estas características permiten una carga de video más rápida y una transmisión de contenido más fluida, mejorando la experiencia de visualización. Además, incluye altavoces estéreo con sonido envolvente 360°, creando un ambiente de cine en casa.
        
        Resolución Nativa 1080P y Compatible con Proyección 4K
        Con un brillo ANSI de 580 lúmenes y una resolución nativa de 1920x1080P, este proyector ofrece imágenes nítidas, claras y vibrantes. Además, es compatible con la reproducción de contenido 4K, brindando una experiencia visual de alta definición. El tamaño de proyección de hasta 150" permite disfrutar de una pantalla gigante y de calidad cinematográfica.
        
        Enfoque Eléctrico y Corrección Trapezoidal Automática
        Este proyector facilita el ajuste de la imagen gracias a su enfoque eléctrico, que se controla fácilmente con un solo botón en el control remoto. También incluye corrección trapezoidal automática, corrección 4P y zoom ajustable del 50% al 100%. Además, opera con un nivel de ruido inferior a 35 dB, lo que lo convierte en la opción ideal para disfrutar de una proyección silenciosa y cómoda.
        
        Nota Al emparejar el proyector con el control remoto a través de Bluetooth, podrás utilizar la función de control por voz.

    `,
  },
  {
    id: "ELPAP07",
    model: "V12H418P12",
    name: "Adaptador Epson ELPAP07 Módulo Inalámbrico WiFi",
    stock: 4,
    oldStock: 20,
    condition: "new",
    description: "Accesorio de proyección",
    price: 230.0,
    badge: "Nuevo",
    mainImage: "/productos/ELPAP07/ELPAP07.jpg",
    media: [
      { type: "image", src: "/productos/ELPAP07/ELPAP07.jpg" },
      { type: "image", src: "/productos/ELPAP07/1.webp" },
      { type: "image", src: "/productos/ELPAP07/2.webp" },
      { type: "image", src: "/productos/ELPAP07/3.webp" },
      { type: "image", src: "/productos/ELPAP07/4.webp" },
      { type: "image", src: "/productos/ELPAP07/example.webp" },
      { type: "image", src: "/productos/ELPAP07/packaging.jpg" },
    ],
    connectivity: "Wireless/ USB type A/ 802.11 b/g/n",
    brand: "Epson",
    type: "Adaptador",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Accesorios para Proyectores",
    ],
    note: `
      Este adaptador de red inalámbrica de alta velocidad se conecta directamente a ciertos proyectores Epson que permiten un acceso rápido y fácil a la red LAN o redes peer-to-peer y sin cables. Cuando se utiliza con Epson EasyMP Monitor y el software Network Projection, los usuarios pueden acceder de forma remota y controlar los proyectores sobre la red Wi-Fi.
      Compatible con los siguientes proyectores:
        Home Entertainment ProjectorsHome Cinema 3000 2D/3D Full HD 1080p 3LCD Projector

      Proyectores multimedia:
      BrightLink 425Wi Interactive WXGA 3LCD Projector with Wall Mount
      BrightLink 430i Interactive XGA 3LCD Projector with Wall Mount
      BrightLink 435Wi Interactive WXGA 3LCD Projector with Wall Mount
      BrightLink 436Wi Interactive WXGA 3LCD Projector
      BrightLink 475Wi Interactive WXGA 3LCD Projector – Refurbished
      BrightLink 475Wi Interactive WXGA 3LCD Projector with Mount
      BrightLink 480i Interactive XGA 3LCD Projector – Refurbished
      BrightLink 480i Interactive XGA 3LCD Projector with Mount
      BrightLink 485Wi Interactive WXGA 3LCD Projector – Refurbished
      BrightLink 485Wi Interactive WXGA 3LCD Projector with Mount
      BrightLink 575Wi Interactive WXGA 3LCD Projector
      BrightLink 585Wi Interactive WXGA 3LCD Projector
      BrightLink 595Wi Interactive WXGA 3LCD Projector
      BrightLink Pro 1410Wi Meeting Room Productivity Tool with Wall Mount
      BrightLink® Pro 1420Wi Collaborative Whiteboarding Solution
      BrightLink® Pro 1430Wi Collaborative Whiteboarding Solution with Touch
      EX3220 SVGA 3LCD Projector
      EX5220 Wireless XGA 3LCD Projector
      EX5230 Pro XGA 3LCD Projector
      EX6220 WXGA 3LCD Projector
      EX7220 Wireless WXGA 3LCD Projector
      EX7230 Pro HD WXGA 3LCD Projector
      EX7235 Pro Wireless HD WXGA 3LCD Projector
      PowerLite 1222 Wireless XGA 3LCD Projector
      PowerLite 1262W Wireless WXGA 3LCD Projector
      PowerLite 1263W Wireless HD WXGA 3LCD Projector
      PowerLite 1760W Multimedia Projector
      PowerLite 1761W WXGA 3LCD Projector
      PowerLite 1770W Multimedia Projector
      PowerLite 1771W WXGA 3LCD Projector
      PowerLite 1775W Multimedia Projector
      PowerLite 1776W WXGA 3LCD Projector
      PowerLite 1835 XGA 3LCD Projector
      PowerLite 1945W WXGA 3LCD Projector
      PowerLite 1955 XGA 3LCD Projector
      PowerLite 1965 XGA 3LCD Projector
      PowerLite 1975W WXGA Wireless 3LCD Multimedia Projector
      PowerLite 1985WU WUXGA Wireless 3LCD Projector
      PowerLite 420 XGA 3LCD Projector
      PowerLite 425W WXGA 3LCD Projector
      PowerLite 430 XGA 3LCD Projector
      PowerLite 435W WXGA 3LCD Projector
      PowerLite 4650 XGA 3LCD Projector
      PowerLite 470 XGA 3LCD Projector
      PowerLite 4750W WXGA 3LCD Projector
      PowerLite 475W WXGA 3LCD Projector
      PowerLite 480 XGA 3LCD Projector
      PowerLite 4855WU WUXGA 3LCD Projector
      PowerLite 485W WXGA 3LCD Projector
      PowerLite 520 XGA 3LCD Projector
      PowerLite 525W WXGA 3LCD Projector
      PowerLite 530 XGA 3LCD Projector
      PowerLite 530 XGA 3LCD Projector for SMART
      PowerLite 535W WXGA 3LCD Projector
      PowerLite 570 XGA 3LCD Projector
      PowerLite 575W WXGA 3LCD Projector
      PowerLite 580 XGA 3LCD Projector
      PowerLite 580 XGA 3LCD Projector for SMART
      PowerLite 585W WXGA 3LCD Projector
      PowerLite 585W WXGA 3LCD Projector for SMART
      PowerLite 905 XGA 3LCD Projector
      PowerLite 915W WXGA 3LCD Projector
      PowerLite 935W WXGA 3LCD Projector
      PowerLite 95 XGA 3LCD Projector
      PowerLite 955W WXGA 3LCD Projector
      PowerLite 955WH WXGA 3LCD Projector
      PowerLite 965 XGA 3LCD Projector
      PowerLite 965H XGA 3LCD Projector
      PowerLite 96W WXGA 3LCD Projector
      PowerLite 97 XGA 3LCD Projector
      PowerLite 97H XGA 3LCD Projector
      PowerLite 98 XGA 3LCD Projector
      PowerLite 98H XGA 3LCD Projector
      PowerLite 99W WXGA 3LCD Projector
      PowerLite 99WH WXGA 3LCD Projector
      PowerLite D6150 XGA 3LCD Projector
      PowerLite D6155W WXGA 3LCD Projector
      PowerLite D6250 XGA 3LCD Projector
      PowerLite Pro G6050W WXGA 3LCD Projector with Standard Lens
      PowerLite Pro G6050WNL WXGA 3LCD Projector without Lens
      PowerLite Pro G6070W WXGA 3LCD Projector with Standard Lens
      PowerLite Pro G6150NL XGA 3LCD Projector without Lens
      PowerLite Pro G6170 XGA 3LCD Projector with Standard Lens
      PowerLite Pro G6270W WXGA 3LCD Projector with Standard Lens
      PowerLite Pro G6450WU WUXGA 3LCD Projector with Standard Lens
      PowerLite Pro G6450WUNL WUXGA 3LCD Projector without Lens
      PowerLite Pro G6470WU WUXGA 3LCD Projector with Standard Lens
      PowerLite Pro G6550WU WUXGA 3LCD Projector with Standard Lens
      PowerLite Pro G6550WUNL WUXGA 3LCD Projector without Lens
      PowerLite Pro G6570WU WUXGA 3LCD Projector with Standard Lens
      PowerLite Pro G6750WU WUXGA 3LCD Projector with Standard Lens
      PowerLite Pro G6750WUNL WUXGA 3LCD Projector without Lens
      PowerLite Pro G6770WU WUXGA 3LCD Projector with Standard Lens
      PowerLite Pro Z8150NL XGA 3LCD Projector
      PowerLite Pro Z8250NL XGA 3LCD Projector
      PowerLite Pro Z8255NL XGA 3LCD Projector
      PowerLite Pro Z8350WNL WXGA 3LCD Projector without Lens
      PowerLite Pro Z8450WUNL WUXGA 3LCD Projector
      PowerLite Pro Z8455WUNL WUXGA 3LCD Projector
      PowerLite S17 SVGA 3LCD Projector
      PowerLite S27 SVGA 3LCD Projector
      PowerLite W17 WXGA 3LCD Projector
      PowerLite W29 WXGA 3LCD Projector
      PowerLite X17 XGA 3LCD Projector
      PowerLite X27 XGA 3LCD Projector
    `,
  },
  {
    id: "ELPAP10",
    model: "V12H731P02",
    name: "Adaptador Epson ELPAP10 Módulo Inalámbrico WiFi",
    stock: 2,
    oldStock: 20,
    condition: "new",
    description: "Accesorio de proyección",
    price: 370.0,
    badge: "Nuevo",
    mainImage: "/productos/ELPAP10/ELPAP10.jpg",
    media: [
      { type: "image", src: "/productos/ELPAP10/ELPAP10.jpg" },
      { type: "image", src: "/productos/ELPAP10/1.jpg" },
      { type: "image", src: "/productos/ELPAP10/2.jpg" },
      { type: "image", src: "/productos/ELPAP10/3.jpg" },
      { type: "image", src: "/productos/ELPAP10/example.webp" },
      { type: "image", src: "/productos/ELPAP10/packaging.jpg" },
    ],
    connectivity: "Wireless/ USB type A/ 802.11 b/g/n",
    brand: "Epson",
    type: "Adaptador",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Accesorios para Proyectores",
    ],
    note: `Este adaptador de red inalámbrico de alta velocidad se conecta directamente a ciertos proyectores Epson, lo que permite un acceso rápido y fácil a la LAN o redes punto a punto sin cables. Cuando se utilizan con el software Epson EasyMP Monitor y Network Projection, los usuarios pueden acceder de forma remota y controlar proyectores a través de la LAN inalámbrica.
     
      Compatible con los siguientes proyectores:
          Proyector Láser Epson LS100 Full HD 3LCD
          Proyector Epson Home Cinema 760HD
          Proyectores Portátiles Para El Trabajo
          Proyector Epson PowerLite W05+
          Proyector Epson PowerLite S41+
          Proyector Epson PowerLite X05+
          Proyector Epson PowerLite X41+
          Proyector Epson VS250 SVGA 3LCD
          Proyector PowerLite 1771W WXGA 3LCD
          Proyector Epson PowerLite 2042 XGA 3LCD
          Proyector Epson PowerLite 2142W WXGA 3LCD
          Proyector Inalámbrico PowerLite 2247U Full HD WUXGA 3LCD
          Proyector Láser Epson PowerLite L400U WUXGA 3LCD
          Proyector Láser Epson PowerLite L500W WXGA 3LCD
          Proyector Láser Epson PowerLite L610 XGA 3LCD
          Proyector Láser Epson PowerLite L510U WUXGA 3LCD
          Proyector Láser Epson PowerLite L610W WXGA 3LCD
          Proyector Epson PowerLite 5535U WUXGA 3LCD
          Proyector Epson PowerLite 5520W WXGA 3LCD
          Proyector Epson PowerLite 5510 XGA 3LCD
          Proyector Epson PowerLite 2040 XGA 3LCD
          Proyector Epson PowerLite 2140W WXGA 3LCD
          Proyector Inalámbrico Epson PowerLite 2065 XGA 3LCD
          Proyector Inalámbrico Epson PowerLite 2155W WXGA 3LCD
          Proyector Inalámbrico Epson PowerLite 2165W WXGA 3LCD
          Proyector Inalámbrico Epson PowerLite 2250U Full HD WUXGA 3LCD
          Proyector Inalámbrico Epson PowerLite 2255U Full HD WUXGA 3LCD
          Proyector Inalámbrico Epson PowerLite 2265U Full HD WUXGA 3LCD
          Proyector Inalámbrico PowerLite 2245U Full HD WUXGA 3LCD
          Proyector Epson PowerLite S31+
          Proyector PowerLite W32+
          Proyector PowerLite 1985WU WUXGA Wireless 3LCD
          Proyector Epson Powerlite Pro G7500U c/ 4K Enhancement y Lente Estándar
          Proyector Epson PowerLite Pro G7000W c/ lente estándar
          Proyector Epson PowerLite Pro G7100 c/ Lente estándar
          Proyector Epson PowerLite Pro G7200W c/ Lente estándar
          Proyector Epson PowerLite Pro G7805 XGA 3LCD con lente estándar
          Proyector Epson PowerLite Pro G7905U c/ 4K Enhancement y Lente Estándar
          Proyector Epson Pro L1100U Láser c/ 4K Enhancement y Lente Estándar
          Proyector Epson Pro L1200U c/ 4K Enhancement y Lente Estándar
          Proyector Epson Pro L1505U Láser c/4K Enhancement y Lente Estándar
          Proyector PowerLite Pro G7400U c/ 4K Enhancement y Lente Estándar
          Proyector Pro L1405U Láser c/4K Enhancement y Lente Estándar
          Proyector Láser Interactivo Epson BrightLink 710Ui WUXGA 3LCD
          Proyector Láser Interactivo Epson BrightLink Pro 1470Ui WUXGA 3LCD
          Proyector Interactivo Epson BrightLink Pro 1450Ui Full HD
          Proyector Interactivo Epson BrightLink Pro 1460Ui Full HD
          Proyector Interactivo Epson BrightLink 675Wi+
          Proyector Interactivo Epson BrightLink 685Wi+
          Proyector Interactivo Epson BrightLink 695Wi+
    `,
  },
  {
    id: "ELPAP11",
    model: "V12H005A02",
    name: "Adaptador Epson ELPAP11 Modulo Inalámbrico WiFi",
    stock: 7,
    oldStock: 20,
    condition: "new",
    description: "Accesorio de proyección",
    price: 570.0,
    badge: "Nuevo",
    mainImage: "/productos/ELPAP11/ELPAP11.jpg",
    media: [
      { type: "image", src: "/productos/ELPAP11/ELPAP11.jpg" },
      { type: "image", src: "/productos/ELPAP11/1.jpg" },
      { type: "image", src: "/productos/ELPAP11/2.jpg" },
      { type: "image", src: "/productos/ELPAP11/3.jpg" },
      { type: "image", src: "/productos/ELPAP11/4.jpg" },
      { type: "image", src: "/productos/ELPAP11/example.webp" },
      { type: "image", src: "/productos/ELPAP11/packaging.jpg" },
    ],
    connectivity: "Wireless/ USB type A/ 802.11 b/g/n",
    brand: "Epson",
    type: "Adaptador",
    category: [
      "Electrónica",
      "TV, Video y Audio para el Hogar",
      "TV y Video",
      "Accesorios para Proyectores",
    ],
    note: `Epson ELPAP11 Modulo Inalambrico es un modulo inalambrico de alta velocidad se conecta directamente a proyectores Epson seleccionados, lo que permite un acceso rápido y fácil a la LAN o redes de igual a igual sin cables.

    Cuando se utiliza con el software Epson Projector Management o iProjection, los usuarios pueden acceder y controlar los proyectores de forma remota a través de la LAN inalámbrica.
    
    Carasteristicas:
      Alineado con los estándares 802.11 b / g / n
      Utiliza conector USB tipo A
      Compatible con PC o Mac
      Capaz de transmitir audio
    
    
    Compatible con proyectores Epson: 
    
    Proyectores de cine en casa:
      Proyector Home Cinema 880 3LCD 1080p
    
    Proyectores portátiles para el trabajo:
      Proyector láser inalámbrico Pro EX11000 3LCD Full HD 1080p
    
    Proyectores para salas de reuniones para el trabajo:
      Proyector láser PowerLite L770U 3LCD con mejora 4K
      Proyector láser PowerLite L775U 3LCD con mejora 4K
      Proyector láser PowerLite L570U 3LCD con mejora 4K
      Proyector láser PowerLite L630U Full HD WUXGA 3LCD
      Proyector láser PowerLite L730U Full HD WUXGA 3LCD
      Proyector láser de largo alcance PowerLite L520U Full HD WUXGA 3LCD
      Proyector láser PowerLite L520W WXGA 3LCD
      Proyector láser PowerLite L530U Full HD WUXGA 3LCD
    
    Proyectores para grandes espacios:
      EB-PU2116W Proyector láser 3LCD de 16 000 lúmenes con mejora 4K
      EB-PU2120W Proyector láser 3LCD de 20 000 lúmenes con mejora 4K
      EB-PU2216B Proyector láser para espacios grandes 3LCD de 16 000 lúmenes con mejora 4K
      EB-PU2220B Proyector láser para espacios grandes 3LCD de 20 000 lúmenes con mejora 4K
      EB-PU2113W Proyector láser 3LCD de 13 000 lúmenes con mejora 4K
      EB-PU2213B Proyector láser 3LCD de 13 000 lúmenes con mejora 4K
      EB-PU1008B Proyector láser WUXGA 3LCD con mejora 4K
      Proyector láser 3LCD WUXGA EB-PU1008W con mejora 4K
      EB-PU2010B Proyector láser WUXGA 3LCD con mejora 4K
      EB-PU2010W Proyector láser WUXGA 3LCD con mejora 4K
      EB-PU1006W Proyector láser WUXGA 3LCD con mejora 4K
      EB-PU1007B WUXGA 3LCD Laser Projector with 4K Enhancement
      EB-PU1007W WUXGA 3LCD Laser Projector with 4K Enhancement  
    
    Proyectores interactivos y herramientas de colaboración:
      BrightLink 760Wi WXGA 3LCD Pantalla láser interactiva sin lámpara
      BrightLink 770Fi 1080p 3LCD Pantalla láser sin lámpara interactiva de alcance ultracorto
      Pantalla láser interactiva BrightLink 725Wi WXGA 3LCD
      Pantalla láser interactiva BrightLink 735Fi 1080p 3LCD
      Pantalla láser interactiva BrightLink 1480Fi 1080p 3LCD
      Pantalla láser interactiva BrightLink 1485Fi 1080p 3LCD
    
    Proyectores de aula:
      Pantalla láser sin lámpara PowerLite 810E 3LCD de tiro corto extremo con mejora 4K
      Pantalla láser sin lámpara PowerLite L210W WXGA 3LCD con conexión inalámbrica integrada
      Pantalla láser PowerLite L260F 1080p 3LCD sin lámpara con conexión inalámbrica integrada
      Pantalla láser PowerLite L265F 1080p 3LCD sin lámpara con conexión inalámbrica integrada
      Pantalla láser sin lámpara PowerLite 775F 1080p 3LCD de alcance ultracorto
      PowerLite L210SF Wireless 1080p 3LCD Pantalla láser sin lámpara de tiro corto
      PowerLite L210SW Wireless WXGA 3LCD Pantalla láser sin lámpara de tiro corto
      Pantalla láser sin lámpara PowerLite de 760 W inalámbrica WXGA 3LCD de alcance ultracorto
      Pantalla láser sin lámpara PowerLite 770F 1080p 3LCD de alcance ultracorto
      PowerLite L255F 1080p 3LCD Standard-Throw Laser Projector with Built-in Wireless
      PowerLite L250F 1080p 3LCD Standard-Throw Laser Projector with Built-in Wireless
      PowerLite L200X 3LCD XGA Laser Projector with Built-in Wireless
      PowerLite L200W 3LCD WXGA Laser Projector with Built-in Wireless
      PowerLite L200SW Wireless WXGA 3LCD Short-throw Laser Display
      PowerLite L200SX Wireless XGA 3LCD Short-throw Laser Display
      PowerLite 725W WXGA 3LCD Ultra Short-throw Laser Display
      PowerLite 720 XGA 3LCD Ultra Short-throw Laser Display
      PowerLite 750F Full HD 1080p Ultra Short-throw Laser Projector with Built-in Wireless
      PowerLite 755F Full HD 1080p Ultra Short-throw Laser Projector for Digital Signage with Built-in Wireless
      PowerLite 800F Full HD 1080p Ultra Short-throw Laser Projector for Classrooms
      PowerLite 118 3LCD XGA Classroom Projector with Dual HDMI
      Proyector de aula PowerLite 119W 3LCD WXGA con HDMI doble
      Proyector de aula PowerLite 982W 3LCD WXGA con HDMI doble
      Proyector de aula PowerLite W49 3LCD WXGA con HDMI
      Proyector de aula PowerLite X49 3LCD XGA con HDMI
    
    Señalización digital:
      Proyector láser de corto alcance PowerLite L630SU Full HD WUXGA
      Proyector láser de corto alcance PowerLite L635SU Full HD WUXGA
      Proyector láser PowerLite L735U Full HD WUXGA 3LCD
      Proyector láser de alcance ultracorto PowerLite 805F Full HD 1080p para señalización digital
`,
  },
].map(
  (product) =>
    ({
      ...product,
      price:
        product.condition === "reconditioned"
          ? +Math.floor(
              product.price - (product.price * DISCOUNT_PERCENTAGE || 0),
            ).toFixed(2)
          : +product.price,
      ...(product.lumensANSI && {
        throwRatio:
          product.lumensANSI >= 3000
            ? "Proyección media/alta"
            : "Proyección media/estándar",
      }),
    }) as Product,
);
