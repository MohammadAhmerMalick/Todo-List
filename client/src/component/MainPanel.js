import React, { useState } from 'react'
import TodoItem from './TodoItem'

export default function MainPanel() {

  const [checkedList, setCheckedList] = useState([])

  const updateCheckedList = (itemId) => {
    checkedList.includes(itemId)
      ? setCheckedList(checkedList.filter(item => item !== itemId))
      : setCheckedList([...checkedList, itemId])
  }

  return (
    <section id="main-panel">
      <h1>todo list</h1>
      <input type="text" />
      <TodoItem updateCheckedList={updateCheckedList} itemId={123} checked={checkedList.includes(123)} />
    </section>
  )
}
