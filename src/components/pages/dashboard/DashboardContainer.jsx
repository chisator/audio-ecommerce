import { Dashboard } from "./Dashboard";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
const generarDocumentos = () => {
  let productos = [
    {
      slug: "yx1-earphones",
      subName: "YX1 Wireless",
      name: "YX1 Wireless Earphones",
      image:
        "https://res.cloudinary.com/dnqfh2chg/image/upload/v1687462647/image_eha3mu.png",
      category: "earphones",
      categoryImage:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637814/audiophileEcommerce/product-yx-earphones/desktop/image-category-page-preview_rwwuhl.jpg",
      new: true,
      stock: 10,
      price: 599,
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      features:
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      includes: [
        {
          quantity: 2,
          item: "Earphone unit",
        },
        {
          quantity: 6,
          item: "Multi-size earplugs",
        },
        {
          quantity: 1,
          item: "User manual",
        },
        {
          quantity: 1,
          item: "USB-C charging cable",
        },
        {
          quantity: 1,
          item: "Travel pouch",
        },
      ],
      gallery: {
        first:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637813/audiophileEcommerce/product-yx-earphones/desktop/image-gallery-1_d8oasd.jpg",
        second:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637813/audiophileEcommerce/product-yx-earphones/desktop/image-gallery-2_sb08cp.jpg",
        third:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637814/audiophileEcommerce/product-yx-earphones/desktop/image-gallery-3_ldmge9.jpg",
      },
    },
    {
      slug: "xx59-headphones",
      subName: "XX59",
      name: "XX59 Headphones",
      image:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638015/audiophileEcommerce/product-xx59-headphones/desktop/image-product_uuwbxi.jpg",
      category: "headphones",
      categoryImage:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638014/audiophileEcommerce/product-xx59-headphones/desktop/image-category-page-preview_qhdefh.jpg",
      new: false,
      stock: 10,
      price: 899,
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      features:
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
      includes: [
        {
          quantity: 1,
          item: "Headphone unit",
        },
        {
          quantity: 2,
          item: "Replacement earcups",
        },
        {
          quantity: 1,
          item: "User manual",
        },
        {
          quantity: 1,
          item: "3.5mm 5m audio cable",
        },
      ],
      gallery: {
        first:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638014/audiophileEcommerce/product-xx59-headphones/desktop/image-gallery-1_m0lezl.jpg",
        second:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638014/audiophileEcommerce/product-xx59-headphones/desktop/image-gallery-2_xszkae.jpg",
        third:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638014/audiophileEcommerce/product-xx59-headphones/desktop/image-gallery-3_ewaxcz.jpg",
      },
    },
    {
      slug: "xx99-mark-one-headphones",
      subName: "XX99 MK I",
      name: "XX99 Mark I Headphones",
      image:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637715/audiophileEcommerce/product-xx99-mark-one-headphones/desktop/image-product_vazjze.jpg",
      category: "headphones",
      categoryImage:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637715/audiophileEcommerce/product-xx99-mark-one-headphones/desktop/image-category-page-preview_fsabid.jpg",
      new: false,
      stock: 10,
      price: 1750,
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      features:
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
      includes: [
        {
          quantity: 1,
          item: "Headphone unit",
        },
        {
          quantity: 2,
          item: "Replacement earcups",
        },
        {
          quantity: 1,
          item: "User manual",
        },
        {
          quantity: 1,
          item: "3.5mm 5m audio cable",
        },
      ],
      gallery: {
        first:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637715/audiophileEcommerce/product-xx99-mark-one-headphones/desktop/image-gallery-1_b5kkko.jpg",
        second:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637715/audiophileEcommerce/product-xx99-mark-one-headphones/desktop/image-gallery-2_tthziv.jpg",
        third:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637715/audiophileEcommerce/product-xx99-mark-one-headphones/desktop/image-gallery-3_fh6rqp.jpg",
      },
    },
    {
      slug: "xx99-mark-two-headphones",
      subName: "XX99 MK II",
      name: "XX99 Mark II Headphones",
      image:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637969/audiophileEcommerce/product-xx99-mark-two-headphones/desktop/image-product_tfrhrx.jpg",
      category: "headphones",
      categoryImage:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637968/audiophileEcommerce/product-xx99-mark-two-headphones/desktop/image-category-page-preview_q5sfc2.jpg",
      new: true,
      stock: 10,
      price: 2999,
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      features:
        "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
      includes: [
        {
          quantity: 1,
          item: "Headphone unit",
        },
        {
          quantity: 2,
          item: "Replacement earcups",
        },
        {
          quantity: 1,
          item: "User manual",
        },
        {
          quantity: 1,
          item: "3.5mm 5m audio cable",
        },
        {
          quantity: 1,
          item: "Travel bag",
        },
      ],
      gallery: {
        first:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637968/audiophileEcommerce/product-xx99-mark-two-headphones/desktop/image-gallery-1_cw0ydw.jpg",
        second:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637968/audiophileEcommerce/product-xx99-mark-two-headphones/desktop/image-gallery-2_y8hgp7.jpg",
        third:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637969/audiophileEcommerce/product-xx99-mark-two-headphones/desktop/image-gallery-3_cndwp5.jpg",
      },
    },
    {
      slug: "zx7-speaker",
      subName: "ZX7",
      name: "ZX7 Speaker",
      image:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638036/audiophileEcommerce/product-zx7-speaker/desktop/image-product_r6smeq.jpg",
      category: "speakers",
      categoryImage:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638035/audiophileEcommerce/product-zx7-speaker/desktop/image-category-page-preview_swegpv.jpg",
      new: false,
      stock: 10,
      price: 3500,
      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      features:
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
      includes: [
        {
          quantity: 2,
          item: "Speaker unit",
        },
        {
          quantity: 2,
          item: "Speaker cloth panel",
        },
        {
          quantity: 1,
          item: "User manual",
        },
        {
          quantity: 1,
          item: "3.5mm 7.5m audio cable",
        },
        {
          quantity: 1,
          item: "7.5m optical cable",
        },
      ],
      gallery: {
        first:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638035/audiophileEcommerce/product-zx7-speaker/desktop/image-gallery-1_u6eukg.jpg",
        second:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638035/audiophileEcommerce/product-zx7-speaker/desktop/image-gallery-2_eeidh3.jpg",
        third:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682638036/audiophileEcommerce/product-zx7-speaker/desktop/image-gallery-3_tt8iyg.jpg",
      },
    },
    {
      slug: "zx9-speaker",
      subName: "ZX9",
      name: "ZX9 Speaker",
      image:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682640128/audiophileEcommerce/product-zx9-speaker/desktop/image-product_w2kox6.jpg",
      category: "speakers",
      categoryImage:
        "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682640127/audiophileEcommerce/product-zx9-speaker/desktop/image-category-page-preview_sbk3py.jpg",
      new: true,
      stock: 10,
      price: 4500,
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features:
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      includes: [
        {
          quantity: 2,
          item: "Speaker unit",
        },
        {
          quantity: 2,
          item: "Speaker cloth panel",
        },
        {
          quantity: 1,
          item: "User manual",
        },
        {
          quantity: 1,
          item: "3.5mm 10m audio cable",
        },
        {
          quantity: 1,
          item: "10m optical cable",
        },
      ],
      gallery: {
        first:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682640127/audiophileEcommerce/product-zx9-speaker/desktop/image-gallery-1_kgc0dc.jpg",
        second:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682640128/audiophileEcommerce/product-zx9-speaker/desktop/image-gallery-2_cozywr.jpg",
        third:
          "https://res.cloudinary.com/dwqrlr45w/image/upload/v1682640128/audiophileEcommerce/product-zx9-speaker/desktop/image-gallery-3_muuckn.jpg",
      },
    },
  ];
  let refCollection = collection(db, "products");
  productos.forEach((element)=>{

    addDoc(refCollection,element);
  })

};
export const DashboardContainer = () => {
  return <Dashboard generarDocumentos={generarDocumentos} />;
};
