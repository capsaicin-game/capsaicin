import { Pepper, PepperColor } from '../models/types'

export const getPepper = (color: PepperColor): Pepper => ({
    color,
    kind: 'pepper',
})