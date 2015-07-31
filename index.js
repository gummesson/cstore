/*!
 * Exports
 */

module.exports = store

/**
 * Initialize `store`.
 *
 * @return {Function.<Object>}
 */

function store() {
  const data = []

  /**
   * Add `value`.
   *
   * @param {*} value
   * @return {*}
   */

  function add(value) {
    if (arguments.length) {
      data.push(value)
      return value
    }
  }

  /**
   * Remove a value with `key`.
   *
   * @param {Integer} key
   * @return {*}
   */

  function remove(key) {
    if (arguments.length) {
      const value = data[key]
      data.splice(key, 1)
      return value
    }
  }

  /**
   * Get all values or a value with `key`.
   *
   * @param {Integer} [key]
   * @return {*}
   */

  function get(key) {
    if (!arguments.length) return data
    const value = data[key]
    if (value) return value
  }

  get._data = data
  get.add = add
  get.remove = remove
  get.get = get

  return get
}
