import './Register.scss';
import { Link } from 'react-router-dom';

export function Register(){


    return(
        <form>
            <div className="fatherRegister">
                <div className="cntRegister">
                    <div className="headerRgtr">
                        <p className="ttlRgtr">REGISTER</p>
                    </div>
                    <div className="mainRgtr">
                        <div className="cntDates">
                            <label className="nameRgtr">Name</label>
                            <input className="impN" type="text" placeholder="Name"
                                name="name"></input>
                        </div>
                        <div className="cntDates">
                            <label className="lastNameRgtr">Last Name:</label>
                            <input className="impLN" type="text" placeholder="Last Name" 
                                name="lastname"></input>
                        </div>
                        <div className="cntDates">
                            <label className="emailRgtr">E-mail:</label>
                            <input className="impE" type="email" placeholder="E-mail" 
                                name="email"></input>
                        </div>
                        <div className="cntDates">
                            <label className="dateOfBirthRgtr">Date Of Birth</label>
                            <input className="impDB" type="date" 
                            name="dateOfBirdth"></input>
                        </div>
                        <div className="cntDates">
                            <label className="passwordRgtr">Password:</label>
                            <input className="impP" type="password" placeholder="Password" 
                            name="password"></input>
                        </div>
                    </div>
                    <div className="footerRgtr">
                        <div className="cntBtnRG">
                            <button className="btnRgtr" type='Submit'>Register</button>
                        </div>
                        <div className="txtRgtr">
                            <p>Ya estas registrado? Pulsa <Link className="redirecRgtr" to="/login">Aqui</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}