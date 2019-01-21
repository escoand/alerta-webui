import AlertsApi from '@/services/api/alert.service'

const namespaced = true

const state = {
  isLoading: false,

  alerts: [],
  environments: [],
  services: [],
  tags: [],

  // not persisted
  isWatch: false,
  isKiosk: false
}

const mutations = {
  SET_LOADING(state) {
    state.isLoading = true
  },
  SET_ALERTS(state, alerts): any {
    state.alerts = alerts
  },
  SET_ENVIRONMENTS(state, environments): any {
    state.environments = environments
  },
  SET_SERVICES(state, services): any {
    state.services = services
  },
  SET_TAGS(state, tags): any {
    state.tags = tags
  },
  SET_SETTING(state, { s, v }) {
    state[s] = v
  }
}

const actions = {
  getAlerts({ commit }) {
    commit('SET_LOADING')
    return AlertsApi.getAlerts({}).then(({ alerts }) =>
      commit('SET_ALERTS', alerts)
    )
  },

  takeAction({ commit, dispatch }, [alertId, action, text, timeout]) {
    return AlertsApi.actionAlert(alertId, {
      action: action,
      text: text,
      timeout: timeout
    }).then(response => dispatch('getAlerts'))
  },
  tagAlert({ commit, dispatch }, [alertId, tags]) {
    return AlertsApi.tagAlert(alertId, tags).then(response =>
      dispatch('getAlerts')
    )
  },
  untagAlert({ commit, dispatch }, [alertId, tags]) {
    return AlertsApi.untagAlert(alertId, tags).then(response =>
      dispatch('getAlerts')
    )
  },
  deleteAlert({ commit, dispatch }, alertId) {
    return AlertsApi.deleteAlert(alertId).then(response =>
      dispatch('getAlerts')
    )
  },

  getEnvironments({ commit }) {
    return AlertsApi.getEnvironments({}).then(({ environments }) =>
      commit('SET_ENVIRONMENTS', environments)
    )
  },
  getServices({ commit }) {
    return AlertsApi.getServices({}).then(({ services }) =>
      commit('SET_SERVICES', services)
    )
  },
  getTags({ commit }) {
    return AlertsApi.getTags({}).then(({ tags }) => commit('SET_TAGS', tags))
  },
  toggle({ commit }, [s, v]) {
    commit('SET_SETTING', { s, v })
  }
}

const getters = {
  alerts: (state, getters, rootState) => {
    if (state.isWatch) {
      let user = rootState.auth.payload.name
      return state.alerts.filter(a => a.tags.includes(`watch:${user}`))
    } else {
      return state.alerts
    }
  },
  environments: state => {
    return state.environments.map(e => e.environment)
  },
  services: state => {
    return state.services.map(s => s.service)
  },
  tags: state => {
    return state.tags.map(t => t.tag)
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}