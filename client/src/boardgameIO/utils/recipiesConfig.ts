import { PepperColor } from "../models/types"
export const ALL_RECIPES = [
    {
        name: 'Hungarian Wax Pepper',
        ingredients: {
            [PepperColor.Yellow]: 1,
            [PepperColor.Purple]: 1, 
        },
        kind: 'recipe',
        pointValue: 3,
    },
    {
        name: "The Pope's Hat",
        ingredients: {
            [PepperColor.Blue]: 1,
            [PepperColor.Orange]: 1,
        },
        kind: 'recipe',
        pointValue: 3
    },
    {
        name: "Bolivian Rainbow",
        ingredients: {
            [PepperColor.Green]: 1,
            [PepperColor.Red]: 1,
            [PepperColor.Yellow]: 1,
        },
        kind: 'recipe',
        pointValue: 4,
    },
    {
        name: "Lemon Drop",
        ingredients: {
            [PepperColor.Purple]: 1,
            [PepperColor.Orange]: 1,
            [PepperColor.Blue]: 1,
        },
        kind: 'recipe',
        pointValue: 5
    },
    {
        name: "The Daddy Special",
        ingredients: {
            [PepperColor.Red]: 1,
            [PepperColor.Green]: 1,
            [PepperColor.Purple]: 1,
        },
        kind: 'recipe',
        pointValue: 5
    },
    {
        name: "South of the Border",
        ingredients: {
            [PepperColor.Green]: 1,
            [PepperColor.Orange]: 1,
            [PepperColor.Yellow]: 1,
        },
        kind: 'recipe',
        pointValue: 5
    },
    {
        name: "El Diablo Grande",
        ingredients: {
            [PepperColor.Brown]: 1,
            [PepperColor.Red]: 1,
            [PepperColor.Yellow]: 1,
            [PepperColor.Blue]: 1,
        },
        kind: 'recipe',
        pointValue: 6
    },
    {
        name: "San Juan Special",
        ingredients: {
            [PepperColor.Brown]: 1,
            [PepperColor.Orange]: 1,
            [PepperColor.Yellow]: 1,
        },
        kind: 'recipe',
        pointValue: 6
    },
    {
        name: "Baha Blast",
        ingredients: {
            [PepperColor.Blue]: 1,
            [PepperColor.Brown]: 1,
            [PepperColor.Yellow]: 1,
            [PepperColor.Orange]: 1,
        },
        kind: 'recipe',
        pointValue: 7
    },
    {
        name: 'LoGrasso Chili',
        ingredients: {
            [PepperColor.Black]: 1,
            [PepperColor.Brown]: 1,
            [PepperColor.Yellow]: 1,
        },
        kind: 'recipe',
        pointValue: 8
    },
    {
        name: 'Ugandan Hedgehog',
        ingredients: {
            [PepperColor.White]: 1,
            [PepperColor.Brown]: 1,
            [PepperColor.Purple]: 1,
            [PepperColor.Blue]: 1,
        },
        kind: 'recipe',
        pointValue: 10,
    },
    {
        name: 'North Carolina Cayenne',
        ingredients: {
            [PepperColor.Black]: 1,
            [PepperColor.Purple]: 2,
            [PepperColor.Yellow]: 1,
        },
        kind: 'recipe',
        pointValue: 9
    },
    {
        name: 'Jaimaican Blaster',
        ingredients: {
            [PepperColor.White]: 1,
            [PepperColor.Green]: 2,
            [PepperColor.Blue]: 2,
        },
        kind: 'recipe',
        pointValue: 10
    },
    {
        name: 'Welsh Tuxedo',
        ingredients: {
            [PepperColor.White]: 1,
            [PepperColor.Green]: 1,
            [PepperColor.Orange]: 1,
            [PepperColor.Purple]: 1,
        },
        kind: 'recipe',
        pointValue: 10
    },
    {
        name: 'Fatalis',
        ingredients: {
            [PepperColor.Black]: 1,
            [PepperColor.Orange]: 1,
            [PepperColor.Green]: 1,
            [PepperColor.Purple]: 1,
        },
        kind: 'recipe',
        pointValue: 10
    },
    {
        name: 'Devil in the Details',
        ingredients: {
            [PepperColor.Black]: 1,
            [PepperColor.White]: 1,
            [PepperColor.Purple]: 1,
            [PepperColor.Red]: 1,
            [PepperColor.Blue]: 1,
        },
        kind: 'recipe',
        pointValue: 12
    },
    {
        name: 'Madame Claude',
        ingredients: {
            [PepperColor.Brown]: 1,
            [PepperColor.Green]: 1,
            [PepperColor.Orange]: 1,
            [PepperColor.Purple]: 1,
            [PepperColor.Yellow]: 1,
            [PepperColor.Red]: 1,
            [PepperColor.Blue]: 1,
        },
        kind: 'recipe',
        pointValue: 12
    },
    {
        name: 'Dinosaur Digsite',
        ingredients: {
            [PepperColor.Black]: 1,
            [PepperColor.White]: 1,
            [PepperColor.Brown]: 1,
            [PepperColor.Orange]: 1,
        },
        kind: 'recipe',
        pointValue: 13
    },
    {
        name: 'Mole Chili',
        ingredients: {
            [PepperColor.Brown]: 5,
        },
        kind: 'recipe',
        pointValue: 15
    },
    {
        name: 'South China Spicy',
        ingredients: {
            [PepperColor.White]: 2,
            [PepperColor.Brown]: 2,
            [PepperColor.Red]: 2,
        },
        kind: 'recipe',
        pointValue: 16
    },
    {
        name: 'Spiced Pepper Hurricane',
        ingredients: {
            [PepperColor.Black]: 2,
            [PepperColor.Brown]: 2,
            [PepperColor.Red]: 2,
        },
        kind: 'recipe',
        pointValue: 16
    },
    {
        name: 'Naga Venom',
        ingredients: {
            [PepperColor.Ghost]: 1,
            [PepperColor.Black]: 1,
            [PepperColor.White]: 1,
            [PepperColor.Brown]: 1,
        },
        kind: 'recipe',
        pointValue: 17
    },
    {
        name: 'Ghost Blood Chili',
        ingredients: {
            [PepperColor.Ghost]: 1,
            [PepperColor.White]: 3,
        },
        kind: 'recipe',
        pointValue: 18
    },
    {
        name: 'Rocket Ship Chili',
        ingredients: {
            [PepperColor.Ghost]: 1,
            [PepperColor.Black]: 3,
        },
        kind: 'recipe',
        pointValue: 18
    },
    {
        name: "12 Alarm Chili",
        ingredients: {
            [PepperColor.Ghost]: 2,
            [PepperColor.White]: 1,
            [PepperColor.Black]: 1,
        },
        kind: 'recipe',
        pointValue: 20
    },
    {
        name: "The Smoking Gun",
        ingredients: {
            [PepperColor.White]: 2,
            [PepperColor.Black]: 2,
            [PepperColor.Green]: 1,
            [PepperColor.Orange]: 1,
            [PepperColor.Purple]: 1,
        },
        kind: 'recipe',
        pointValue: 22
    },
    {
        name: "King Cobra",
        ingredients: {
            [PepperColor.Ghost]: 2,
            [PepperColor.Brown]: 2,
            [PepperColor.Green]: 2,
        },
        kind: 'recipe',
        pointValue: 22
    },
    {
        name: "Trinidadian Triple",
        ingredients: {
            [PepperColor.Ghost]: 2,
            [PepperColor.Black]: 1,
            [PepperColor.White]: 1,
            [PepperColor.Red]: 1,
            [PepperColor.Yellow]: 1,
            [PepperColor.Blue]: 1,
        },
        kind: 'recipe',
        pointValue: 23
    },
    {
        name: 'Bowl Full of Buckshot',
        ingredients: {
            [PepperColor.Ghost]: 3,
            [PepperColor.Brown]: 2,
        },
        kind: 'recipe',
        pointValue: 24
    },
    {
        name: "Chili, Destroyer of worlds",
        ingredients: {
            [PepperColor.Ghost]: 4,
        },
        kind: 'recipe',
        pointValue: 24
    }
]