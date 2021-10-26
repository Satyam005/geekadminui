import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import "./table.css";

function Table() {
  const [data, setData] = useState([]);

  const [selectedRows, setSelectedRows] = useState([]);

  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios
      .get(url)
      .then((response) => {
        const dt = response.data;
        setData(dt);
      })
      .catch((error) => console.log(`Error : ${error}`));
  };

  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Role", field: "role" },
  ];

  const handleBulkDelete = () => {
    const updatedData = data.filter((row) => !selectedRows.includes(row));
    setData(updatedData);
  };
  return (
    <div className="container">
      <MaterialTable
        data={data}
        style={{ width: "100%" }}
        columns={columns}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        editable={{
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data];
              updatedRows[index] = updatedRow;
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          selection: true,
          showTitle: false,
          paging: true,
          pageSize: 10,
          pageSizeOptions: [10],
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "Delete all selected rows",
            onClick: () => handleBulkDelete(),
          },
        ]}
      />
    </div>
  );
}

export default Table;
