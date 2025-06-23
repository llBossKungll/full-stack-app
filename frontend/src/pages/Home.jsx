import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex justify-between items-center p-4 h-25 w-full">
      <div className="bg-gray-200 ml-4 h-12 w-30 rounded-4xl items-center flex justify-center">
        <h1 className="text-2xl ">Home</h1>
      </div>

      <div className="flex gap-4 items-center">
        <div className="items-center flex gap-2 p-3 rounded-full bg-gray-200">
          <FontAwesomeIcon icon={faGear} />
          <span className=''>setting</span>
          </div>
        <FontAwesomeIcon icon={faBell} />
        <img src="" alt="" className="w-8 h-8 rounded-full" />
      </div>
    </div>

  );
}
