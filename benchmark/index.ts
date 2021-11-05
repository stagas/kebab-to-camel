import assert from 'assert'
import { suite, add, cycle, complete, configure } from 'benny'
import { asciiChartReporter } from 'benny-ascii-chart-reporter'

import { kebabToCamelString } from '@common-utilities/kebab-to-camel-string'
import { camelCase as changeCase } from 'change-case'
import { camelCase as caseAnything } from 'case-anything'
import { kebabToCamel } from '../src'

function regExpReplace(s: string) {
  return s.replace(/-(.)/g, function (_: string, char: string) {
    return char.toUpperCase()
  })
}

function forLoopIndexAccess(input: string) {
  let output = ''
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '-') {
      i++
      output += input[i].toUpperCase()
    } else {
      output += input[i]
    }
  }
  return output
}

{
  const kebab = 'hello-world-test-validity'
  const camel = 'helloWorldTestValidity'

  assert.equal(kebabToCamelString(kebab), camel)
  assert.equal(changeCase(kebab), camel)
  assert.equal(caseAnything(kebab), camel)
  assert.equal(regExpReplace(kebab), camel)
  assert.equal(forLoopIndexAccess(kebab), camel)
  assert.equal(kebabToCamel(kebab), camel)
}

///////////////////////////////////////////////////////////////////////////////

// const string = 'hello-world'
const string = 'hello-world-medium-size'
// const string = 'hello-world-one-two-three-four-five-six-seven-eight-nine-ten'

suite(
  'kebab-case to camel-case',

  configure({
    cases: {
      minSamples: 5,
      maxTime: parseFloat(process.argv[2]) || 1
    }
  }),

  add('kebab-to-camel-string', () => kebabToCamelString(string)),
  add('change-case', () => changeCase(string)),
  add('case-anything', () => caseAnything(string)),
  add('regexp replace', () => regExpReplace(string)),
  add('for-loop index access', () => forLoopIndexAccess(string)),
  add('kebab-to-camel', () => kebabToCamel(string)),

  cycle(),
  complete(asciiChartReporter()),
  complete()
)
