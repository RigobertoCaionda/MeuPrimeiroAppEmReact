import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import Servicos from './pages/Servicos';
import Testemunhos from './pages/Testemunhos';
import Contacto from './pages/Contactos';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
const DivLeft = styled.div`
    cursor: pointer;
`;
const DivRight = styled.div`
    
`;
const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 80px;
`;
const UL = styled.ul`
    display: flex;
    justify-content: center;
    align-items:center;
    list-style:none;
`;
const LI = styled.li`
    padding:30px 10px;
    &:hover {
        background-color:#1b1b1b;
    }
`;
const InputText = styled.input`
 margin-left: 20px;
`;
const Footer = styled.footer`
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:80px;
    width:100%;
`;
const H1 = styled.h1`
    font-size:1.4rem;
`;
const Barrinha = styled.div`
    width:70px;
    height:5px;
    background-color:#a38a41;
    margin-top:25px;
    margin-bottom:30px;
`;
const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#1b1b1b;
`;
const Contactos = styled.nav`

`;
const ListaContainer = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    list-style:none;
`;
const ListItem = styled.li`
    margin-bottom: 10px;
`;
const Lin = styled.a`
    color:#888888;
    text-decoration:none;
    &:hover{
        color:#fff;
    }
`;
const Container2 = styled.div`
    background-color:#272727;
    padding:15px 0;
    color:#888888;
    font-weight:bold;
    text-align:center;
`;
const ContainerGeral = styled.div`
    width:100%;
`;
function App(){
    const [isLogged, setIsLogged] = useState(false);
    const handleKeyUp = (e)=>{
        if(e.keyCode === 13){
            if(e.target.value == 'true'){
               setIsLogged(true);
            }else{
                setIsLogged(false);
            }
        }
    }
    return (
            <BrowserRouter>
                <Header>
                <DivLeft>
                    <img src="logo.png"/>
                </DivLeft>

                <DivRight>
                    <nav>
                        <UL>
                            <LI><Link to="/" style={ {textDecoration: 'none',color:'#beac5a',fontSize:14} }>HOME</Link></LI>
                            <LI><Link to="/hotel" style={ {textDecoration:'none', color:'#beac5a',fontSize:14} } >HOTEL</Link></LI>
                            <LI><Link to="/servicos" style={ {textDecoration:'none',color:'#beac5a',fontSize:14} } >SERVIÇOS</Link></LI>
                            <LI><Link to="/testemunhos" style={ {textDecoration:'none',color:'#beac5a',fontSize:14} } >TESTEMUNHOS</Link></LI>
                            {
                                isLogged ?
                                <LI><Link to="/contactos" style={ {textDecoration:'none',color:'#beac5a',fontSize:14} } >CONTACTO</Link></LI>
                                : ''
                            }
                        </UL>
                    </nav>
                    </DivRight>
                </Header>

                    <Switch>
                        <Route exact path="/">
                            <Home>
                            Pagina Home <br />
                            <InputText type="text" onKeyUp={handleKeyUp}/> <br />
                            </Home>
                        </Route>
                        <Route path="/hotel">
                            <Hotel>Hotel<br /></Hotel>
                        </Route>
                        <Route path="/servicos">
                            <Servicos>Servicos</Servicos>
                        </Route>
                        <Route path="/testemunhos">
                            <Testemunhos>Testemunhos</Testemunhos>
                        </Route>
                        <Route path="/login">
                            <Login>Fazer Login</Login>
                        </Route>
                        <Route path="/contactos">
                        {
                            isLogged ? 
                            <Contacto>Contactos</Contacto>
                            :
                            <Redirect to="/login" />
                        }
                        </Route>
                        <Route path="*">
                            <NotFound>Pagina Nao encontrada!</NotFound>
                        </Route>
                    </Switch>

                <Footer>
                <ContainerGeral>
                    <Container>
                        <H1>HOTEL SAMBA</H1>
                        <Barrinha></Barrinha>
                        <Contactos>
                            <ListaContainer>
                                <ListItem style={ {color: '#888888'} }>Rua da Samba s/n, Município da Samba</ListItem>
                                <ListItem style={ {color: '#888888'} }>Província de Luanda, Angola</ListItem>
                                <ListItem style={ {color: '#888888'} }>+244 949 167 150 I +244 949 021 000</ListItem>
                                <ListItem><Lin href="">recepcao@hotelsamba.co.ao</Lin></ListItem>
                                <ListItem><Lin href="">reservas@hotelsamba.co.ao</Lin></ListItem>
                                <ListItem><Lin href="">geral@hotelsamba.co.ao</Lin></ListItem>
                                <ListItem><Lin href="">www.hotelsamba.co.ao</Lin></ListItem>
                            </ListaContainer>
                        </Contactos>
                        </Container>
                        <Container2>
                            © 2021 Hotel Samba. Todos os direitos reservados.
                        </Container2>
                        </ContainerGeral>
                </Footer>
            </BrowserRouter>
    );
}
export default App;