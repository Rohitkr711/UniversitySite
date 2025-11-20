import { useState } from "react";

export default function Accordion({ title, children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center py-3 text-left  font-medium text-gray-800 hover:text-blue-600"
            >
                {`${title}`}
                <span>{open ? "-" : "+"}</span>
            </button>
            {open && <div className="pb-4 text-gray-600">{children}</div>}
        </div>
    );
}