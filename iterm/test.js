const R = require('Ramda')
const { Identity, Either } = require('ramda-fantasy')
const { Left, Right } = require('ramda-fantasy').Either

const checkIfMac = () => Identity(true)
const checkIfIterm = () => Identity(false)

// const pass = cond1 => cond2 => value => cond1 && cond2 ? Left(value) : Right('conditions not met')

// const res = Either(pass).ap(checkIfMac()).ap(checkIfIterm())
//
//
const concat = R.curry((x, y) => [x, y])

const res = Identity(concat).ap(Identity(2)).ap(Identity(3))





console.log(res)
