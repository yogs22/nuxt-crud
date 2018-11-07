<template>
  <section class="container">
	<h1 class="title">NuxJS Project</h1>
	<ul class="panel">
		<li class="panel-heading">Daftar Negara</li>
		<li class="panel-block" v-for="country in countries" :key="country.id">
			{{ country.name }}
		</li>
	</ul>
	<form @submit.prevent="add(name)">
		<div class="field">
			<label class="label">Name</label>
			<div class="control">
				<input type="text" class="input" v-model="name">
			</div>
		</div>
		<div class="control">
			<button class="button is-link">Submit</button>
		</div>
	</form>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState([
  	'countries'
  ]),
  methods: {
  	add(name) {
  		this.$store.dispatch('store', name)
  		this.name = ''
  	}
  }
}
</script>