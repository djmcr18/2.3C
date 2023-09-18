<script setup>
// 3. Reactivity Fundamentals [ref(), <script setup>]
import { ref, watch } from 'vue';
import { useMouse } from '../reusables/mouse.js';

// 2. Methods
const { x, y } = useMouse();

// 9. Define a watcher to react to changes in x and y
watch([x, y], ([newX, newY], [oldX, oldY]) => {
  console.log(`Mouse position changed from (${oldX}, ${oldY}) to (${newX}, ${newY})`);
});

const vFocus = {
  mounted: (el) => el.focus(),
};

const show = ref(true);

// Add data properties for v-model modifiers
const inputValueLazy = ref("");
const inputValueNumber = ref(0);
const inputValueTrim = ref("");

// 2. Method handler to toggle the 'show' variable
const toggleShow = () => {
  show.value = !show.value;
};
</script>




<template>
  <div class="about">
    <h1 class="title">2, 3, 9. Mouse Tracker</h1>
    <div class="position-info">
      <p>The mouse position is at:</p>
      <h1>{{ x }}, {{ y }}</h1>
    </div>
    
    <div class="form-inputs">
      <!-- 8. Form Input Bindings b. -->
      <!-- Input fields to demonstrate v-model modifiers -->
      <h2 class="section-title">8. b. v-model Modifiers</h2>
      
      <div class="input-group">
        <label for="lazyInput">Lazy Modifier:</label>
        <input type="text" id="lazyInput" v-model.lazy="inputValueLazy" placeholder="Type here" />
      </div>
      <p v-if="inputValueLazy" class="input-result">Lazy Modifier Result: {{ inputValueLazy }}</p>
      <br><br>

      <div class="input-group">
        <label for="numberInput">Number Modifier:</label>
        <input type="number" id="numberInput" v-model.number="inputValueNumber" />
      </div>
      <p v-if="typeof inputValueNumber === 'number'" class="input-result">Number Modifier Result: {{ inputValueNumber }}</p>
      <br><br>

      <div class="input-group">
        <label for="trimInput">Trim Modifier:</label>
        <input type="text" id="trimInput" v-model.trim="inputValueTrim" placeholder="Trimmed input" />
      </div>
      <p v-if="inputValueTrim" class="input-result">Trim Modifier Result: {{ inputValueTrim }}</p>
    </div>

    <div class="event-handling">
      <h2 class="section-title">7. Event Handling: Listening to Events [v-on:click]</h2>
      <!-- 7. a. Inline handler for the button click event -->
      <button @click="show = !show" class="toggle-button">Toggle (Inline)</button>

      <!-- 7. b. Method handler for the button click event -->
      <button @click="toggleShow" class="toggle-button">Toggle (Method)</button>
      
      <Transition>
        <p v-if="show" class="transition-text">Hello</p>
      </Transition>
    </div>
  </div>
</template>




<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 1rem;
  color: #3366cc;
}

.position-info {
  margin-bottom: 2rem;
}

.position-info p {
  font-size: 18px;
  margin: 0;
}

.position-info h1 {
  font-size: 36px;
  margin: 0;
  color: #3366cc;
}

.section-title {
  font-size: 20px;
  color: #3366cc;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.input-group label {
  font-size: 18px;
  margin-right: 1rem;
  color: #333;
}

.input-result {
  font-size: 18px;
  color: #333;
  margin: 0;
}

.toggle-button {
  background-color: #3366cc;
  color: white;
  font-size: 16px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #254c99;
}

.transition-text {
  font-size: 24px;
  margin-top: 1rem;
  color: #3366cc;
}

@media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; Remove this line */
    min-height: 100vh;
  }

  .event-handling {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Add this line */
  }

  .transition-text {
    font-size: 24px;
    margin-top: 1rem;
    color: #3366cc;
    text-align: center; /* Center the text horizontally */
  }
}
</style>
