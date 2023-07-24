import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';
import axios from 'axios';


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '50px',
    fontSize: '16px',
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    width:'200px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
 
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
        
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      window.alert("Successfully Logged In");
      navigate("/");
      setEmail('');
      setPass('');
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
         
          <div style={styles.formGroup}>
            <label style={styles.label}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>&nbsp;&nbsp;Password:&nbsp;&nbsp;</label>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <br></br>
     <button style={{width: '50%'}} type="submit">
            Login
          </button>
          <br></br>
          {checkpass && alert('Successful login ' + name)}
          <br></br>
          <Link to="/signup" style={styles.registerLink}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>Signup
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);