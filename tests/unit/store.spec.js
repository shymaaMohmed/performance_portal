import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '../../app/store'
import { cloneDeep } from 'lodash'

test('updateChartData', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const vuexStore = new Vuex.Store(cloneDeep(store))
  expect(vuexStore.state.chartData).toBe([{"date_ms":1641772800000,"performance":0.2},{"date_ms":1641859200000,"performance":0.33},{"date_ms":1641945600000,"performance":0.83},{"date_ms":1642032000000,"performance":0.31},{"date_ms":1642118400000,"performance":0.65},{"date_ms":1642204800000,"performance":0.88},{"date_ms":1642291200000,"performance":0.9}])
  const data = {
    start_date: 1641945600000,
    end_date: 1642118400000
  }
  vuexStore.commit('updateChartDate', data)
  expect(vuexStore.state.count).toBe([
    {"date_ms":1641945600000,"performance":0.83},
    {"date_ms":1642032000000,"performance":0.31},
    {"date_ms":1642118400000,"performance":0.65}
  ]
)
})