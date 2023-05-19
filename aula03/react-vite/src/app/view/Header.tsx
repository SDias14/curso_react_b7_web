import './style.css';//faz a importação do css, não traz como no html, mas sim como um objeto

type Props = {
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//props é um objeto que recebe os atributos do componente. Esses atributos são passados no html
//a funcao Header recebe um objeto do tipo Props que vem do App.tsx
function Header({title} : Props) {
  return (
  
    <header>
     
    <h1 className="colores"> {title} </h1>

      <hr />


      

    </header>
  );
}

export default Header;