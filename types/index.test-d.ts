import { expectError, expectType } from 'tsd'
import profile from '..'

function example(a: string, b: number, c: boolean): string[] {
  return [a, `${b}`, `${c}`]
}

expectType<string[]>(profile(example)('foo', -1, false))

expectError(profile(example)(false, false, false))
