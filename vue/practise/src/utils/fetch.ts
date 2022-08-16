import { isRef, ref, unref, watchEffect } from "vue"

export function useFetch(url: string) {
  const data = ref([])
  const error = ref(null)

  function doFetch() {
    // 在请求之前重设状态
    data.value = []
    error.value = null
    // unref() 解包可能为 ref 的值
    fetch(unref(url))
      .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))
  }

  if (isRef(url)) {
    watchEffect(doFetch)
  } else {
    doFetch()
  }

  return { data, error }
}