import { render } from '@testing-library/vue'
import MyButton from './MyButton.vue'

test('renders button with slot content', () => {
  const { getByText } = render(MyButton, {
    slots: {
      default: 'Click me'
    }
  })
  
  getByText('Click me')
})