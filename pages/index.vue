<template>
  <section class="container">
	<h1 class="title">NuxJS API Project</h1>
	<h2 class="subtitle">Name of Countries</h2>
	<div class="columns"> 
		<div class="column">
			<form @submit.prevent="(activeAction == 'add') ? add(name) : update(name)">
				<div class="field">
					<label class="label">Name</label>
					<div class="control">
						<input type="text" class="input" v-model="name" required>
					</div>
				</div>
				<div class="control" :class="{hidden: !isHidden}">
					<button class="button is-link">Submit</button>
				</div>
				<div class="control" :class="{hidden: isHidden}">
					<button class="button is-link">Update</button>
				</div>
			</form> 
		</div>
		<div class="column">
			<ul class="panel">
				<li class="panel-heading">Countries List</li>
				<li class="panel-block">
					<input type="text" class="input is-small" v-model="searchKey" placeholder="Search Countries">
				</li>
				<li class="panel-block" v-for="country in filteredCountries" :key="country.id">
					{{ country.name }} / &nbsp;
					<button class="button is-info" @click="show(country.id)">Edit</button> &nbsp; 
					<button class="button is-danger" @click="remove(country.id, country.name)">Delete</button>
				</li>
			</ul>
		</div>
	</div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	data: function() {
		return {
			name: '',
			isHidden: true,
			activeAction: 'add',
			activeItem: null,
			searchKey: '',
			countries: this.$store.state.countries
		}
	},
	computed: {
		filteredCountries() {
			return this.countries.filter(
				country => country.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1
			)
		}
	},
	methods: {
		add(name) {
			this.$store.dispatch('store', name)
			this.name = ''
		},
		show(id) {
			this.$store.dispatch('show', id).then((res) => {
				this.name = res.name
				this.activeItem = res
				this.isHidden = false
				this.activeAction = 'update'
			})
		},
		update() {
			this.$store.dispatch('update', { 
				id: this.activeItem.id,  
				name: this.name
			})
			this.name = ''
			this.isHidden = true
			this.activeAction = 'add'
		},
		remove(id, name) {
			if (confirm('Do you want delete ' + name + ' ?')) {
				this.$store.dispatch('remove', id)
			}
		}
	}
}
</script>

<style type="text/css">
	.hidden {
		display: none;
	}
</style>