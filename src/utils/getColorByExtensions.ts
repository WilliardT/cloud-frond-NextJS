const extColor = {
    pdf: 'purple',
    doc: 'blue',
    xls: 'green',
    txt: 'blue',
    png: 'orange',
    jpg: 'orange',
    jpeg: 'orange',
    zip: 'red',
} as const

export type Extension = keyof typeof extColor
export type Color = typeof extColor[Extension]

export const getColorByExtension = (ext: string): string => {
    return extColor[ext]
}