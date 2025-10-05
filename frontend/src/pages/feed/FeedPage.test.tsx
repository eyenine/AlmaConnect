import { render, screen, fireEvent } from '@testing-library/react'
import { FeedPage } from './FeedPage'

it('allows composing and posting a message', () => {
  render(<FeedPage />)
  const textarea = screen.getByPlaceholderText('Share an update...') as HTMLTextAreaElement
  fireEvent.change(textarea, { target: { value: 'Hello AlmaConnect!' } })
  fireEvent.click(screen.getByText('Post'))
  expect(screen.getByText('Hello AlmaConnect!')).toBeInTheDocument()
})
