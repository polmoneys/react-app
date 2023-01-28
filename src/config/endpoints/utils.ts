/**
 * Helper function to get the endpoint (URI) with route parameters replaced by the given values (in order of appearance).
 *
 * e.g getEndpoint('posts/{postId}/comments/{commentId}', 10, 20) will return "posts/10/comments/20"
 *
 * @param {string} endpoint Route endpoint (URI) with parameters name between {}
 * @param params Infinite number of values
 * @return {string}
 */
export const getEndpoint = (endpoint: string, ...params: any[]): string => {
  let endpointWithParams = endpoint;

  const regex = /(?:{[\w]+})/gm;
  const paramsFound = endpoint && endpoint.match(regex);

  if (paramsFound) {
    paramsFound.forEach((param, index) => {
      if (Array.isArray(params) && params[index]) {
        // Replace route parameter with value
        endpointWithParams = endpointWithParams.replace(
          param,
          params[index].toString()
        );
      }
    });
  }

  return endpointWithParams;
};
