// 准备getters——用于将state中的数据进行加工

const getters = {
  sum: state => state.countOptions.sum,
  bigSum: state => state.countOptions.sum * 10,
  school: state => state.countOptions.school,
  subject: state => state.countOptions.subject
}

export default getters