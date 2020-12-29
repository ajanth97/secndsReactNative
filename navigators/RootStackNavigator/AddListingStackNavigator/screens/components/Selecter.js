import React from "react";
import { Select, SelectItem, IndexPath } from "@ui-kitten/components";

export default function Selecter(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const data = props.data;
  const displayValue = data[selectedIndex.row];

  const renderOption = (title, key) => <SelectItem title={title} key={key} />;

  const list = data.map(renderOption);

  return (
    <Select
      placeholder="Select a Category"
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
      value={displayValue}
    >
      {list}
    </Select>
  );
}
