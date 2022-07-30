<template>
<div>
    <input type="text" @input="handleChange">
    <button> Clear </button>
</div>

</template>

<script>
export default {
  name: "searchFilter",
  methods: {
   handleChange(event) {
       this.$emit('onUpdate', event.target.value)
   }
  }
}
</script>