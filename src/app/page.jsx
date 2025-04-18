import Header from "./components/header";
import Hero from "./components/hero";
import CategoryCard from "./components/categoryCard";
import Footer from "./components/footer";
import PopularProducts from "./components/popularProducts";

export default function Home() {
  return (
    <div>
      <Header corHeader={"#F05080"} />

      <Hero
        linkImage={
          "https://i.pinimg.com/736x/fa/68/a5/fa68a517817e95ea9e05e0b939e1e7e8.jpg"
        }
        heroTitulo={"Aqui a sua Beleza Entra em Primeiro Lugar"}
        heroTexto={
          "Quer saber como ter uma pele naturalmente bonita? Descubra 8 dicas de beleza simples para começar hoje mesmo e deixar a pele ainda mais radiante."
        }
        textoPrimeiroBotao={"Ler Mais"}
        corBotao={"#F05080"}
        textoSegundoBotao={"Sobre"}
      />

      <CategoryCard />

      <PopularProducts />

      <Footer />
    </div>
  );
}
