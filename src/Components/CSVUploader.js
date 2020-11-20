import React from 'react'
import Papa from 'papaparse'

export default function CSVUploader(props) {

  // Create event objects from the parsed data
  function createEvents(fileData) {
    console.log(fileData)
    let arr = [];
    let id = 0;
    fileData.forEach(detail => {
      arr.push({
        id: id++,
        title: detail.Type + "-" + detail.Detail,
        start: detail.Date,
        extendedProps: {
          residentName: detail.Name
        }
      });
    });
    return arr;
  }

  function handleChange(e) {
    let file = e.target.files[0]
    if (!file) return; // User canceled when choosing a file
    Papa.parse(file, {
      header: true,
      complete: (parsedFile) => props.setEvents(createEvents(parsedFile.data))
    })
  }
  
  return (
    <input
      type="file"
      accept=".csv"
      onChange={handleChange}
    />
  )
}