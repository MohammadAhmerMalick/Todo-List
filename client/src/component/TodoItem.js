import Star from './Star'

export default function TodoItem({ updateCheckedList, itemId, checked }) {
  return (
    <div className='todo-item' >
      <div className={`check ${checked ? 'checked' : ''}`} onClick={() => updateCheckedList(itemId)}></div>
      <p className='title'>title</p>
      <Star starred={false} />
      <p className='target-date'>today</p>
    </div>
  )
}
