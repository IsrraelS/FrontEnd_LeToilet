import './Login.scss';
import { Link } from 'react-router-dom';

export function Login(){

    return(
         <form>              
            <div className="fatherLogin">
                <div className="cntLogin">
                    <div className= "headerLgn">
                        <p className="ttlLogin">Login</p>
                    </div>
                    <div className="mainLgn">
                        <div className="cntDates">
                            <label className="emailLgn">E-mail:</label>
                            <input className="iptEmL" type="email" placeholder="E-mail"></input>
                        </div>
                        <div className="cntDates">
                            <label className="passwordLgn">Password:</label>
                            <input className="iptPwL" type="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <div className="footerLgn">
                        <div className="btnIn">
                            <button className="btnSubmit" type='submit'>Sing In</button>
                        </div>
                        <div className="txtRgtr">
                            <p>No estas aun registrado? Pulsa <Link className="redirecRgtr" to="/register">Aqui</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}