import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCat, faDog, faEject } from '@fortawesome/free-solid-svg-icons';



export default function Navbar() {
    return (
        <div className="rounded-lg">
            <nav className="sticky top-0 bottom-0 h-screen left-0 bg-gray-100 overflow-hidden transition-all duration-500 w-17 hover:w-50">

                <ul className="relative">

                    <li className="flex items-center mt-2 mb-12">
                        <img src="../public/img/itsc_thailand_logo.jpg" alt="" className="w-15 h-15 rounded-full ml-1" />
                        <p className="ml-6 text-2xl font-bold uppercase whitespace-nowrap">ITSC</p>
                    </li>

                    <Link to="/">
                        <li className="py-5 w-50 bg-red hover:bg-[#eee] transition">
                            <FontAwesomeIcon icon={faHouse} className="w-[70px] text-center text-[20px]" />
                            <span className="ml-2">หน้าแรก</span>
                        </li>
                    </Link>

                    <Link to="/about">
                        <li className="py-5 w-50 hover:bg-[#eee] transition">
                            <FontAwesomeIcon icon={faEject} className="w-[70px] text-center text-[20px]" />
                            <span className="ml-2">เกี่ยวกับเรา</span>
                        </li>
                    </Link>

                </ul>

            </nav>
        </div>

    );
}
