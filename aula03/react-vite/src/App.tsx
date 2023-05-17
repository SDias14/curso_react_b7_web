import Header from './app/view/Header'

function App () {

  const name = 'treece' // colocando js dentro do html

  //first letter to upper case
  const nameToUpper =  name.charAt(0).toUpperCase() + name.slice(1)

 
  return (
    //colocando html dentro do js
    <div className="App">

      <Header /> {/* chamando o componente Header */} 

      <h1>Olá { nameToUpper }, tudo bem? </h1> 
    </div>
  );
}

export default App;