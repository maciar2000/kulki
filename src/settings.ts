export let settings: { [key: string]: any } = {};

settings = {
    'colors': [
        "red",
        "blue",
        "green",
        "black",
        "pink",
        "gray",
        "orange"
    ],
    size: 9,
    board: [0],
    ballId: '',
    fieldId:''
};

export let set = (k: string, v: any) => settings[k] = v;