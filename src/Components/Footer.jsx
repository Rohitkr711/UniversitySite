import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-6 mt-12 px-44">
      <div className="container mx-auto flex justify-between items-center">
        <p>© {year} Kolhan University. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
