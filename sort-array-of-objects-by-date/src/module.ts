import { Article } from './data'

type FormattedArticle = Omit<Article, 'date'> & {
    date: Date
}

type Order = 'DESC' | 'ASC'

export const formatArticleDates = (articles: Article[]): FormattedArticle[]  => (
    articles.map((article: Article) => {
        const [day, month, year] = article.date.split('/').map(item => +item) // [00, 00, 0000]

        return {
            ...article,
            date: new Date(year, month - 1, day)
        }
    })
)

export const sortArticles = ({ articles, order }: { articles: FormattedArticle[], order?: Order}): FormattedArticle[] => (
    Array.from(articles).sort((a, b) => {
        const leftOperand = order === 'DESC' ? b : a
        const rightOperand = order === 'DESC' ? a : b

        return leftOperand.date.getTime() - rightOperand.date.getTime()
    })
)

