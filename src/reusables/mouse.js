// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const x = ref(0) // 3. Reactivity Fundamentals [ref()]
  const y = ref(0) // 3. Reactivity Fundamentals [ref()]

  // a composable can update its managed state over time.
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener('mousemove', update)) // 7. Event Handling: Listening to Events
  onUnmounted(() => window.removeEventListener('mousemove', update)) // 7. Event Handling: Listening to Events

  // expose managed state as return value
  return { x, y }
}