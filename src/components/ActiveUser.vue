<template>
  <div class="user_data_active">
    <div class="header">Active User</div>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {};
  },
};
</script>

<style>
.user_data_active {
  width: 500px;
  height: auto;
  border: 1px solid rgb(9, 74, 134);
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 100%;
  height: auto;
  color: white;
  background-color: rgb(9, 74, 134);
  text-align: center;
  font-size: 36px;
}
p {
  margin-top: 10px;
}
</style>
