import {FaInstagram,FaPhone} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

export default function Alt_bilgi() {
    return (
        <footer className="grid grid-cols-3 items-center bg-gray-800 px-8 py-4 text-white">
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">İletişim</h3>
                <a href="tel:+90" className="flex items-center gap-2">
                    <FaPhone />
                </a>
                <a href="mailto:quanteulix@gmail.com" className="flex items-center gap-2">
                    <SiGmail />
                </a>
                <a href="https://www.instagram.com/quanteulix/" className="flex items-center gap-2">
                    <FaInstagram /> 
                </a>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Telif Hakkı</h3>
                <p>
                    QUANTEULIX 2026 Tüm hakları saklıdır.
                </p>
            </div>
        </footer>
    )
}
