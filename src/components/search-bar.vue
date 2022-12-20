<script>
export default {
  props: {
    querySearch: String
  },
  methods: {
    handleChange({ target }) {
      this.$emit('update:modelValue', target.value)
      this.$emit('change', target.value)
    }
  }
}
</script>

<template>
  <section class="search-bar">
    <input
      type="search"
      class="form-control w-50"
      :modelValue="querySearch"
      placeholder="Search on YouTube.."
      @input="handleChange"
    >
  </section>
</template>
