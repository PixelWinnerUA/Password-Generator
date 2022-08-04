export const generatePassword = (length: number, lower: boolean, upper: boolean, number: boolean, symbol: boolean): string => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const symbols = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];

    let params: Array<string> = [];
    if (lower) params = params.concat(lowerCase);
    if (upper) params = params.concat(upperCase);
    if (number) params = params.concat(numbers);
    if (symbol) params = params.concat(symbols);

    const compareRandom = (): number => Math.random() - 0.5;
    const getRandomElement = (arrayLength: number): number => Math.round(Math.random() * arrayLength);

    params.sort(compareRandom);

    let result = "";
    for (let i = 0; i < length; i++) {
        result += params[getRandomElement(params.length - 1)];
    }

    return result;
}