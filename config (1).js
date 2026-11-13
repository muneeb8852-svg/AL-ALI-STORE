// Sirf Firebase / Cloudinary keys yahan hen. Baqi sab kuch admin panel se badlega.
export const firebaseConfig = {
  apiKey: "AIzaSyBsyAGuJ8YViquuVx9Fb6BJW-7AZ1qpbqs",
  authDomain: "al-ali-store.firebaseapp.com",
  projectId: "al-ali-store",
  appId: "1:999496512121:web:1e7a558d2953c95e6e5aa8"
};
export const cloudinary = { cloudName: "koqp58zg", preset: "ali alic" };
export const demo = firebaseConfig.apiKey.startsWith("YOUR");
export const defaults = {
  name: "AL ALI STORE", heroTitle: "Sound jo aap ke style se match kare", heroSub: "Earbuds, gaming headphones aur adapters. Cash on Delivery.",
  announce: "🚚 Poore Pakistan mein Cash on Delivery", whatsapp: "", delivery: 200, accent: "#2997ff",
  panels: [
    { title: "Bluetooth Earbuds", image: "", cat: "Bluetooth Earbuds" },
    { title: "Gaming Headphones", image: "", cat: "Gaming Headphones" },
    { title: "Smart Watches", image: "", cat: "" }
  ],
  categories: [
    { name: "Bluetooth Earbuds", icon: "🎧" }, { name: "Gaming Headphones", icon: "🎮" },
    { name: "Adapters", icon: "🔌" }, { name: "Chargers & Cables", icon: "⚡" }, { name: "Speakers", icon: "🔊" }
  ]
};
