import * as modules from '../src/index'

describe('Unit Base Test', () => {
  it('should have correct module', () => {
    expect(modules.default).toBeInstanceOf(Function)
    expect(modules.historyApiFallback).toBeInstanceOf(Function)
  })
})
