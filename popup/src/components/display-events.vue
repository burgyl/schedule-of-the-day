<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>isInit: {{ isInit }}</p>
    <p v-if="user && isSignedIn">{{ user.getBasicProfile().getName() }}</p>
    <button
      :disabled="!isInit || isSignedIn"
      @click="signIn"
    >SignIn
    </button>
    <button
      :disabled="!isInit || !isSignedIn"
      @click="signOut"
    >SignOut
    </button>
    <button
      :disabled="!isInit || !isSignedIn"
      @click="disconnect"
    >Disconnect
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SdDisplayEvents',
};
</script>

<script setup lang="ts">
import { ref } from 'vue'

const isInit = ref<boolean>(false);
const isSignedIn = ref<boolean>(false);
const user = ref(null);

const checkGALoad = setInterval(function () {
  this.isInit = this.$google.isInit
  if (this.isInit) {
    this.isSignedIn = this.$google.api.auth2.getAuthInstance().isSignedIn.get()
    this.$google.api.auth2.getAuthInstance().isSignedIn.listen(this.signInListener)
    this.$google.api.auth2.getAuthInstance().currentUser.listen(this.userListener)
    clearInterval(checkGALoad)
  }
}, 200);

const signIn = async () => {
  try {
    return await this.$google.api.auth2.getAuthInstance().signIn()
  } catch (e) {
    console.log(e)
  }

};

const signOut = async () => {
  try {
    return await this.$google.api.auth2.getAuthInstance().signOut()
  } catch (e) {
    console.log(e)
  }

};

const disconnect = async () => {
  return await this.$google.api.auth2.getAuthInstance().disconnect()
};

const signInListener = (status) => {
  this.isSignedIn = status;
};
const userListener = (user) => {
  this.user = user;
};

</script>
