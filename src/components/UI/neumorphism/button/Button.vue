<template>
  <button
    id="button"
    type="button"
    :class="classes"
    :style="style"
    @click="btnActive">

    <slot> {{ }} </slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    initState: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return (
          ['small', 'medium', 'large'].indexOf(value) !== -1
        );
      }
    },
    layout: {
      type: String,
      default: 'fill',
      validater: function (value) {
        return (
          ['flexible', 'fill', 'half', 'Increase', 'Decrease', 'reverse'].indexOf(value) !== -1
        );
      }
    },
    color: {
      type: String,
      default: 'primary',
      varidater: function () {
        return ['base', 'primary'];
      }
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  btnActive: { 
    type: Boolean, 
    default: false
  },
 
  data() {
    return { 
      btnActive: false,
    };
    
  },

  mounted: function () {
    this.btnActive = this.initState;
  },

  methods: {
   
  },

  computed: {
    classes() {
      return {
        button: true,
        [`button--${this.size}`]: true,
        [`button--${this.color}`]: true,
        [`button--${this.layout}`]: true,
        ['button--withicon']: this.icon,
        ['button--active']: this.btnActive
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../scss/main.scss';

.button {
  position: relative;
  transition: $transition-box-shadow;
  border-radius: $radius-button;
  font-weight: medium;
  vertical-align: middle;
  @include button-inactive;
  @include button-cursor;
  /*click button event*/
  &:active{
    color: white;
    @include button-active;
    &:hover {
      @include button-active;
    }
    &::after {
      color: white;
      @include void-text-liner;
    }
  }
  &:hover {
    @include button-hover;
  
  }
  &--Increase{
    
      width: 2em;
      height: 2.7rem;
      display: inline;
      justify-content: center;
      align-items: center;
      border: {
       radius: 0px 15px 0px 0px;
       top: none;
       right: none;   
         }   
  } 
   &--Decrease{
      width: 2em;
      height: 2.7rem;
      display: inline;
      border: {
       radius: 0px 0px 15px 0px;
       top: none;
       right: none;   
         }        
  }
  &--reverse{
    width: 10px;
    height: 10px;
    margin: {
   }
    padding: {
      right: 5px;
      left: 10px;
    }
    display: inline;
    position: relative;
    
    //flex-direction: column;
  }
  &--small {
    padding: 0px 16px;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
  }
  &--medium {
    padding: 0 30px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
  }
  &--large {
    padding: 0 36px;
    height: 46px;
    font-size: 14px;
    line-height: 46px;
  }
  &--base {
    background: $base;
    color: $text-main;
  }
  &--primary {
    background: $primary-liner-large;
    color: $white;
  }
  &--flexible {
    @include flexible;
  }
  &--fill {
   
    display: block;
    width: 100%;
    max-width: 400px;
    color: #ffffff;
  }
  &--half {
    width: 35%;
    max-width: 200px;
  }
  &--withicon {
    &::after {
      font-family: 'Material Icons';
      content: 'launch';
      font-size: 100%;
      line-height: 100%;
      @include text-liner;
      @include iconlayout;
    }
  }
  /*press button event*/
  &--active {       
    color: white;
    @include button-active;
    &:hover {
      @include button-active;
    }
    &::after {
      color: white;
      @include void-text-liner;
    }
  }
}
</style>
