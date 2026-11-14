// Sirf yeh file edit karni he (adminEmail apna Firebase admin email likhein)
export const firebaseConfig = {
  apiKey: "AIzaSyBsyAGuJ8YViquuVx9Fb6BJW-7AZ1qpbqs",
  authDomain: "al-ali-store.firebaseapp.com",
  projectId: "al-ali-store",
  appId: "1:999496512121:web:1e7a558d2953c95e6e5aa8"
};
export const cloudinary = { cloudName: "koqp58zg", preset: "ali alic" };
export const adminEmail = "YOUR_ADMIN_EMAIL";
export const defaults = {
  name: "AL ALI Store", head: "Sound that feels like you.", sub: "Premium earbuds, headphones and accessories. Delivered to your door, pay when it arrives.",
  btn: "Shop earbuds", ann: "Cash on Delivery nationwide", wa: "", del: 200, fh: "Small size, big sound.",
  c: { p: "#8b5cf6", s: "#f472b6", bg: "#07060d", tx: "#f2eefc" }, font: "Serif", mat: "Glass", cols: 2, hero: true, acc: true, login: false,
  meth: { Email: true, Google: true },
  cats: ["Bluetooth Earbuds", "Gaming Headphones", "iPhone Accessories", "Speakers", "Adapters"],
  order: [["hero", 1], ["features", 1], ["products", 1], ["account", 1], ["contact", 1]]
};
