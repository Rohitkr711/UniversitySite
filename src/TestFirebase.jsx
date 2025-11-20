import { useEffect } from "react";
import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function TestFirebase() {
  useEffect(() => {
    async function test() {
      try {
        // simply try reading a collection that doesn't exist yet
        const snap = await getDocs(collection(db, "testCollection"));
        console.log("Firebase connected! Documents:", snap.docs.length);
      } catch (err) {
        console.error("Firebase ERROR:", err);
      }
    }
    test();
  }, []);

  return (
    <div className="p-6 text-center text-lg">
      Testing Firebase... Check your console!
    </div>
  );
}
