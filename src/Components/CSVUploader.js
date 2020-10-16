import React from 'react'
import Papa from 'papaparse'

export default function CSVUploader(props) {
  // let initEvents = [
  //   {
  //     //id: createEventId(),
  //     title: 'All-day event',
  //     start: todayStr
  //   },
  //   {
  //     //id: createEventId(),
  //     title: 'Timed event',
  //     start: new Date()
  //   }
  // ]
  function createEvents(fileData) {
    console.log(fileData)
    let arr = [];
    let id = 0;
    for (var i=0; i<fileData.length; i++) {
      arr.push({
        id: id++,
        title: fileData[i].Name + ": " + fileData[i].Detail + " " + fileData[i].Type,
        start: fileData[i].Date
      })
    }
    return arr;
  }

  function handleChange(e) {
    console.log("Detected a file change to a file called:")
    let file = e.target.files[0]
    if (!file) return;
    console.log(file.name)
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