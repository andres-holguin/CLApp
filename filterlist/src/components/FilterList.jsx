import React from "react";
import Heading from "./Heading";
import Checkbox from "./Checkbox";

function FilterList(props) {
  function update(name, updatedChecked) {
    // maps through all lists in the passed in lists array
    // updates the original lists by changing the value of the properties.
    // this lets us bypass the read-only restriction of prop variables
    props.lists.map(function (list) {
      list.items = list.items.map(function (element) {
        if (element.name === name) {
          let newElement = element;
          newElement.checked = updatedChecked;
          return newElement;
        } else {
          return element;
        }
      });
      return list;
    });

    // calls the update function passed in by the developer
    props.updateFunction(props.lists);
  }
  return (
    <div>
      {props.lists.map(function (list) {
        return (
          <div key={list.heading} className="list">
            <Heading name={list.heading} size={list.items.length} />
            {list.items.map((itemObj, index) => {
              return (
                <Checkbox
                  key={itemObj.name}
                  name={itemObj.name}
                  checked={itemObj.checked}
                  filterUpdate={update}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default FilterList;
