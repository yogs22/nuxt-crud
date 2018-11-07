import axios from '~/plugins/axios'

export const state = () => ({
	countries: []
})

export const mutations = {
	setData(state, items) {
		state.countries = items
	}
}

export const actions = {
	async nuxtServerInit({commit}) {
		const result = await axios.get('negara')
		commit('setData', res.data)
	}
}