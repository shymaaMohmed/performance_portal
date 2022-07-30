<template>
<div class="search-filter">
    <input type="text" @input="(event) => handleChange(event.target.value)" :value="filter" >
    <button class="c-button" @click="() => handleChange('')"> Clear </button>
</div>

</template>

<script>
export default {
  name: "searchFilter",
  props: ['filter'],
  methods: {
   handleChange(param) {
       this.$emit('onUpdate', param)
   },

  }
}
</script>