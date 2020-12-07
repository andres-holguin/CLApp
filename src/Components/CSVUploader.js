import React from 'react'
import Papa from 'papaparse'

export default function CSVUploader(props) {
  // Props
  let uploadEvents = props.onEventsUpload;

  // Create list of event objects from the parsed data
  function createEvents(fileData) {
    let id = 0;
    return fileData.map(detail => {
      return {
        id: id++,
        title: detail.Type + "-" + detail.Detail,
        start: detail.Date,
        extendedProps: {
          residentName: detail.Name,
          comments: ["Detail created on " + Date()]
        }
      }
    });
  }

  function handleChange(e) {
    let file = e.target.files[0]
    if (!file) return; // User canceled when choosing a file
    Papa.parse(file, {
      header: true,
      complete: (parsedFile) => uploadEvents(createEvents(parsedFile.data))
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