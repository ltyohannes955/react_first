"use client";
export default function Home() {
  return (
    <>
      <div>
        <h1>List</h1>
        <input
          style={styles.input}
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <button style={styles.submitButton}>search</button>
      </div>
      <button style={styles.addButton}> Add Patient</button>
    </>
  );
}

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "f0000",
    borderRadius: "8px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    color: "#FFFFFF",
  },
  input: {
    width: "25%",
    padding: "10px",
    marginLeft: "10rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    color: "#000000",
  },
  submitButton: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  addButton: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "10rem",
  },
};
