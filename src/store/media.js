import mediaService from '../services/media.service'
export const state = () => ({
  banner: [],
  news: [],
  allNews: []
})
export const getters = {
  getBanner(state) {
    return state.banner
  },
  getNews(state) {
    return state.news
  }
}
export const mutations = {
  SET_BANNER(state, banner) {
    state.banner = banner
  },
  SET_NEWS(state, news) {
    state.allNews = news
    var filter = []
    for (let index = 0; index < 7; index++) {
      filter.push(news[index]);
    }
    state.news = filter;
  },

}
export const actions = {
  getBanners({ commit }) {
    mediaService.getBanner().then(async (response) => {
      await response.data.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 0;
      });
      await commit('SET_BANNER', response.data)
    })
  },
  getNews({ commit }) {
    mediaService.getNews().then(async (response) => {
      await response.data.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 0;
      });
      await response.data.forEach(element => {
        element.createdAt = new Date(element.createdAt).getDate() + '/' + (new Date(element.createdAt).getMonth() + 1) + '/' + new Date(element.createdAt).getFullYear()
      });
      await commit('SET_NEWS', response.data)
    })
  },

  addBanner({ dispatch }, Banner) {
    return mediaService.postbanner(Banner).then(async () => {
      await dispatch('getBanners')
    });
  },
  deleteOneBanner({ dispatch }, id) {
    mediaService.deletebanner(id).then(async () => {
      await dispatch('getBanners')
    })
  },
  addNews({ dispatch }, news) {
    return mediaService.postnews(news).then(async () => {
      await dispatch('getNews')
    });
  },
  deleteOneNews({ dispatch }, id) {
    mediaService.deleteNews(id).then(async () => {
      await dispatch('getNews')
    })
  },
}

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    bodyAttrs: {
      class: ['dark-mode', 'mobile']
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      'http-equiv': "Content-Type",
      content: "text/html; charset=utf-8"
    },

    ]
  },
  getters,
  actions,
  mutations,
  state
}
