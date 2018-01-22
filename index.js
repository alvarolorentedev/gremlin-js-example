
const grem = require('gremlin')
const client = grem.createClient()
const gremlin = grem.makeTemplateTag(client)

const createEdge = async (person1, person2, relation) => {
    let create = await gremlin`g.V().has('name', ${person1})[0].addEdge(${relation}, g.V().has('name', ${person2})[0])`
    console.log(create)
}

const createVertex = async (name) => {
    try {
        const vertex = await gremlin` g.addV("person").property("name", ${name}).next()`
        console.log(vertex)
        return vertex
        
    } catch (error) {
        console.log(error)
    }
    
}
 
const fetchByName = async (name) => {
    try {
  const users = await gremlin`g.V().has('name', ${name})[0]`
  console.log(users)
  return user
          
} catch (error) {
    console.log(error)
}
}

createVertex('Pepe')
createVertex('Juanito')
createEdge('Pepe', 'Juanito', 'amigo')
