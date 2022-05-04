const addTodoList = (myData, setMyData, title, date) =>{
    const newData = [
      ...myData,
      {
        id: myData.length+1, 
        title: title,
        date: date,
        ongoing: true,
        done: false,
      }
    ]
    setMyData(newData)
}

export { 
    addTodoList
}