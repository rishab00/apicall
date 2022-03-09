import React from "react";

const Sfilter = (props) => {
  const [initialDataList, setInitialDataList] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const requestUrl = `https://jsonplaceholder.typicode.com/users/`;

  React.useEffect(() => {
    fetch(requestUrl)
      .then((res) => res.json())
      .then((data) => {
        setInitialDataList(data);
        setFilteredData(data);
      });
  }, []);

  React.useEffect(() => {
    if (props.searchVal) {
      setFilteredData(
        initialDataList.filter(
          (item) =>
            item.name.toLowerCase().indexOf(props.searchVal.toLowerCase()) >= 0
        )
      );
    } else {
      setFilteredData(initialDataList);
    }
  }, [props.searchVal]);
  return (
    <table>
      {filteredData.length ? (
        filteredData.map((item) => (
          <tr>
            <td>{item.name}</td>
          </tr>
        ))
      ) : (
        <tr>No result found</tr>
      )}
    </table>
  );
};

export default Sfilter;
