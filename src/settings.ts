export let settings: { [key: string]: any } = {};

settings = {
    colors: [
        "red",
        "blue",
        "green",
        "white",
        "purple",
        "gray",
        "orange"
    ],
    size: 9,
    board: [],
    path: [],
    ballId: '',
    fieldId: ''
};

export let set = (k: string, v: any) => settings[k] = v;