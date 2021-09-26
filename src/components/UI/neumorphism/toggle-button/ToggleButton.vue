<template>
  <div>
    <div class="toggle-button">
      <input
        id="left"
        v-model="isSelected"
        type="radio"
        name="toggle"
        value="One Way"
      />
      <label for="left" class="toggle-button__label--left"
        >One Way</label
      >
      <input
        id="right"
        v-model="isSelected"
        type="radio"
        name="toggle"
        value="Round Trip"
      />
      <label for="right" class="toggle-button__label--right"
        >Round Trip
      </label>
      <span :class="sliderClasses">{{ isSelected }}</span>
    </div>

    <ul class="contents">
      <li v-if="isSelected === 'One Way'">
        selected : One Way
      </li>
      <li v-else-if="isSelected === 'Round Trip'">
        selected : Round Trip
      </li>
    </ul>
  </div>
</template>

<script>
//import Vue from 'vue';

export default {
 
  name: 'ToggleButton',
  data() {
    return { isSelected: 'One Way', radioItems: ['One Way', 'Round Trip'] };
  },
  computed: {
    sliderClasses() {
      return {
        'toggle-button__slider': true,
        [`toggle-button__slider--right`]:
          this.isSelected === 'Round Trip'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
.contents {     
  display: none;   // Hide origin UI
}

input {
  display: none;   // Hide origin
}

.toggle-button {
  box-sizing: border-box;
  width: 120px; // 1rem = 16px
  height: 28px; 
  position: relative;
  display: flex;
  padding: 1px;
  border-radius: $radius-button;
  background-color: $base;
  box-shadow: $shadow-concave, $shadow-convex;
  font-size : 1px;
  border: solid 0.1rem $base;
  align-items: center;
  @include button-cursor;
  &__label,
  %label {
    display: inline-block;
    position: absolute;
    width: 60px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    color: $unselected;
    &--left {
      @extend %label;
      left: 2px;
    }
    &--right {
      @extend %label;
      right: 2px;
    }
  }
  &__slider {
    position: absolute;
    left: 1px;
    text-align: center;
    line-height: 24px;
    width: 60px;
    height: 24px;
    font-size: 10px;
    border-radius: $radius-button;
    background: $primary-liner;
    box-shadow: $shadow-drop;
    color: $white;
    transition: $transition-transform;
    &--right {
      transform: translateX(56px);
    }
  }
}
</style>
