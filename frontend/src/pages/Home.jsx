import { useEffect, useState } from 'react';
import EmployeeTable from '../components/EmployeeTable';

export default function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees') // หรือ API ที่คุณใช้
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div className="p-4 rounded-lg bg-gray-100 shadow-md">
      <EmployeeTable data={employees} />
    </div>
  );
}
