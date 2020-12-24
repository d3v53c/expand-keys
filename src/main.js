/**
 * Returns true, if given key is included in the blacklisted
 * keys.
 * @param {String} key key for check, string.
 * @returns {Boolean}.
 */
function isPrototypePolluted (key) {
  return ['__proto__', 'prototype', 'constructor'].includes(key)
}

export const setPathValue = (layer, path, value) => {
  let splitPath = path.split('.')
  return splitPath
    .reduce((layer, pathSection, i) => {
      // if last section
      if (i + 1 === splitPath.length) {
        layer[pathSection] = value
      }

      layer = layer[pathSection] = layer[pathSection] || {}
      return layer
    }, layer)
}

// expands keys with .'s to nested objects
export const expandKeys = (obj) => {
  return Object.keys(obj)
    .filter(key => key.indexOf('.') > -1)
    .reduce(function (obj, key) {
      var keyValue = obj[key]
      !isPrototypePolluted(key) && setPathValue(obj, key, keyValue)
      delete obj[key]
      return obj
    }, obj)
}
