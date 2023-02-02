<template>
  <div class="tweet">
    <ProfileImage :imageUrl="userPic" />

    <div class="body">
      <div class="top">
        <User :userName="userName" :userHandle="userHandle" />
        <TimeStamp :timeStamp="tweetTimeStamp" />
      </div>

      <Message :postMessage="postMessage" />

      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import ProfileImage from "./ProfileImage.vue";
import User from "./User.vue";
import TimeStamp from "./TimeStamp.vue";
import Message from "./Message.vue";
import Actions from "./Actions.vue";
defineProps({
  userPic: String,
  userName: String,
  userHandle: String,
  tweetTimeStamp: String,
  postMessage: String,
});
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
