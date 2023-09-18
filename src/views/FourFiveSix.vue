<template>
  <div class="content">
    <h1>List of Concepts</h1>
    <p>Click on the buttons below to see the concepts in action:</p>

    <!-- 4. Computed Properties -->
    <h2>4. Computed Properties</h2>
    <div>
      <input v-model="number" type="number" placeholder="Enter a number">
      <p>The square of {{ number }} is {{ squaredNumber }}</p>
    </div>

    <!-- 5. Class and Style Bindings -->
    <h2>5. Class and Style Bindings</h2>
    
    <!-- 5a. Binding HTML class using v-bind:class -->
    <h3 :class="{ 'red-text': isRed }">Class Binding Example</h3>
    <button @click="toggleRedText">Toggle Red Text</button>
    <br>
    
    <!-- 5b. Binding Inline Styles using v-bind:style -->
    <p :style="{ color: textColor, fontSize: textSize + 'px' }">Style Binding Example</p>
    <button @click="increaseTextSize">Increase Text Size</button>

    <!-- 6. List Rendering -->
    <!-- a. v-for with an Object -->
    <h2>6. List Rendering</h2>
    <h3>a. v-for with an Object</h3>
    <ul>
      <li v-for="(value, key) in object" :key="key">{{ key }}: {{ value }}</li>
    </ul>

    <!-- b. v-for with a Range -->
    <h3>b. v-for with a Range</h3>
    <ul>
      <li v-for="n in range" :key="n">{{ n }}</li>
    </ul>

    <!-- c. v-for on <template> -->
    <h3>c. v-for on &lt;template&gt;</h3>
    <template v-for="item in items" :key="item.id">
      <div>
        Item: {{ item.name }}
      </div>
    </template>

    <!-- d. v-for with v-if -->
    <h3>d. v-for with v-if</h3>
    <ul>
      <li v-for="item in allItems" :key="item.id">
        <span v-if="item.category === 'Fruit'">{{ item.name }}</span>
      </li>
    </ul>

    <!-- e. v-for with a Component -->
    <h3>e. v-for with a Component</h3>
    <button @click="addItem">Add Item</button>
    <ul>
      <list-item
        v-for="item in componentItems"
        :key="item.id"
        :name="item.name"
      ></list-item>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ListItem from '../components/ListItem.vue';

// 4. Computed Properties
const showComputed = ref(true); // Initialize it as true to show computed value initially
const number = ref(0);

const squaredNumber = computed(() => {
  return number.value * number.value;
});

// 5. Class and Style Bindings
const isRed = ref(false);
const textColor = ref('black');
const textSize = ref(16);

const toggleRedText = () => {
  isRed.value = !isRed.value;
};

const increaseTextSize = () => {
  textSize.value += 2;
};

// 6. List Rendering
// a. v-for with an Object
const object = { name: 'John', age: 30, city: 'New York' };

// b. v-for with a Range
const range = [...Array(5).keys()];

// c. v-for on <template>
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// d. v-for with v-if
const allItems = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Carrot', category: 'Vegetable' },
  { id: 3, name: 'Banana', category: 'Fruit' },
];

// e. v-for with a Component
const componentItems = ref([]);
let itemId = 1;

function addItem() {
  componentItems.value.push({ id: itemId++, name: `Item ${itemId}` });
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  margin-bottom: 160px; 
}

h1 {
  font-size: 24px;
  margin-bottom: 1rem;
}

h2 {
  font-size: 20px;
  color: #3366cc;
  margin-top: 2rem;
}

h3 {
  font-size: 18px;
  margin-top: 1rem;
}

p {
  font-size: 18px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3366cc;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #254c99;
}

.custom-class {
  background-color: lightblue;
  padding: 10px;
  margin-top: 1rem;
  font-size: 18px;
}

div[style] {
  margin-top: 1rem;
  padding: 10px;
  font-size: 18px;
  background-color: #ffcc66;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  text-align: center;
}
.red-text {
  color: red;
}
</style>