import React, { useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [town, setTown] = useState('');

    const history = useHistory();

    async function handleRegister(e) {

        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            town,
        };

        try{
        const response = await api.post('ongs', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
        } catch (err) {
            alert('Erro no registro, tente novamente.')
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Registro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                     <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color ="#e02041" />                         Não tenho registro
                    </Link> 
                </section>
                <form onSubmit={handleRegister} action="">
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                    placeholder="Whatsapp" 
                    value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)} 
                        />
                        <input 
                        placeholder="Distrito" 
                        style={{width:80}}
                        value={town}
                        onChange={e => setTown(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Registrar</button>
                </form>
            </div>

        </div>
    );
}