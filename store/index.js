import axios from '~/plugins/axios'

export const state = () => ({
	countries: []
})

export const mutations = {
	setData(state, items) {
		state.countries = items
	},
	addData(state, item) {
		state.countries.push(item)
	}
}

export const actions = {
	async nuxtServerInit({commit}) {
		const res = await axios.get('negara')
		commit('setData', res.data)
	},
	async store({commit}, name) {
		const res = await axios.post('negara', {name: name})
		commit('addData', res.data)
	}
}