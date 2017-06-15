import loadDB from './db.js'

export default async() => {
  const ideas = []

  const db = await loadDB()
  const item = await db
  .once('value')
  .then(snapshot => {
    snapshot.forEach(function(e){
      ideas.push(e.val().content)
    })
  })

  return ideas
}
