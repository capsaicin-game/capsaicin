import { Pepper, PepperColor, TimeOfDay } from "../types"
export const MARKET_CARDS = {
    [TimeOfDay.MORNING]: [
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 2,
            pointValue: 0,
            peppersRequired: {
                [PepperColor.Red]: 2
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 0,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Red]: 1,
                [PepperColor.Yellow]: 1,
            },
            getPepperReward: () => ({[PepperColor.Orange]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Red]: 1
            },
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 5,
            pointValue: 0,
            peppersRequired: {
                [PepperColor.Green]: 1
            },
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 2,
            pointValue: 0,
            peppersRequired: {
                [PepperColor.Yellow]: 2
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 0,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Red]: 1,
                [PepperColor.Blue]: 1,
            },
            getPepperReward: () => ({[PepperColor.Purple]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Yellow]: 1
            },
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 5,
            pointValue: 0,
            peppersRequired: {
                [PepperColor.Orange]: 1
            },
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 2,
            pointValue: 0,
            peppersRequired: {
                [PepperColor.Blue]: 2
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 0,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Blue]: 1,
                [PepperColor.Yellow]: 1,
            },
            getPepperReward: () => ({[PepperColor.Green]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Blue]: 1
            },
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 5,
            pointValue: 0,
            peppersRequired: {
                [PepperColor.Purple]: 1
            },
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 2,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Red]: 3
            },
            getPepperReward: () => ({[PepperColor.Orange]: 2})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Red]: 1,
                [PepperColor.Green]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Yellow]: 1,
                [PepperColor.Green]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Green]: 1,
                [PepperColor.Blue]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 2,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Yellow]: 3,
            },
            getPepperReward: () => ({[PepperColor.Green]: 2})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 2,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Blue]: 3,
            },
            getPepperReward: () => ({[PepperColor.Purple]: 2})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Red]: 1,
                [PepperColor.Orange]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Red]: 1,
                [PepperColor.Purple]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Yellow]: 1,
                [PepperColor.Orange]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Yellow]: 1,
                [PepperColor.Purple]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Blue]: 1,
                [PepperColor.Purple]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
        {
            kind: 'marketCard',
            time: TimeOfDay.MORNING,
            moneyReward: 3,
            pointValue: 1,
            peppersRequired: {
                [PepperColor.Blue]: 1,
                [PepperColor.Orange]: 1,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 1})
        },
    ],
    [TimeOfDay.AFTERNOON]: [
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 3,
            PeppersRequired: {
                [PepperColor.Green]: 2,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 2}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 3,
            PeppersRequired: {
                [PepperColor.Orange]: 2,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 2}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 3,
            PeppersRequired: {
                [PepperColor.Purple]: 2,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 2}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 2,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Green]: 3,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 2}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 2,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Orange]: 3,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 2}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 2,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Purple]: 3,
            },
            getPepperReward: () => ({[PepperColor.Brown]: 2}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 5,
            pointValue: 2,
            PeppersRequired: {
                [PepperColor.Green]: 1,
                [PepperColor.Brown]: 1,
            },
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 5,
            pointValue: 2,
            PeppersRequired: {
                [PepperColor.Orange]: 1,
                [PepperColor.Brown]: 1,
            },
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 5,
            pointValue: 2,
            PeppersRequired: {
                [PepperColor.Purple]: 1,
                [PepperColor.Brown]: 1,
            },
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.White]: 1,
                [PepperColor.Orange]: 1,
            },
            getPepperReward: () => ({[PepperColor.Black]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.White]: 1,
                [PepperColor.Green]: 1,
            },
            getPepperReward: () => ({[PepperColor.Black]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.White]: 1,
                [PepperColor.Purple]: 1,
            },
            getPepperReward: () => ({[PepperColor.Black]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Black]: 1,
                [PepperColor.Orange]: 1,
            },
            getPepperReward: () => ({[PepperColor.White]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Black]: 1,
                [PepperColor.Purple]: 1,
            },
            getPepperReward: () => ({[PepperColor.White]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Black]: 1,
                [PepperColor.Green]: 1,
            },
            getPepperReward: () => ({[PepperColor.White]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Black]: 1,
                [PepperColor.Brown]: 1,
            },
            getPepperReward: () => ({[PepperColor.White]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.White]: 1,
                [PepperColor.Brown]: 1,
            },
            getPepperReward: () => ({[PepperColor.Black]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 5,
            PeppersRequired: {
                [PepperColor.Black]: 1,
                [PepperColor.White]: 1,
            },
            getPepperReward: () => ({[PepperColor.Ghost]: 1}),
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 4,
            pointValue: 1,
            PeppersRequired: {
                [PepperColor.Red]: 1,
                [PepperColor.Brown]: 1,
            },
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 4,
            pointValue: 1,
            PeppersRequired: {
                [PepperColor.Yellow]: 1,
                [PepperColor.Brown]: 1,
            },
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 4,
            pointValue: 1,
            PeppersRequired: {
                [PepperColor.Blue]: 1,
                [PepperColor.Brown]: 1,
            },
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 7,
            pointValue: 2,
            PeppersRequired: {
                [PepperColor.Brown]: 2,
            },
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Green]: 1,
                [PepperColor.Orange]: 1,
                [PepperColor.Purple]: 1,
            },
            getPepperReward: (color: PepperColor) => ({[color]: 1})
        },
        {
            kind: "marketCard",
            time: TimeOfDay.AFTERNOON,
            moneyReward: 0,
            pointValue: 4,
            PeppersRequired: {
                [PepperColor.Green]: 1,
                [PepperColor.Orange]: 1,
                [PepperColor.Purple]: 1,
            },
            getPepperReward: (color: PepperColor) => ({[color]: 1})
        },
    ]
}