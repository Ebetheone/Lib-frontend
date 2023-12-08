import Router, { useRouter } from "next/router"

const isObject = (a: any) => !!a && a.constructor === Object

// const deleteMap = {}

export const useOnSearch = () => {
  const { pathname, query } = useRouter()

  // On search we're remoing pagination

  const onSearch = (key: any, value: string) => {
    let _query = { ...query }
    delete _query.page

    // if (deleteMap[key]) delete _query[deleteMap[key]]
    if (!key) {
      _query = {}
    } else if (isObject(key)) {
      Object.keys(key).forEach((k) => {
        if (!key[k]) delete _query[k]
        else _query[k] = key[k]
      })
    } else if (!value) delete _query[key]
    else _query[key] = value
    Router.push({
      pathname,
      query: _query,
    })
  }

  return onSearch
}
