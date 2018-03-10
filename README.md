# expand-keys

[![Greenkeeper badge](https://badges.greenkeeper.io/patrickleet/expand-keys.svg)](https://greenkeeper.io/)

```
describe('expandKeys', () => {
  it('expands keys', () => {
    let expected = {
      hello: {
        world: 1,
        galaxy: 2
      },
      three: {
        dots: {
          deep: {
            son: {
              wow: true
            }
          }
        }
      }
    }
    let expanded = expandKeys({
      'hello.world': 1,
      'hello.galaxy': 2,
      'three.dots.deep.son': { wow: true }
    })
    expect(expanded).toEqual(expected)
  })
})

```