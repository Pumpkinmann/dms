import axios from "axios";
import { useState, useEffect } from "react";
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {
  selectFilter,
  Comparator,
  dateFilter,
} from "react-bootstrap-table2-filter";
import React from "react";
import "./table.css";

const selectOptions = {
  82103: "82103",
  82106: "82106",
  "82106B": "82106B",
  82111: "82111",
  82112: "82112",
  82121: "82121",
  82122: "82122",
  82131: "82131",
  82132: "82132",
  82201: "82201",
  82211: "82211",
  82212: "82212",
  82221: "82221",
  82222: "82222",
  82231: "82231",
  82232: "82232",
  82251: "82251",
  82252: "82252",
  82502: "82502",
  82503: "82503",
  V31010A: "V31010A",
  V31030: "V31030",
  V32010A: "V32010A",
  V32010B: "V32010B",
  V32020B: "V32020B",
  V32040: "V32040",
};

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("http://localhost:5000/api/2023").then(res=>setData(res.data))
  }

  const columns = [
    {
      dataField: "ORIGINAL_INPUT",
      text: "节点",
      filter: selectFilter({
        defaultValue: "",
        options: selectOptions,
        placeholder: "筛选",
        text: "",
        className: "filter-modified",
      }),
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
      filter: dateFilter({
        defaultValue: "",
        placeholder: "日期筛选",
        text: "",
        className: "filter-modified",
        comparator: Comparator.EQ,
        // defaultValue: {
        //   comparator: Comparator.EQ,
        // },
      }),
    },
    {
      dataField: "ORIGINAL_INPUT",
      text: "时间",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "检测人",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "C3%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "异丁烷%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "正丁烷%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "反丁烯%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "正丁烯%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "异丁烯%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "顺丁烯%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "丙烷%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "丙烯%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "1 , 3丁二烯%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "C5 ~ C7%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "C9 ~ C11%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "C8 — 2%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "C13 ~ C15%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "C16%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "TBA%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "总烷%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "email",
      text: "总烯%",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
  ];
  return (
    <React.Fragment>
      <div className="App">
        <BootStrapTable
          keyField="id"
          data={data}
          columns={columns}
          hover
          pagination={paginationFactory({ sizePerPage: 10 })}
          filter={filterFactory()}
        ></BootStrapTable>
      </div>
    </React.Fragment>
  );
}

export default App;
