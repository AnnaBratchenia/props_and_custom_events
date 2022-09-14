<template>
  <div class="user_data">
    <p>Write your name</p>
    <input v-model="nameValue" class="text_value" type="text" />
    <p>Write your age</p>
    <input v-model="ageValue" class="text_value" type="age" />
    <button v-on:click="addInfo" class="btn">Add user</button>
  </div>
</template>
<script>
export default {
  emits: ["add-info-user"],
  data() {
    return {
      nameValue: "",
      ageValue: "",
    };
  },
  methods: {
    addInfo() {
      this.$emit("add-info-user", this.nameValue, this.ageValue);
    },
  },
};
</script>
<style>
p {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.user_data {
  width: 500px;
  height: auto;
  border: 1px solid rgb(9, 74, 134);
  margin: 20px auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text_value {
  width: 250px;
  height: 30px;
  margin-bottom: 20px;
  font-size: 18px;
}
.btn {
  background-color: rgb(9, 74, 134);
  color: white;
  width: 150px;
  height: 50px;
  border: none;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
