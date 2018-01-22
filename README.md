# gremlin-js-example
repo to understand how to use gremlin in JS. this project shows how to create queries to create vertex and edges and how to consult them

## Start server and Example

To use this example you need a Gremlin server running, the easiest way is to download Janusgraph, uncompress and run 

```
yarn start:janus
```
to run the application you have tu run 

```
yarn start
```

## create a vertex

For this just add the type of vertex and the properties
```
...
const vertex = await gremlin` g.addV("person").property("name", ${name}).next()`
...
```

## Query vertex
this is just a call using the properties defined before
```
...
const query = await gremlin`g.V().has('name', ${name})`
...
```

## create an edge

the call as the rest of them is quite straight forward but you will require the vertex object that you want to add an edge to. there are 2 ways of doing this, by variable on the gremlin server (I would not recomend this as is memory that will stay reserved in the JVM) or do the query and apply the edge creation (more time consuming)
```
...
let edge = await gremlin`g.V().has('name', ${person1})[0].addEdge(${relation}, g.V().has('name', ${person2})[0])`
...
```

