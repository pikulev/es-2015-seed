export function route(url, routeConfig = {}) {
  return function decorator(target) {
    routeConfig.url = url;
    routeConfig.controller = target.name;
    target.$route = routeConfig;
  };
}

export function injectConfig(...dependencies) {
  return function decorator(target) {
    target.$injectConfig = dependencies;
  };
}

export function injectRun(...dependencies) {
  return function decorator(target) {
    target.$injectRun = dependencies;
  };
}

export function inject(...dependencies) {
  return function decorator(target) {
    target.$inject = dependencies;
  };
}
