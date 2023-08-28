export const HelpHttp = () => {
  const customFetch = (endpoint: string, options: RequestInit) => {
    const defaultHeaders = {
      accept: "application/json",
    };

    const controller = new AbortController();

    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = options.body !== undefined ? options.body : null;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 4000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrio un error inesperado",
            })
      )
      .catch((err) => err);
  };

  const get = (url: string, options: RequestInit = {}) =>
    customFetch(url, options);

  const post = (url: string, options: RequestInit = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  return {
    get,
    post,
  };
};
