export interface InputModel<T> {
    value: T | null,
    error: boolean,
    errorContent: string | null,
    placeHolder: string | null,
    type?: string,
}

export const initializeText: (value: string | null, placeHolder: string | null) => InputModel<string> = (value: string | null, placeHolder: string | null) => {
    const inputText: InputModel<string> = {
        value: value,
        placeHolder: placeHolder,
        error: false,
        errorContent: null,
        type: 'text'
    }
    return inputText
}

export const initializeNumber: (value: number | null, placeHolder: string | null) => InputModel<number> = (value: number | null, placeHolder: string | null) => {
    const inputNumber: InputModel<number> = {
        value: value,
        placeHolder: placeHolder,
        error: false,
        errorContent: null,
        type: 'number'
    }
    return inputNumber
}

export const initializeArrayString: (value: string[] | null, placeHolder: string | null) => InputModel<string[]> = (value: string[] | null, placeHolder: string | null) => {
    const inputArrayString: InputModel<string[]> = {
        value: value,
        placeHolder: placeHolder,
        error: false,
        errorContent: null,
        type: 'text'
    }
    return inputArrayString
}

export const initializeArrayNumber: (value: number[] | null, placeHolder: string | null) => InputModel<number[]> = (value: number[] | null, placeHolder: string | null) => {
    const inputArrayNumber: InputModel<number[]> = {
        value: value,
        placeHolder: placeHolder,
        error: false,
        errorContent: null,
        type: 'text'
    }
    return inputArrayNumber
}