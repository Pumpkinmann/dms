import axios from "axios";
import { useState, useEffect } from "react";
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";

const selectOptions = {
  2: '2',
  5: '5',
  40: '40'
};

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data)

    });
  };
  const emailFormatter = (data, row) => {
    return<span onClick={() => alert("You clicked")}>
    Email = {data}</ span>
  }
  const columns = [
    {
      dataField: "email",
      text: "Email",
      formatter: emailFormatter

    },
    {
      dataField: "postId",
      text: "Product ID",
      sort: true,
      filter: selectFilter({
        options: selectOptions
      })
    },
    {
      dataField: "name",
      text: "Name",
    }
  ];
  return (
    <div className="App">
      <BootStrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
        filter={filterFactory()}
      ></BootStrapTable>
    </div>
  );
}

export default App;
