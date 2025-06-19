import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex justify-between items-center p-4 h-25 w-full">
      <div className="bg-gray-200 px-3 py-5 ml-4 h-20 rounded-4xl text-center">
        <h1 className="text-2xl font-bold">หน้าแรก</h1>
      </div>

      <div className="flex gap-4 items-center">
        <img src="" alt="" className="w-8 h-8 rounded-full" />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>

  );
}
