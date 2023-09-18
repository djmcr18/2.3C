<template>
  <div class="parent-container">
    <h1>Parent Component</h1>
    
    <!-- 10a. Using the ChildComponent and passing data via props -->
    <ChildComponent :message="parentMessage" @childEvent="handleChildEvent">
      <!-- 10c. Using a slot to insert custom content -->
      <template v-slot:default="{ childSlotMessage }">
        <p class="slot-content">Slot Content: {{ childSlotMessage }}</p>
      </template>
    </ChildComponent>

    <!-- 10b. Displaying data received from ChildComponent -->
    <p class="received-data">Received from ChildComponent: {{ childData }}</p>
  </div>
</template>

<script>
import ChildComponent from '../components/ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: "Hello from the parent!",
      childData: "",
    };
  },
  methods: {
    // 10b. Handling data received from ChildComponent
    handleChildEvent(dataFromChild) {
      this.childData = dataFromChild;
    },
  },
};
</script>

<style scoped>
.parent-container {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  margin: 20px auto;
  max-width: 400px;
}

.slot-content {
  font-style: italic;
  color: #3366cc;
}

.received-data {
  margin-top: 20px;
}
</style>
