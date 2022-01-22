import { kebabToCamel } from '../src'

it('should convert a kebab-case string to camelCase', () => {
  expect(kebabToCamel('')).toEqual('')
  expect(kebabToCamel('hello')).toEqual('hello')
  expect(kebabToCamel('hello-world')).toEqual('helloWorld')
  expect(kebabToCamel('hello-camel-world')).toEqual('helloCamelWorld')
  expect(kebabToCamel('edge-')).toEqual('edge')
  expect(kebabToCamel('-edge')).toEqual('Edge')
})
