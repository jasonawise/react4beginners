import React from "react";
import { format } from "util";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          name=""
          id=""
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -> </button>
      </form>
    );
  }
}

export default StorePicker;
