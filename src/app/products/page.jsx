import Footer from '../components/footer';
import Header from '../components/header';
<<<<<<< Updated upstream
=======
import Hero from '../components/hero';
import SectionCardsProducts from '../components/section_cards_products';
import SectionCards from '../components/section_cards';
import Card from '../components/card';
import CategoryCard2 from '../components/categoryCard2';
import DiviCard from '../components/diviCard';

>>>>>>> Stashed changes

export default function Produtos() {
    return (
        <div>
<<<<<<< Updated upstream
            <Header corHeader={"#DBBD9C"}/>
            <h1>Conheça os produtos</h1>
=======
            <Header corHeader={"#DBBD9C"} />

            <Hero
                linkImage={"https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"}
                heroTitulo={"A Beleza Nunca Esteve Tão Próxima"}
                heroTexto={"Já sabe do que precisa, mas não tem ideia de onde comprar? Venha, vamos te ajudar! Aqui você encontrará produtos perfeitos para o que tem em mente. "}
                textoPrimeiroBotao={"Ler Mais"}
                corBotao={"#DBBD9C"}
                textoSegundoBotao={"Sobre"}
            />
            <DiviCard>
            <CategoryCard2 title={"Skincare"} count={"1"} link={"Skincare"} />
            <CategoryCard2 title={"Maquiagem"} count={"2"} link={"/produtos"} />
            <CategoryCard2 title={"Corpo"} count={"3"} link={"/produtos"} />
            </DiviCard>

            <SectionCardsProducts titulo={"Skincare"} corGradiente={"#5FCED4"}>

                <SectionCards corBotao={"#FFF"}  corTextoBotao={"#5FCED4"}>

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"/article_skincare"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                </SectionCards>

            </SectionCardsProducts>

            <SectionCardsProducts titulo={"Maquiagem"} corGradiente={"#F05080"}>

                <SectionCards corGradiente={"#5FCED4"} corBotao={"#FFF"}  corTextoBotao={"#F05080"}>

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"/article_skincare"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                </SectionCards>

            </SectionCardsProducts>

            <SectionCardsProducts titulo={"Corpo"} corGradiente={"#DBBD9C"}>

                <SectionCards corGradiente={"#5FCED4"} corBotao={"#FFF"}  corTextoBotao={"#5FCED4"}>

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"/article_skincare"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                </SectionCards>

            </SectionCardsProducts>

>>>>>>> Stashed changes
            <Footer />
        </div>
    );
};