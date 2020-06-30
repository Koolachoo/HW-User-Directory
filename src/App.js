import React, { useEffect, useState, useMemo } from "react";
import TableContainer from "./tablecon";
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter } from './filters';

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("https://randomuser.me/api/?results=100")
      const body = await response.json()
      const contacts = body.results
      console.log(contacts)
      setData(contacts)
    }
    doFetch();
  }, []);

  const columns = useMemo(
    () => [
      
      {
        Header: "First Name",
        accessor: "name.first",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals'
      },
      {
        Header: "Last Name",
        accessor: "name.last",
        disableSortBy: false,
        disableFilters: true
      },
      {
        Header: "Email",
        accessor: "email",
        disableSortBy: false,
        disableFilters: true
      },
      {
        Header: "City",
        accessor: "location.city",
        disableSortBy: false,
        disableFilters: true
      },
    ],
    []
  );
  return (
    <Container style={{ marginTop: 100 }}>
  <TableContainer columns={columns} data={data} />
  </Container>
  );
};

export default App;