import Todo from '@/models/todo'

describe('todo.js', () => {
  it('テスト用テスト', () => {
    expect(true)
      .toEqual(true)
  })
  
  it('タスクdoneFlgが反転すること', () => {
    const todo = new Todo({}) 
    todo.toggleDoneFlg()
    expect(todo.doneFlg)
      .toEqual(true)
  })
})
