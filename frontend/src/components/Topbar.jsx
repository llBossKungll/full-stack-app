// components/Topbar.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';


export default function Topbar({ title = "home" }) {
  return (
    <div className="flex justify-between items-center p-4 h-25 w-full">
      <div className="border-2 border-white ml-4 h-12 w-30 rounded-4xl items-center flex justify-center">
        <h1 className="text-xl capitalize font-bold">{title}</h1>
      </div>

      <div className="flex gap-4 items-center">
        <div className="items-center flex gap-2 p-3 rounded-full bg-white">
          <FontAwesomeIcon icon={faGear} />
          <span>setting</span>
        </div>

        <FontAwesomeIcon icon={faBell} className="bg-white p-4 items-center flex gap-2 rounded-full" />

        <div className="bg-white p-2 items-center flex gap-2 rounded-full">
          <img src="" alt="" className="w-8 h-8 rounded-full" />
        </div>

      </div>
    </div>
  );
}
