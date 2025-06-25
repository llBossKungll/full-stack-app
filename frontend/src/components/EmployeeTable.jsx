// src/components/EmployeeTable.jsx
import DataTable from 'react-data-table-component';
import { useState } from 'react';

const EmployeeTable = ({ data }) => {
  const [filterText, setFilterText] = useState("");

  const columns = [
    { name: 'First Name', selector: row => row.first_name, sortable: true },
    { name: 'Last Name', selector: row => row.last_name, sortable: true },
    { name: 'Nick Name', selector: row => row.nick_name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Department', selector: row => row.department, sortable: true },
    { name: 'Telephone', selector: row => row.tel, sortable: true },
  ];

  // ฟิลเตอร์ข้อมูล
  const filteredData = data.filter(item =>
    `${item.first_name} ${item.last_name} ${item.email} ${item.department}`
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

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="🔍 ค้นหาพนักงาน..."
          className="w-65 p-2 border rounded text-end"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />
      </div>

      <div className="rounded-lg">
        <DataTable
          title="📋 รายชื่อพนักงาน"
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
