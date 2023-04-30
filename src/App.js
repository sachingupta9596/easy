import "./styles.css";
import Input from "./Components/Input";
import { useState } from "react";
import Table from "./Components/Table";
import { v4 as uuid } from "uuid";

function newArray(arr, newValue) {
  return [...arr, newValue];
}

export default function App({ originalList }) {
  const [campaignList, setCampaignList] = useState(originalList);

  const unique_id = uuid();

  function handleDelete(e) {
    let newList = campaignList.filter((x) => x.Id !== e);
    localStorage.setItem("userarray", JSON.stringify(newList));
    setCampaignList(newList);
  }
  function handleAdd(newCampaign) {
    console.log(newCampaign.fname);
    for (let i = 0; i < campaignList.length; i++) {
      if (campaignList[i].fname === newCampaign.fname) {
        alert("fname can not be repetitive");
        return;
      }
    }
    newCampaign.Id = unique_id;
    let newList = newArray(campaignList, newCampaign);
    localStorage.setItem("userarray", JSON.stringify(newList));
    setCampaignList(newList);
  }

  function handleSearch(e) {
    console.log(e.target.value);

    const updatedList = JSON.parse(
      window.localStorage.getItem("userarray")
    ).filter((task) => {
      if (task.fname.toLowerCase().indexOf(e.target.value) > -1) {
        return true;
      } else return false;
    });
    console.log(updatedList);
    setCampaignList(updatedList);
  }

  function handleSort() {
    console.log("sorting");
    function compare(a, b) {
      if (a.fname.toLowerCase() < b.fname.toLowerCase()) {
        return -1;
      }
      if (a.fname.toLowerCase() < b.fname.toLowerCase()) {
        return 1;
      }
      return 0;
    }

    campaignList.sort(compare);

    setCampaignList(JSON.parse(JSON.stringify(campaignList)));
  }

  return (
    <div className="App">
      <Input newAddition={handleAdd} />
      <input
        type="search"
        onChange={handleSearch}
        placeholder="Search for the campaign"
        style={{ width: "80vw", borderRadius: "10px" }}
      />
      <Table
        campaignList={campaignList}
        handleDelete={handleDelete}
        handleSort={handleSort}
      />
    </div>
  );
}
