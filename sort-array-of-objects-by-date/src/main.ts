import {articles} from "./data";
import {formatArticleDates, sortArticles} from './module'

const formattedArticles = formatArticleDates(articles)
const formattedArticlesInAscendingOrder = sortArticles({articles: formattedArticles, order: 'ASC'})
const formattedArticlesInDescendingOrder = sortArticles({articles: formattedArticles, order: 'DESC'})

console.log({ formattedArticlesInAscendingOrder })
console.log({ formattedArticlesInDescendingOrder })

