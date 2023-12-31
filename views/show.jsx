const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
      return (
        <Default>
          <h2>Show Page</h2>
          <h3>{bread.name}</h3>
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
             <input type='submit' value="DELETE"/>
          </form>
          <img src={bread.image} alt={bread.name} />
          <p>{bread.getBakedBy()}</p>
          <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
          <p>
            and it {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
          </p>
        </Default>
      )
  }
  
module.exports = Show


