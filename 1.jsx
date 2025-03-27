import React, { useState } from "react";

function RegistrationForm() {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [dob, setDob] = useState("");

  const handleGetOtp = (type) => {
    alert(`OTP sent to ${type}`);
  };

  const handleVerify = (type) => {
    alert(`${type} verified`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Let's get started</h2>
      <div style={styles.formGroup}>
        <label>Enter your mobile number</label>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="+91"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={() => handleGetOtp("mobile")}>
            Get OTP
          </button>
        </div>
        <input type="text" placeholder="Enter OTP" style={styles.input} />
        <button style={styles.verifyButton} onClick={() => handleVerify("mobile")}>
          Verify
        </button>
      </div>

      <div style={styles.formGroup}>
        <label>Enter your email address</label>
        <div style={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={() => handleGetOtp("email")}>
            Get OTP
          </button>
        </div>
        <input type="text" placeholder="Enter OTP" style={styles.input} />
        <button style={styles.verifyButton} onClick={() => handleVerify("email")}>
          Verify
        </button>
      </div>

      <div style={styles.formGroup}>
        <label>Enter your PAN number</label>
        <input
          type="text"
          placeholder="Enter PAN number"
          value={pan}
          onChange={(e) => setPan(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={styles.input}
        />
      </div>

      <button style={styles.nextButton}>Next</button>
      <p style={styles.terms}>
        Creating an account means you agree with our Terms of Service, Privacy Policy, and default Notification Settings.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
  formGroup: {
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#32CD32",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  verifyButton: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#32CD32",
    color: "white",
    border: "none",
    cursor: "pointer",
    width: "100%",
  },
  nextButton: {
    padding: "12px",
    width: "100%",
    backgroundColor: "#32CD32",
    color: "white",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  },
  terms: {
    fontSize: "12px",
    color: "gray",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default RegistrationForm;