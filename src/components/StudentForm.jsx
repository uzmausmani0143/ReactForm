import React, { useState } from 'react';
import styles from './StudentForm.module.css';

function StudentForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [classNumber, setClassNumber] = useState('');
    const [studentId, setStudentId] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleAge(e) {
        setAge(e.target.value);
    }
    function handleAddress(e) {
        setAddress(e.target.value);
    }
    function handleClassNumber(e) {
        setClassNumber(e.target.value);
    }
    function handleStudentId(e) {
        setStudentId(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        // You can perform any further actions here, such as sending the form data to a server
        console.log('Form submitted!');
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Age:', age);
        console.log('Address:', address);
        console.log('Class Number:', classNumber);
        console.log('Student ID:', studentId);

        setFirstName('');
        setLastName('');
        setAge('');
        setAddress('');
        setClassNumber('');
        setStudentId('');
        // Set the submission status to true
        setSubmitted(true);
        // Show alert message
        alert('Form submitted successfully!');
    }

    return (
        <>
           
                <div className={styles.container}>
                    <div>
                    <form>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="firstname">First Name</label>
                        <input className={styles.input} id="firstname" type="text" onChange={handleFirstName} value={firstName} />
                    </div>
    
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="lastname">Last Name</label>
                        <input className={styles.input} id="lastname" type="text" onChange={handleLastName} value={lastName} />
                    </div>
    
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="age">Age</label>
                        <input className={styles.input} id="age" type="text" onChange={handleAge} value={age} />
                    </div>
    
                    <div className={styles.formGroup}> 
                        <label className={styles.label} htmlFor="address">Address</label>
                        <input className={styles.input} id="address" type="text" onChange={handleAddress} value={address} />
                    </div>
    
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="classnumber">Home-Room Class Number</label>
                        <input className={styles.input} id="classnumber" type="number" onChange={handleClassNumber} value={classNumber} />
                    </div>
    
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="studentid">Student ID</label>
                        <input className={styles.input} id="studentid" type="number" onChange={handleStudentId} value={studentId} />
                    </div>

                    <div className={styles.formGroup}>
                        <button className={styles.submit} onClick={handleSubmit} type="submit">Submit</button>
                        {submitted && <div className={styles.alert}>Form submitted successfully!</div>}
                    </div>
                    </form> 
                    </div>
                    
                    
                </div>
            </>
        );
}
export default StudentForm;
