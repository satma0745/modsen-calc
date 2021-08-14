import inputs from './inputs'

const push = inputs.push.bind(inputs)
const pop = inputs.pop.bind(inputs)
const clear = inputs.clear.bind(inputs)
const subscribe = inputs.subscribe.bind(inputs)

export { push, pop, clear, subscribe }
