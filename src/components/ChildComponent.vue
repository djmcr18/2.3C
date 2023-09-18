<template>
  <div class="child-container">
    <h2>Child Component</h2>
    
    <!-- 10a. Displaying data received via props -->
    <p class="message">{{ message }}</p>
    
    <!-- 10c. Displaying content passed as a slot -->
    <slot name="default" :childSlotMessage="message"></slot>
    
    <!-- 10b. Emitting a custom event to the parent component -->
    <button @click="emitEvent" class="action-button">Click Me</button>
  </div>
</template>

<script>
export default {
  props: {
    // 10a. Receiving data from the parent via props
    message: String,
  },
  methods: {
    // 10b. Emitting a custom event to the parent component
    emitEvent() {
      const dataToSend = "Data sent from the Child Component!";
      this.$emit('childEvent', dataToSend);
    },
  },
};
</script>


<style scoped>
.child-container {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 20px;
}

.message {
  font-weight: bold;
  color: #333;
}

.action-button {
  background-color: #3366cc;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #254c99;
}
</style>
