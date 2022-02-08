import { Pepper, PepperColor } from '../types'

export const getPepper = (color: PepperColor): Pepper => ({
    color,
    kind: 'pepper',
})