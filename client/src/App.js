import React, {useState, useEffect} from "react";
import Navbar from "./comp/Navbar";
import SideBar from "./comp/SideBar";
import Column from "./comp/Column";
import PapusiFete from "./comp/PapusiFete";
import PapusiBaieti from "./comp/PapusiBaieti";
import PapusiFigurine from "./comp/PapusiFigurine";
import PapusiPlusuri from "./comp/PapusiPlusuri";
import PapusiAccesorii from "./comp/PapusiAccesorii";


function App() {

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    
    function handleChangeLogin(event) {
        const { name, value } = event.target;

        setUserLogin((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    const [userSignUp, setUserSignUp] = useState({
        username: "",
        email: "",
        password: ""
    });

    function handleChangeSignUp(event) {
        const { name, value } = event.target;

        setUserSignUp((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

        const getCurrentRoute = () => {
            const path = window.location.pathname;
    
            if (path === "/fete") {
                return ( 
                <div>
                    <Navbar />
                    <SideBar />
                    <PapusiFete />
                </div> )
            } else if (path === "/baieti") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <PapusiBaieti />
                    </div> )
            } else if (path === "/figurine") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <PapusiFigurine />
                    </div> )
            } else if (path === "/plusuri") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <PapusiPlusuri />
                    </div> )
            } else if (path === "/accesorii") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <PapusiAccesorii />
                    </div> )
            } else if (path === "/recenzii") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                    </div> )
            } else if (path === "/asistenta") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                    </div> )
            } else if (path === "/contact") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <div id="home-header">
                        <h2 ><b><i><u>Contacte</u></i></b></h2>
                        <div className="row">
                            <div className="col-50">
                                <h3>Contactează-ne dacă:</h3>
                                <ul className="contact-lista">
                                    <li>Exista probleme la efectuarea comenzii.</li>
                                    <li>Exista probleme la efectuarea platii.</li>
                                    <li>Exista probleme cu produsul.</li>
                                    <li>Site-ul nu functioneaza.</li>
                                    <li>Informatii suplimentare.</li>
                                    <li>Aveti sugestii/propuneri.</li>
                                </ul>
                            </div>
                            <div className="col-50">
                                <h3>Date de contact</h3>
                                <ul className="contact-lista">
                                    <li><b>Adresa:</b> Bucuresti Strada Ion Conea Nr.39</li>
                                    <li><b>Telefon:</b>0770 587 523</li>
                                    <li><b>Program:</b></li>
                                    <p><b>Luni - Vineri:</b> 10:00 - 19:00</p>
                                    <p><b>Sambata - Duminica:</b> 12:00 - 14:00</p>
                                </ul>
                            </div>
                            </div>
                        </div>
                            
                        <div className="row">
                            <div className="col-50">
                                <iframe className="harta"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22802.173508838416!2d26.026161357835417!3d44.40707033041358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fff79a443cb1%3A0x23ff05b6b5137738!2sStrada%20Ion%20Conea%2039%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1683766536785!5m2!1sro!2sro"
                                    allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            
                            <div className="col-50">
                                <div className="contact-form">
                                    <form>
                                        <h3 className="centrare">Lasa un mesaj</h3>
                                        <input type="text" placeholder="Nume" required/>
                                        <input type="text" placeholder="Prenume" required/>
                                        <input type="text" placeholder="Email" required/>
                                        <textarea rows="5" placeholder="Mesaj"required></textarea>
                                        <input type="submit" value="Transmite"/>
                                    </form>
                            
                                </div>
                            </div>
                        </div>
                            
                                </div> )
            } else if (path === "/login") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <div className="login-singup">
                        <form>
                            <h4>
                                Enter Account
                            </h4>
                            <input 
                                type="email"
                                onChange={handleChangeLogin}
                                name="email"
                                value={userLogin.email}
                                placeholder="Email"
                            />
                            <input 
                                type="password"
                                onChange={handleChangeLogin}
                                name="password"
                                value={userLogin.password}
                                placeholder="Password"
                            />
                            <button>Log In</button>
                            <p>
                                Don't have an account? <a href="/signup">Create one here.</a>
                            </p>
                        </form>
                        </div>
                    </div> )
            }else if (path === "/signup") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                        <div className="login-singup">
                            <form>
                                <h1>
                                    Create Account
                                </h1>
                                <input 
                                    type="text"
                                    onChange={handleChangeSignUp}
                                    name="username"
                                    value={userSignUp.username}
                                    placeholder="Username"
                                />
                                <input 
                                    type="email"
                                    onChange={handleChangeSignUp}
                                    name="email"
                                    value={userSignUp.email}
                                    placeholder="Email"
                                />
                                <input 
                                    type="password"
                                    onChange={handleChangeSignUp}
                                    name="password"
                                    value={userSignUp.password}
                                    placeholder="Password"
                                />
                                <button>Sign Up</button>
                                <p>
                                    Already have an account? <a href="/login">Login here.</a>
                                </p>
                            </form>
                        </div>
                    </div> )
            }else if (path === "/favorite") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                    </div> )
            }else if (path === "/cos") {
                return ( 
                    <div>
                        <Navbar />
                        <SideBar />
                    </div> )
            }else {
                return (
                    <div>
                        <Navbar />
                        <SideBar />
                     <div id="home-header" className="galerie">
                         <h2 className="home-h2">
                             Păpușel&Păpușica - locul unde visele devin realitate 
                              <i className="fa-solid fa-wand-sparkles logo"></i>
                          </h2>
                          <p>
                              Pe acest site o să gasiți papuși atat cât pentru cei mici, fie ei fete sau băieți dar și figurine pentru cei mai mari.
                              Aici veți găsi o colecție minunată de papuși și figurine pentru toți colecționarii și iubitorii de jucării. 
                               Avem o varietate de produse, de la cele mai populare personaje din desene animate și filme, la cele mai rare și exclusiviste ediții limitate.
                               Sperăm sa va încantam cu produsele noastre și totodată vă rugam sa ne lasati un feedback pentru jucăriile achiziționate.
                          </p>
                          <h3 className="home-h3">
                            Avantaje:
                          </h3>
                          <section id="avantaje1" className="avantaje">
                                <div className="avantaje-casute">
                                    <img src="https://uploads-ssl.webflow.com/5ef27cb65411b70949a151e9/5fa67de01a8f78f5d9392f2e_Free%20shipping%20(2).png" alt=""></img>
                                    <h4>Livrare Gratuita</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://www.ncsc.gov.uk/images/Online%20Shopping%20-%20Copy.png?mpwidth=545&mlwidth=737&twidth=961&dwidth=635&dpr=2.625&width=412ve " alt=""></img>
                                    <h4>Comenzi Online</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://i.pinimg.com/736x/99/5a/d9/995ad90cbe454ca1fbe59d2a1c8e1c6f.jpg" alt=""></img>
                                    <h4>Economisire</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://img.freepik.com/premium-vector/flat-sale-background_23-2149050899.jpg" alt=""></img>
                                    <h4>Promotii</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://img.freepik.com/free-photo/charming-woman-astonishment-looks-camera-pink-background-portrait-woman-pink-top-white-t-shirt_197531-14927.jpg" alt=""></img>
                                    <h4>Zambete Gratuite</h4>
                                </div>
                                <div className="avantaje-casute">
                                    <img src="https://img.myloview.com/posters/pink-headphones-with-speech-bubble-chat-icon-isolated-on-pink-background-support-customer-service-hotline-call-center-faq-maintenance-minimalism-concept-3d-illustration-3d-render-700-177631121.jpg" alt=""></img>
                                    <h4>24/7 Suport</h4>
                                </div>
                          </section>
                          
                       </div>
                            <section id="banner" className="text-banner">
                                <h2>Servis pentru Jucării</h2>
                                <h5>Rdeucere de <span>80%</span> pentru produsele peste <span>300 Lei</span></h5>
                                <button className="normal">Detalii</button>
                            </section>
                            <Column />
                            <section id="produse-home" className="avantaje">
                                <h6 className="home-h6">
                                    Produse noi pe site
                                </h6>
                                {/* <div className="produse-noi">
                                    <div className="produse">
                                        
                                    </div>
                                </div> */}
                            </section>
                  </div>
                )
            }
        }
    
        return <div>{getCurrentRoute()}</div>;
    }

export default App;


