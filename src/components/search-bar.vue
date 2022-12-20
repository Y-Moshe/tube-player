<script>
export default {
  props: {
    querySearch: String
  }
}
</script>

<template>
  <section class="search-bar">
    <form @submit.prevent>
      <input
        class="form-control w-50"
        type="search"
        :modelValue="querySearch"
        placeholder="Search on YouTube.."
      >
      <button type="submit" class="primary-btn">Search</button>
    </form>
  </section>
</template>
