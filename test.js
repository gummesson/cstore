/*!
 * Dependencies
 */

const test = require('tape')
const cstore = require('./')

/*!
 * Tests
 */

test('cstore()', (t) => {
  t.test('.add(value)', (assert) => {
    const store = cstore()

    const foo = store.add('foo')
    const bar = store.add('bar')
    const baz = store.add('baz')
    const undef = store.add()

    assert.equal(foo, 'foo')
    assert.equal(bar, 'bar')
    assert.equal(baz, 'baz')
    assert.equal(undef, undefined)
    assert.deepEqual(store._data, ['foo', 'bar', 'baz'])
    assert.end()
  })

  t.test('.get([key])', (assert) => {
    const store = cstore()

    store.add('foo')
    store.add('bar')
    store.add('baz')

    assert.deepEqual(store(), ['foo', 'bar', 'baz'])
    assert.deepEqual(store.get(0), 'foo')
    assert.end()
  })

  t.test('.remove(key)', (assert) => {
    const store = cstore()

    store.add('foo')
    store.add('bar')
    store.add('baz')

    const baz = store.remove(2)
    const bar = store.remove(1)
    const undef = store.remove()

    assert.equal(baz, 'baz')
    assert.equal(bar, 'bar')
    assert.equal(undef, undefined)
    assert.deepEqual(store(), ['foo'])
    assert.end()
  })
})
