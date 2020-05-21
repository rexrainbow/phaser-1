// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function GetRandom (array: any[], startIndex: number = 0, length?: number): any
{
    if (!length)
    {
        length = array.length;
    }

    const randomIndex = startIndex + Math.floor(Math.random() * length);

    return array[randomIndex];
}
