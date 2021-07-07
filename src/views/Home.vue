<template>
  <div class="home">
   <ConfigForm testText="你好"></ConfigForm>
  </div>
</template>

<script>

import config from './config';
export default {
  name: 'Home',
  components: {},
  data(){
    return {
      config
    }
  }
}
</script>
