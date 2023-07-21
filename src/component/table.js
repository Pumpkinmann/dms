import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {
  selectFilter,
  Comparator,
  dateFilter,
} from "react-bootstrap-table2-filter";
import "./table.css";

const Table = () => {
  const type_filter = {
    异丙醇: "异丙醇",
    异丁醇: "异丁醇",
    正丙醇: "正丙醇",
    仲丁醇: "仲丁醇",
    正丁醇: "正丁醇",
    叔丁醇: "叔丁醇",
    "C9-C16": "C9-C16",
    "C5-C7": "C5-C7",
    "C8-2": "C8-2",
    C4: "C4",
    "C8-1": "C8-1",
    合计: "合计",
    总醇含量: "总醇含量",
    C12: "C12",
    "C13-C15": "C13-C15",
    C16: "C16",
    "C9-C11": "C9-C11",
    水份: "水份",
    醇含量: "醇含量",
    总C8: "总C8",
    丙烷: "丙烷",
    丙烯: "丙烯",
    反丁烯: "反丁烯",
    顺丁烯: "顺丁烯",
    异丁烷: "异丁烷",
    正丁烯: "正丁烯",
    正丁烷: "正丁烷",
    C3: "C3",
    "1,3丁二烯": "1,3丁二烯",
    异丁烯: "异丁烯",
    总烯: "总烯",
    总烷: "总烷",
    "其他C4-C5": "其他C4-C5",
    PH值: "PH值",
    "C8-1的选择性": "C8-1的选择性",
    C8的选择性: "C8的选择性",
    总醇含量ppm: "总醇含量ppm",
    选择转化率: "选择转化率",
    TBA: "TBA",
    IB转化率: "IB转化率",
    最近82103中总烷: "最近82103中总烷",
    最近82103中异丁烯: "最近82103中异丁烯",
    非选反丁烯转化率: "非选反丁烯转化率",
    非选总烯转化率: "非选总烯转化率",
    非选异丁烯转化率: "非选异丁烯转化率",
    非选正丁烯转化率: "非选正丁烯转化率",
    非选顺丁烯转化率: "非选顺丁烯转化率",
    "非选C8-C12选择性": "非选C8-C12选择性",
    非选C8选择性: "非选C8选择性",
    C8前: "C8前",
    新出C8峰: "新出C8峰",
    游离水: "游离水",
    无游离水: "无游离水",
    "C5-C11": "C5-C11",
  };
  const selectOptions = {
    HT82103: "HT82103",
    HT82106: "HT82106",
    HT82106B: "HT82106B",
    HT82111: "HT82111",
    HT82112: "HT82112",
    HT82121: "HT82121",
    HT82122: "HT82122",
    HT82131: "HT82131",
    HT82132: "HT82132",
    HT82201: "HT82201",
    HT82211: "HT82211",
    HT82212: "HT82212",
    HT82221: "HT82221",
    HT82222: "HT82222",
    HT82231: "HT82231",
    HT82232: "HT82232",
    HT82251: "HT82251",
    HT82252: "HT82252",
    HT82502: "HT82502",
    HT82503: "HT82503",
    HTV31010A: "HTV31010A",
    HTV31030: "HTV31030",
    HTV32010A: "HTV32010A",
    HTV32010B: "HTV32010B",
    HTV32020B: "HTV32020B",
    HTV32040: "HTV32040",
  };
  const defaultSorted = [
    {
      dataField: "USERT1",
      order: "asc",
    },
    {
      dataField: "USERD1",
      order: "desc",
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  // const getData = () => {
  //   axios("http://localhost:5000/api/2023").then((res) => setData(res.data));
  // };
  const getData = () => {
    axios("https://jsonplaceholder.typicode.com/comments").then((res) => setData(res.data));
  };
  const columns = [
    {
      dataField: "MATNR",
      text: "节点",
      filter: selectFilter({
        defaultValue: "",
        options: selectOptions,
        placeholder: "全部",
        text: "",
        className: "filter-modified",
      }),
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "USERD1",
      text: "",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
      filter: dateFilter({
        defaultValue: { comparator: Comparator.EQ },
        placeholder: "日期筛选",
        text: "",
        className: "filter-modified date_picker",
        comparator: Comparator.EQ,
      }),
    },
    {
      dataField: "KURZTEXT",
      text: "检测项目",
      filter: selectFilter({
        defaultValue: "",
        options: type_filter,
        placeholder: "全部",
        text: "",
        className: "filter-modified",
      }),
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "USERT1",
      text: "时间",
      order: "desc",
      sort: true,
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },

    {
      dataField: "ZJYY",
      text: "检测人",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
    {
      dataField: "ORIGINAL_INPUT",
      text: "数值",
      style: { backgroundColor: "#f6f6f6" },
      headerStyle: { backgroundColor: "#409EFF" },
    },
  ];
  return <BootStrapTable
  id="table"
  keyField="id"
  data={data}
  columns={columns}
  hover
  condensed
  pagination={paginationFactory({ sizePerPage: 20 })}
  filter={filterFactory()}
  defaultSorted={ defaultSorted }
></BootStrapTable>
};
export default Table;