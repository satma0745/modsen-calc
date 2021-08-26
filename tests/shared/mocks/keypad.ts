interface KeypadPropMocks {
  resetError: jest.Mock
  clear: jest.Mock<void, ['all' | 'entry']>
  onEquals: jest.Mock
  changeSign: jest.Mock
  addNonNumeric: jest.Mock<void, [string]>
  addNumeric: jest.Mock<void, [string]>
}

const generateKeypadPropMocks = (): KeypadPropMocks => ({
  resetError: jest.fn(),
  clear: jest.fn((_: 'all' | 'entry') => {}),
  onEquals: jest.fn(),
  changeSign: jest.fn(),
  addNonNumeric: jest.fn((_: string) => {}),
  addNumeric: jest.fn((_: string) => {}),
})

export default generateKeypadPropMocks
