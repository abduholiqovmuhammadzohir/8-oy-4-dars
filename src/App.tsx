import React, { useState } from 'react';
import './App.css';
import img from './assets/img.png';
import inter from './assets/inter.svg';
import insta from './assets/insta.svg';
import fac from './assets/fac.svg';
import telegram from './assets/telegram.svg';
import git from './assets/tw.svg';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, error }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </>
  );
};  

const App: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [joy, setJoy] = useState('');
  const [companyNameError, setCompanyNameError] = useState<string | undefined>(undefined);

  const validateCompanyName = () => {
    if (companyName.trim() === '') {
      alert('Kompaniya nomini kiriting!');
      return false;
    } else {
      setCompanyNameError(undefined);
      return true;
    }
  };
  
  const validateEmail = () => {
    if (email.trim() === '') {
      alert('Emailni kiriting!');
      return false;
    }
  };
  const validateJoy = () => {
    if (joy.trim() === '') {
      alert('Emailni kiriting!');
      return false;
    }
  };

  const validatePhone = () => {
    if (phone.trim() === '') {
      alert('Telefon raqamini kiriting!');
      return false;
    }
  };

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleJoyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJoy(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateCompanyName()) {
      validateEmail();
      validatePhone();
      validateJoy();
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h2>Kompaniya ma’lumotlari</h2>
          <h5>Kompaniya haqidagi ma’lumotlarni kiriting</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="dowlod">
            <img src={img} alt="Yuklash" />
            <h4>Yuklash</h4>
          </div>
          <div className="input">
            <label>Kompaniya nomi *</label><br />
            <Input type="text" placeholder="Kompaniya nomi" value={companyName} onChange={handleCompanyNameChange} error={companyNameError} />
          </div>        <div className="input">
            <label>Email *</label><br />
            <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
          </div>
          <div className="input">
            <label>Telofon raqai *</label><br />
            <input type="number" placeholder='UZ +9989' value={phone} onChange={handlePhoneChange}  />
          </div>
          <div className="icon">
            <label>Linklar *</label>
            <div className="icons">
              <img src={inter} alt="" />
              <img src={insta} alt="" />
              <img src={fac} alt="" />
              <img src={telegram} alt="" />
              <img src={git} alt="" />
            </div>
          </div>
          <div className="city">
            <div className="inpu">
              <label>Davlat *</label><br />
              <select className="form-select" aria-label="Default select example">
                <option selected>Davlat</option>
                <option value="uzbekiston">Uzbekiston</option>
                <option value="russia">Russia</option>
                <option value="america">America</option>
              </select>
            </div>
            <div className="inpu">
              <label>Shahar *</label><br />
              <select className="form-select" aria-label="Default select example">
                <option selected>Shahar</option>
                <option value="toshkent">Toshkent</option>
                <option value="moscow">Moscow</option>
                <option value="newyork">New York</option>
              </select>
            </div>
          </div>
          <div className="input">
            <label>Yashash joyi *</label><br />
            <input type="text" placeholder='Joy' value={joy} onChange={handleJoyChange} />
          </div>
          <div className="soni">
            <label >Hodimlar soni *</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Soni</option>
              <option value="1">81</option>
              <option value="2">22</option>
              <option value="3">33</option>
              <option value="3">34</option>
            </select>
          </div>
          <div className="izoh">
            <label>Izoh *</label><br />
            <textarea placeholder='Kompaniya haqida izoh qoldiring'></textarea>
          </div>
          {/* Other inputs and selects */}
          <div className="button">
            <button className="btn1">ORTGA</button>
            <button type="submit" className="btn2">KEYINGISI</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
