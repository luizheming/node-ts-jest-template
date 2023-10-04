import { start } from '.'

describe('start', () => {
  // Function logs 'Hello, typescript'
  it('should log "Hello, typescript"', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    start()
    expect(consoleSpy).toHaveBeenCalledWith('Hello, typescript')
    consoleSpy.mockRestore()
  })

  // None
  it('should not throw any errors', () => {
    expect(start).not.toThrow()
  })

  // Function does not throw any errors
  it('should not return anything', () => {
    const result = start()
    expect(result).toBeUndefined()
  })

  // Function does not return anything
  it('should be called only once per execution', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    start()
    expect(consoleSpy).toHaveBeenCalledTimes(1)
    consoleSpy.mockRestore()
  })

  // Function is called only once per execution
  it('should have execution time less than 1 second', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    const startTime = new Date().getTime()
    start()
    const endTime = new Date().getTime()
    const executionTime = endTime - startTime
    expect(executionTime).toBeLessThan(1000)
    consoleSpy.mockRestore()
  })
})
