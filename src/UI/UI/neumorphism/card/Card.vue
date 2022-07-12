<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card"></div>
</template>

<script>
//import Vue from 'vue';
//import ContentDummy from './ContentDummy';

export default {
  components: {
    //ContentDummy
  },
  props: {

  }
};
</script> 

<style lang="scss" scoped>
@import '../../scss/main.scss';

.card {
  &-medium{
  border: 1px solid $base;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: $base-liner;
  border-radius: $radius-3;
  box-shadow: $shadow-base;
  padding: $spacing-4 $spacing-6;
  }

  &-small{
  border: 1px solid $base;
  width: 30%;
  height: auto;
  box-sizing: border-box;
  background: $base-liner;
  border-radius: $radius-3;
  box-shadow: $shadow-base;
  padding: $spacing-4 $spacing-6;
  }
}
</style>
