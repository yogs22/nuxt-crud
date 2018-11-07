<template>
  <section class="container">
	<h1>NuxJS Project</h1>
	{{ countries }}
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  computed: mapState([
  		'countries'
  	])
}
</script>