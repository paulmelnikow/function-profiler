// TypeScript Version: 3.5

export default function profile<TFunction extends Function>(
  this: any,
  fn: TFunction,
  description?: string
): TFunction
