<template>
  <div class="singlline-text-field">
    <label for="text-box" :class="label"> {{ text }} </label>
    <div :class="classes">
      <input
        class="singlline-text-field__text"
        id="text-box"
        :type="{ varidater }"
        :placeholder="place"
      /> 
    </div>
  </div>
</template>

<script>
//import Vue from 'vue';

export default {
  name: 'search',
  props: {
    text: {
      type: String,
      default: ''
    },
    place:{
      type:String,
      default: ''
    },
    labelstate: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'search',
      varidater() {
        return ['form', 'search', 'memo'];
      }
    },
    placeholder: {
      type: String,
      default: 'local',
    
    }
  },
  computed: {
    classes() {
      return {
        'singlline-text-field__text-box': true,
        [`singlline-text-field__text-box--${this.type}`]: true
      };
    },
    label() {
      return {
        'singlline-text-field__label': true,
        [`singlline-text-field__label--${this.labelstate}`]: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';
form {
  width: 100%;
}

.singlline-text-field {
  @include fixed;
  &__label {
    font-size: 14px;
    color: $text-main;
    line-height: $single-line;
    margin-bottom: $spacing-2;
    &--true {
      display: inline-block;
    }
    &--false {
      display: none;
    }
  }
  &__text-box {
    display: flex;
    align-items: center;
    vertical-align: middle;
    color: $text-main;
    width: 100%;
    box-sizing: border-box;
    padding: 0 $spacing-2;
    background: $base;
    box-shadow: $shadow-concave;
    font-size: 14px;
    border-radius: $radius-2;
    &--form {
      height: 40px;
    }
    &--search {
      height: 36px;
      &::before {
        margin: 0 $spacing-1 0 0;
        font-family: 'Material Icons';
        content: 'search';
        color: $button-gray;
        font-size: 22px;
        line-height: 100%;
        @include iconlayout;
      }
    }
  }
  &__text {
    color: #333131;
    box-sizing: border-box;
    background: $base;
    font-size: 14px;
    line-height: $single-line;
    height: 20px;
  }
}
::placeholder {
  color: $unselected;
}
</style>
