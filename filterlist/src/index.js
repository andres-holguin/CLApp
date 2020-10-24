import React from "react";
import ReactDOM from "react-dom";
import FilterList from "./components/FilterList";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
//The user will pass in an array of list objects
//Each object contains two properties:
//heading and items
// The heading property will be the heading of the list
// the items property will contain an array of item objects
// each item object has two properties:
// name and checked
// name is the string name of the item and checked a the boolean vialue
//that represents the defualt state of the check box
var lists = [
  {
    heading: "Commons Crew",
    items: [
      {
        name: "Sw-Stairs",
        checked: false
      },
      {
        name: "SE-hallway",
        checked: false
      },
      {
        name: "SE-Recreation",
        checked: false
      },
      {
        name: "Test",
        checked: false
      }
    ]
  },
  {
    heading: "Bathroom Detail",
    items: [
      {
        name: "Sw-Boys",
        checked: false
      },
      {
        name: "SE-Girls",
        checked: false
      },
      {
        name: "SE-Boys",
        checked: false
      },
      {
        name: "Sw-Girls",
        checked: false
      },
      {
        name: "New-Bathroom",
        checked: false
      }
    ]
  }
];
// this is a developer defined function that takes a updated list object
// that is based on user inputs
// whenever the list is updated, this functino will be called
function updateFunction(updatedList) {
  console.log(updatedList);
}
ReactDOM.render(
  <FilterList lists={lists} updateFunction={updateFunction} />,
  rootElement
);

// To adjust the physical size fo the list, just wrap it in a div with
// a  set size
