import loadDB from './db.js'

export default async() => {
  const ideas = []

  const db = await loadDB()
  const item = await db
  .once('value')
  .then(snapshot => {
    snapshot.forEach(e => {
      ideas.push(e.val())
    })
  })

  return ideas
}
