<template>
  <div class="myDiv">
    <h2>8.a. Form Input Bindings</h2>
    <h1>My Shopping List</h1>
    <div>
      <!-- 8a. v-model with <input type="text"> -->
      <input type="text" v-model="shoppingitem" @keyup.enter="addItem" placeholder="Item name">
      <button @click="addItem">Add Item</button>
    </div>
    <div>
      <!-- 8a. v-model with <textarea> -->
      <textarea v-model="itemDescription" placeholder="Item description"></textarea>
    </div>

    <!-- 8a. v-model with <select> -->
    <div>
      <label for="store">Select Store:</label>
      <select v-model="selectedStore" id="store">
        <option value="Coles">Coles</option>
        <option value="Woolworths">Woolworths</option>
        <option value="Aldi">Aldi</option>
      </select>
    </div>

    <ol>
      <li v-for="i in shoppinglist" :key="i.id" class="shopping-item">
        <div class="left">

          <!-- 8a. v-model with <input type="checkbox"> -->
          <input type="checkbox" v-model="i.status">
          <!-- 8a. v-model with <span> (conditionally styled) -->
          <span :class="{ done: i.status }">{{ i.item }}</span>
          
          <div class="store-radio">
            <label>
              <!-- 8a. v-model with <input type="radio"> -->
              <input type="radio" v-model="i.store" value="Coles"> Coles
            </label>
            <label>
              <!-- 8a. v-model with <input type="radio"> -->
              <input type="radio" v-model="i.store" value="Woolworths"> Woolworths
            </label>
            <label>
              <!-- 8a. v-model with <input type="radio"> -->
              <input type="radio" v-model="i.store" value="Aldi"> Aldi
            </label>
            <p>Description: <br>{{ i.description }}</p>
          </div>
        </div>

        <div class="right">
          <button @click="removeItem(i)">Remove</button>
        </div>
      </li>

      <h5 v-if="shoppinglist.length < 1"> No Items </h5>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const itemId = ref(0)
const shoppingitem = ref('')
const itemDescription = ref('')
const shoppinglist = ref([])
const shopped = ref(false)

// Add a ref variable to store the selected store
const selectedStore = ref('') // Initialize it as an empty string

function addItem() {
  shoppinglist.value.push({
    id: itemId.value++,
    item: shoppingitem.value,
    description: itemDescription.value,
    status: shopped.value,
    store: selectedStore.value, // Use the selected store
  })

  shoppingitem.value = ""
  itemDescription.value = ""
  selectedStore.value = "" // Reset the selected store after adding an item
}

function removeItem(i) {
  shoppinglist.value = shoppinglist.value.filter((t) => t !== i)
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
.myDiv {
  background-color: #f8f8f8;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  margin: 20px;
}
.shopping-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .left {
    flex: 1;
  }
  
  .right {
    margin-left: 10px;
  } 
</style>
