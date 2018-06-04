import React from "react";

class AddFishForm extends React.Component {
  render() {
    return (
      <form>
        <input
          name="name
 "
          type="text"
          placeholder=""
        />
        <input
          name="price
"
          type="text"
          placeholder=""
        />
        <input name="status" type="text" placeholder="" />
        <input
          name="desc
 "
          type="text"
          placeholder=""
        />
        <input
          name="image
"
          type="text"
          placeholder=""
        />
      </form>
    );
  }
}

export default AddFishForm;
