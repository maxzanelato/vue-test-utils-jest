const state = {
  clicks: 0,
};

const getters = {
  moduleClicks: (state) => state.clicks,
};

const mutations = {
  SET_MODULE_CLICKS(state, payload) {
    state.clicks = payload;
  },
};

const actions = {
  moduleActionClick({ commit }, payload) {
    commit('SET_MODULE_CLICKS', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
