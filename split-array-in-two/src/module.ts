export const wizards = ['Merlin', 'Gandalf', 'Ursula', 'Radagast'];

export const splitInTwoWithSlice = (arr: string[]): {first: string[], second: string[]} => {
    const first = arr.slice(0, 2)
    const second = arr.slice(2)
    const result = { first, second }

    console.log({ withSlice: result })

    return result
}

export const splitInTwoWithSplice = (arr: string[]): {first: string[], second: string[]} => {
    const second = arr.splice(2)
    const result = { first:arr, second }

    console.log({ withSplice: result })

    return result
}
