/**
 * Converts a string from `kebab-case` to `camelCase`.
 *
 * @param input The string in `kebab-case` to be converted
 * @returns The string in `camelCase`
 */
export function kebabToCamel(input: string): string {
  let output = ''
  for (let i = 0, char = ''; i < input.length; i++) {
    char = input.charAt(i)
    if (char === '-') {
      output += input.charAt(++i).toUpperCase()
    } else {
      output += char
    }
  }
  return output
}

export default kebabToCamel
