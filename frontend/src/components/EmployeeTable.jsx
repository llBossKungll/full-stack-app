// src/components/EmployeeTable.jsx
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EmployeeTable = ({ data }) => {
  const [filterText, setFilterText] = useState("");

  const columns = [
    { name: 'First Name', selector: row => row.first_name, sortable: true },
    { name: 'Last Name', selector: row => row.last_name, sortable: true },
    { name: 'Nick Name', selector: row => row.nick_name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Department', selector: row => row.department, sortable: true },
    { name: 'Telephone', selector: row => row.tel, sortable: true },
    {
      name: 'Actions',
      cell: row => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row)}
            className="px-2 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded text-sm"
          >
            แก้ไข
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
          >
            ลบ
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleEdit = (row) => {
    // TODO: เปิด Modal หรือ นำข้อมูลไปแก้ไข
    console.log("📝 Edit:", row);
  };

  const handleDelete = (id) => {
    if (confirm("❗ คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?")) {
      // TODO: ส่ง request ไปลบจาก backend
      console.log("🗑️ Delete ID:", id);
    }
  };


  // ฟิลเตอร์ข้อมูล
  const filteredData = data.filter(item =>
    `${item.first_name} ${item.last_name} ${item.email} ${item.department} ${item.tel} ${item.nick_name}`
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );

  const customStyles = {
    header: {
      style: {
        minHeight: '56px',
      },
    },
    headRow: {
      style: {
        backgroundColor: '#f0f0f0',
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        fontSize: '15px',
        '&:hover': {
          backgroundColor: '#e0f7fa',
        },
      },
    },
    pagination: {
      style: {
        borderTop: '1px solid #e5e5e5',
        paddingTop: '10px',
      },
    },
  };

  const insertUser = () => {
    console.log("🔍 Insert User");
  };

  return (

    <div className="p-4 bg-white rounded shadow">
      
      <div className="flex justify-between items-center mb-4">
        <div className="px-2 py-1 bg-blue-400 hover:bg-blue-500 text-white rounded text-sm">
          <FontAwesomeIcon icon={faPlus} />
          <button className='ml-2 text-m' onClick={() => insertUser()}>เพิ่มพนักงาน</button>
        </div>


        <div className="mb-4">
          <input
            type="text"
            placeholder="🔍 ค้นหาพนักงาน..."
            className="w-65 p-2 border rounded text-end"
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg">
        <DataTable

          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          striped
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default EmployeeTable;
