<template>
  <div class="add_active_user">
    <h1>Add active user</h1>
    <user-data v-on:addInfoUser="saveUserInfo"></user-data>
    <active-user
      v-bind:name="userIntormation.name"
      v-bind:age="userIntormation.age"
    ></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userIntormation: {},
    };
  },
  methods: {
    saveUserInfo(userName, userAge) {
      const personalUserInfo = {
        name: userName,
        age: userAge,
      };
      this.userIntormation = personalUserInfo;
      console.log(this.userIntormation);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h1 {
  color: white;
  background-color: rgb(9, 74, 134);
  text-align: center;
  padding: 20px 0;
  font-size: 36px;
  text-transform: uppercase;
}
.add_active_user {
  width: 700px;
  height: auto;
  margin: 20px auto;
  border: 2px solid hsla(0, 0%, 33%, 0.123);
}
</style>
