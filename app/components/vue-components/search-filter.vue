<template>
<div>
    <input type="text" @input="handleChange" :value="filter">
    <button> Clear </button>
</div>

</template>

<script>
export default {
  name: "searchFilter",
  props: ['filter'],
  methods: {
   handleChange(event) {
       this.$emit('onUpdate', event.target.value)
   }
  }
}
</script>