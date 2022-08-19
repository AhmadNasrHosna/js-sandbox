export interface Article {
    name: string,
    date: `${number}/${number}/${number}`
}

export const articles: Article[] = [
    { "name": "HTML Inputs", "date": "12/03/2022" },
    { "name": "Python Tips", "date": "04/06/2022" },
    { "name": "Javascript Objects", "date": "05/05/2022" }
]
