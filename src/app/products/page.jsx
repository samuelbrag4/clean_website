import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import SectionCardsProducts from '../components/section_cards_products';
import SectionCards from '../components/section_cards';
import Card from '../components/card';
import CategoryCard2 from '../components/categoryCard2';
import DiviCard from '../components/diviCard';


export default function Produtos() {
    return (
        <div>
            <Header corHeader={"#DBBD9C"}/>

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
                    capa={"https://revistaabm.com.br/storage/2021/04/15/95bb51711c02939ce0c954927a43b5920cf90d23.jpg"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Esfoliação"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://i0.wp.com/www.vidanatural.org.br/wp-content/uploads/2021/12/Tipos-de-massagem.png?resize=1080%2C675&ssl=1"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Massagens"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0XefV5-8xYPZ3f5Cje45t3IXQ2EGZGrnEw&s"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Tonificação"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://www.assai.com.br/sites/default/files/blog/prato_de_alimentos_equilibrados_-_alimentacao_saudavel_-_assai_atacadista.jpg"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Alimentação"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghZBHjjri7pe1vaMSElc1dxdOS4tuaQ2NHid3nIty72tZw8cKYNSsB3SIIx35pYxgO0Q&usqp=CAU"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Proteção"}
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
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhLH8SRPSREBq-8jGNj4oReX4uBMYGKTwqw&s"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Preparação de pele"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"/article_skincare"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://blog.oceane.com.br/wp-content/uploads/2024/05/destaque-preparacao-de-pele.jpg"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Cobertura"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51N94OV2SQQEp5iXaqLlKV4dRG2fBuw2Qdw&s"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Pó solto"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3kp9Vp43kYjcn-1VY20ozv7sHi5XK6U52Q&s"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Blush"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://cdn.iset.io/assets/73522/produtos/183/paleta-multifuncional-iluminador-contorno-artemis-by-karen-bachini-02.jpg"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Contorno"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://images.tcdn.com.br/img/img_prod/1217537/iluminador_compacto_glow_face_151_1_8aa867d34fd60dad32fbfc6763f12d18.jpeg"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Iluminador"}
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
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyxApmveW-i1DbSJGXbsEh7jDk16dDWQP8Q&s"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Pele seca?"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"/article_skincare"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3297024:1667568571/shutterstock_1920520772_Easy-Resize.com.jpg?f=16x9&h=574&w=1020&$p$f$h$w=81f2f0f"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Depilação"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0a6bAFcJBz0gMnLseGYhYhTMY4BTltIpmA&s"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Esfoliação"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://static.wixstatic.com/media/f0f108_a8951b73b72541b794ebcb8cf27aa3fa~mv2_d_6144_4080_s_4_2.jpg/v1/fill/w_480,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0f108_a8951b73b72541b794ebcb8cf27aa3fa~mv2_d_6144_4080_s_4_2.jpg"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Massagem"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWx6lUQ7GavDuwuRfpu9HigRsJ4KwpYp63g&s"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Sais de banho"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKPv2wuRpjNWJ2w2jCv4c0NthEscHs6h-6Q&s"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Sol"}
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

            <Footer />
        </div>
    );
};