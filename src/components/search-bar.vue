<template>
  <section class="search-bar">
    <form @submit.prevent="handleSubmit">
      <input type="search" placeholder="Search on YouTube..">
      <button type="submit">Search</button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    querySearch: String
  }
}
</script>