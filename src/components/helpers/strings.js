import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaMailBulk,
  FaHome
} from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";
import { MdLaptopMac } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

export const navBarOptions = [
  { icon: <FaHome/>, category: "Home", id: 1, to: "/" },
  { iconN:"https://firebasestorage.googleapis.com/v0/b/proyecto-react-coderhous-192d5.appspot.com/o/graphics-card.png?alt=media&token=60a10f84-bcff-4363-afe1-808b3fd71e44", category: "Video card", id: 2, to: "/category/placas-video"},
  { icon: <TfiMobile/>, category: "Celular", id: 3, to: "/category/celular" },
  { icon: <MdLaptopMac/>, category: "Notebook", id: 4, to: "/category/notebook" },
];

export const footerContact = [
  { icon: <FaWhatsapp />, id: 1, contact: 5491156274178 },
  { icon: <FaPhone />, id: 2, contact: "3731-1522 / 6572-5044" },
  { icon: <FaMailBulk />, id: 3, contact: "ventas@electroshop.com" },
  {icon: <FaMapMarkerAlt />, id: 4, contact: "Mauro A. Le Bretón 5358",},
];

export const metodosPagos = [
  {src: "https://www.tiendabna.com.ar/assets/stores/current_store/images/visa-platinum.png", id:1, alt:"credit card"},
  {src: "https://www.tiendabna.com.ar/assets/stores/current_store/images/mastercard-platinum.png", id:2, alt:"credit card"},
  {src: "https://www.tiendabna.com.ar/assets/stores/current_store/images/visa-internacional.png", id:3, alt:"credit card"},
  {src: "https://www.tiendabna.com.ar/assets/stores/current_store/images/mastercard-internacional.png", id:4, alt:"credit card"},
  {src: "https://www.tiendabna.com.ar/assets/stores/current_store/images/visa-gold.png", id:5, alt:"credit card"},
  {src: "https://www.tiendabna.com.ar/assets/stores/current_store/images/mastercard-gold.png", id:6, alt:"credit card"},
  {src: "https://www.tiendabna.com.ar/assets/stores/current_store/images/visa-signature.png", id:7, alt:"credit card"},
  {src: "https://www.tiendabna.com.ar/assets/stores/current_store/images/mastercard-black.png", id:8, alt:"credit card"},
]

export const footerSocialLinks = [
  {href:"https://www.facebook.com/", icon: <TiSocialFacebook/>, id:1 },
  {href:"https://www.instagram.com/", icon: <TiSocialInstagram/>, id:2},
  {href:"https://twitter.com/home", icon: <TiSocialTwitter/>, id:3}
]