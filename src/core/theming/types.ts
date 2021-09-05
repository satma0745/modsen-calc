type ThemeParameter<N extends number, ParamType> = N extends 0
  ? never[]
  : {
      0: ParamType
      length: N
    } & ReadonlyArray<ParamType>

interface Theme {
  spacing: ThemeParameter<6, string>
  fontSize: ThemeParameter<5, string>
  color: ThemeParameter<4, string>
  background: ThemeParameter<4, string>
}

type ThemeKind = 'light' | 'dark'

export { Theme, ThemeKind }
