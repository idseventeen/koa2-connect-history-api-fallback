const modules = require('@/')

describe('Unit Base Test', () => {
  it('should have correct module', () => {
    expect(modules.default).toBeInstanceOf(Function)
    expect(modules.historyApiFallback).toBeInstanceOf(Function)
  })
})
