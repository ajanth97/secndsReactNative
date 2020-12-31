import RNPickerSelect from "react-native-picker-select";
import React from "react";
import { StyleSheet } from "react-native";

class Pick extends React.Component {
  render() {
    return (
      <RNPickerSelect
        style={pickerSelectStyles}
        placeholder={{
          label: this.props.placeholder,
          value: null,
        }}
        onValueChange={(value) => console.log(value)}
        items={this.props.items}
      />
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 26,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: "black",
    borderRadius: 0,

    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Pick;
