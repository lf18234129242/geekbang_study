export default {
  name: 'functional-button',
  functional: true,
  render(createElement, { porps, listeners, children }) {
    return createElement(
      'button',
      {
        attrs: porps,
        on: {
          click: listeners.click
        }
      },
      children
    )
  }
}