import profile from 'function-profiler'

function example(a: string, b: number, c: boolean): string[] {
  return [a, `${b}`, `${c}`]
}

// $ExpectType string[]
profile(example)('foo', -1, false)

// $ExpectError
profile(example)(false, false, false)
