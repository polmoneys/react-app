export const getEndpoint = (endpoint: string, ...params: any[]): string => {
  let endpointWithParams = endpoint
  console.log(endpoint)
  if (endpoint === '') return ''
  const regex = /(?:{[\w]+})/gm
  const paramsFound = endpoint.match(regex)

  if (paramsFound != null) {
    paramsFound.forEach((param, index) => {
      if (Array.isArray(params) && Boolean(params[index])) {
        // Replace route parameter with value
        endpointWithParams = endpointWithParams.replace(
          param,
          params[index].toString(),
        )
      }
    })
  }

  return endpointWithParams
}
