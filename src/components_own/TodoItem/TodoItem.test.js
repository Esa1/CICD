import {fireEvent, render, screen} from '@testing-library/react'
import { TodoItem } from './TodoItem'

test('render correct title', async () => {
    render(
        <TodoItem
            id={'1'}
            title={'test'}
            onRemove={onTodoRemove}
      />
    )

    const title = screen.getByTestId('todo-title')

    expect(title.textContent.toEqual('test'))

})

test('remove title', async () => {
    render(
        <>
        <TodoItem
            id={'1'}
            title={'test'}
            onRemove={onTodoRemove}
        />
        </>
    )

    fireEvent.click(screen.getByText('Remove'))
})
