interface IBase {
  createTime: string
  userName: string
  userAvatar: string
}

interface IQuestionRecord {
  question: {
    title: string
    content: string
    picture: string[]
  }
}

interface IAnswerRecord {
  answer: {
    comment: string
    audio?: {
      url: string
    }
  }
}

/*
keyof提取属性的名称
例如
let n: number
keyof n === number
*/

// type Mixin<T, X> = {
//   [P in keyof (T & X)]: (T & X)[P]
// }

type Mixin<T, X> = T & X

type MixinBase<T> = Mixin<IBase, T>
type MixinQuestionRecord = MixinBase<IQuestionRecord>

interface IRecordConfig {
  question?: MixinBase<IQuestionRecord>;
  answer?: MixinBase<IAnswerRecord>
}

export type RecordConfigList = IRecordConfig[]

export interface IArgsBase<T> {
  name?: string
  description?: string
  visible?: boolean
  execConf:(() => T)
}

export type RequiredArg<T> = IArgsBase<T> & {
  required: true
  value: T
}

export type OptionalArg<T> = IArgsBase<T> & {
  required: false
  value?: T
}

interface User {
  val: string
}

const testFun = (args: OptionalArg<User>): User => {
  return {
    val: 'hi'
  }
}
testFun({name: '123', required: false, execConf: {val: '123'}})