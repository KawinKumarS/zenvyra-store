// ZENVYRA R&D - Firebase Cloud Engine & Firestore Data Bridge
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy,
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVx-u_P_Ft9XnDsasErTzzyV8I8DO_OZY",
  authDomain: "website-77f78.firebaseapp.com",
  projectId: "website-77f78",
  storageBucket: "website-77f78.firebasestorage.app",
  messagingSenderId: "224026991398",
  appId: "1:224026991398:web:057a679fe4d53a25d57fe7",
  measurementId: "G-3PSQ15YFFT"
};

// Initialize Firebase App & Services
const app = initializeApp(firebaseConfig);

let analytics = null;
try {
  analytics = getAnalytics(app);
  console.log("[ZENVYRA TELEMETRY] Firebase Analytics live connection established.");
} catch (e) {
  console.info("[ZENVYRA TELEMETRY] Firebase Analytics operating in local sandbox standby.");
}

const db = getFirestore(app);

// ============================================================================
// FIRESTORE R&D DESK REPOSITORY METHODS
// ============================================================================

const COLLECTION_NAME = 'rnd_inquiries';
const LOCAL_BACKUP_KEY = 'zenvyra_rnd_saved_briefs';

async function saveRnDInquiry(inquiryData) {
  const payload = {
    ...inquiryData,
    status: 'NEW_BRIEF',
    createdDate: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    createdTime: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    timestamp: Date.now()
  };

  // 1. Save to Offline Local Backup first for zero-loss redundancy
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_BACKUP_KEY) || '[]');
    existing.unshift(payload);
    localStorage.setItem(LOCAL_BACKUP_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn("Local storage backup notice:", err);
  }

  // 2. Transmit directly into Firebase Firestore cloud storage
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...payload,
      serverTime: serverTimestamp()
    });
    console.log("[ZENVYRA FIRESTORE] R&D Engineering Brief archived with Cloud ID:", docRef.id);
    payload.id = docRef.id;
    return { success: true, id: docRef.id, payload };
  } catch (error) {
    console.error("[ZENVYRA FIRESTORE ERROR] Could not push to cloud database (using offline storage fallback):", error);
    return { success: true, id: 'OFFLINE_' + Date.now(), payload, offlineOnly: true };
  }
}

async function getRnDInquiries() {
  let results = [];
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    console.log(`[ZENVYRA FIRESTORE] Loaded ${results.length} R&D briefs from cloud database.`);
  } catch (error) {
    console.warn("[ZENVYRA FIRESTORE] Notice while fetching cloud R&D records (loading offline cache):", error);
  }

  // Merge with offline cache to ensure all locally simulated items appear in admin desk
  try {
    const localCache = JSON.parse(localStorage.getItem(LOCAL_BACKUP_KEY) || '[]');
    localCache.forEach(localItem => {
      if (!results.some(r => r.timestamp === localItem.timestamp || (r.phone === localItem.phone && r.query === localItem.query))) {
        results.push(localItem);
      }
    });
  } catch (e) {}

  // Sort by newest timestamp first
  results.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  return results;
}

// Attach to global scope for application & admin access
window.ZenvyraFirebase = {
  app: app,
  analytics: analytics,
  db: db,
  config: firebaseConfig,
  saveRnDInquiry: saveRnDInquiry,
  getRnDInquiries: getRnDInquiries
};

console.log("[ZENVYRA CLOUD ENGINE] Firebase infrastructure securely bridged to project:", firebaseConfig.projectId);

export { app, analytics, db, saveRnDInquiry, getRnDInquiries };
