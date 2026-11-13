// ===== SIRF YEH FILE EDIT KARNI HE =====
export const firebaseConfig = {
  apiKey: "AIzaSyBsyAGuJ8YViquuVx9Fb6BJW-7AZ1qpbqs",
  authDomain: "al-ali-store.firebaseapp.com",
  projectId: "al-ali-store",
  appId: "1:999496512121:web:1e7a558d2953c95e6e5aa8"
};
// Cloudinary (free) - product photo upload ke liye (unsigned preset)
export const cloudinary = { cloudName: "koqp58zg", preset: "ali alic" };
export const store = { name: "AL ALI STORE", delivery: 200, whatsapp: "923000000000" };
export const categories = [
  { name: "Bluetooth Earbuds", icon: "🎧" },
  { name: "Gaming Headphones", icon: "🎮" },
  { name: "Adapters", icon: "🔌" },
  { name: "Chargers & Cables", icon: "⚡" },
  { name: "Speakers", icon: "🔊" }
];
export const demo = firebaseConfig.apiKey.startsWith("YOUR");
