import loadDB from './db.js'

export default async(idea) => {
  const db = await loadDB()
  const item = await db

  const newIdea = item.push()
  newIdea.set({
    'content': idea
  })

  return item
}
