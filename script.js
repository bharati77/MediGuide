// ===============================
// MediGuide - JavaScript
// ===============================

// Doctor information
const doctors = {
    "General Medicine": {
        name: "Dr. Sharma",
        days: "Monday - Friday",
        time: "10:00 AM - 1:00 PM"
    },

    "Dermatology": {
        name: "Dr. Priya",
        days: "Monday, Wednesday, Friday",
        time: "4:00 PM - 7:00 PM"
    },

    "Cardiology": {
        name: "Dr. Amit",
        days: "Tuesday - Saturday",
        time: "9:00 AM - 12:00 PM"
    },

    "Ophthalmology": {
        name: "Dr. Neha",
        days: "Monday - Thursday",
        time: "11:00 AM - 2:00 PM"
    },

    "ENT": {
        name: "Dr. Rahul",
        days: "Tuesday, Thursday, Saturday",
        time: "3:00 PM - 6:00 PM"
    },

    "Pediatrics": {
        name: "Dr. Anjali",
        days: "Monday - Friday",
        time: "5:00 PM - 8:00 PM"
    }
};


// ===============================
// Start Guidance
// ===============================

function startGuidance() {

    alert("Welcome to MediGuide! Healthcare guidance starts here.");

}


// ===============================
// Find Healthcare Guidance
// ===============================

function findGuidance() {

    const healthConcern = document.getElementById("healthConcern");
    const result = document.getElementById("guidanceResult");

    if (!healthConcern || !result) {
        return;
    }

    const concern = healthConcern.value.trim().toLowerCase();

    if (concern === "") {

        result.innerHTML =
            "Please enter your health concern.";

    }

    else if (
        concern.includes("skin") ||
        concern.includes("rash") ||
        concern.includes("acne") ||
        concern.includes("pimple")
    ) {

        result.innerHTML =
            "Suggested Department: Dermatology";

    }

    else if (
        concern.includes("eye") ||
        concern.includes("vision") ||
        concern.includes("eyes")
    ) {

        result.innerHTML =
            "Suggested Department: Ophthalmology";

    }

    else if (
        concern.includes("ear") ||
        concern.includes("throat") ||
        concern.includes("nose")
    ) {

        result.innerHTML =
            "Suggested Department: ENT";

    }

    else if (
        concern.includes("fever") ||
        concern.includes("cold") ||
        concern.includes("cough") ||
        concern.includes("headache")
    ) {

        result.innerHTML =
            "Suggested Department: General Medicine";

    }

    else if (
        concern.includes("heart") ||
        concern.includes("chest pain")
    ) {

        result.innerHTML =
            "Suggested Department: Cardiology";

    }

    else if (
        concern.includes("child") ||
        concern.includes("baby") ||
        concern.includes("pediatric")
    ) {

        result.innerHTML =
            "Suggested Department: Pediatrics";

    }

    else {

        result.innerHTML =
            "No matching category found. Please consult a qualified healthcare professional.";

    }
}


// ===============================
// Show Specialists
// ===============================

function showSpecialists() {

    const result = document.getElementById("specialistResult");

    if (!result) {
        return;
    }

    result.innerHTML = `
        <h4>Available Departments</h4>

        <ul>
            <li>General Medicine</li>
            <li>Dermatology</li>
            <li>Cardiology</li>
            <li>Ophthalmology</li>
            <li>ENT</li>
            <li>Pediatrics</li>
        </ul>
    `;
}


// ===============================
// Show Hospitals
// ===============================

function showHospitals() {

    const result = document.getElementById("hospitalResult");

    if (!result) {
        return;
    }

    result.innerHTML = `
        <div class="hospital">

            <h3>City Care Hospital</h3>

            <p>
                <strong>Location:</strong> Nagpur
            </p>

            <p>
                <strong>Departments:</strong>
                General Medicine, Dermatology, Cardiology
            </p>

            <p>
                <strong>Contact:</strong>
                00000 00000
            </p>

        </div>

        <div class="hospital">

            <h3>Health Plus Hospital</h3>

            <p>
                <strong>Location:</strong> Nagpur
            </p>

            <p>
                <strong>Departments:</strong>
                Pediatrics, ENT, Ophthalmology
            </p>

            <p>
                <strong>Contact:</strong>
                00000 00000
            </p>

        </div>
    `;
}


// ===============================
// Book Appointment
// ===============================

function bookAppointment(event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const department = document.getElementById("department").value;
    const date = document.getElementById("appointmentDate").value;

    const result = document.getElementById("appointmentResult");

    if (!result) {
        return;
    }

    if (name === "" || department === "" || date === "") {

        result.innerHTML = `
            <p>
                Please fill in all appointment details.
            </p>
        `;

        return;
    }

    const doctor = doctors[department];

    if (doctor) {

        result.innerHTML = `
            <h3>Appointment Request Submitted</h3>

            <p>
                <strong>Patient:</strong>
                ${name}
            </p>

            <p>
                <strong>Department:</strong>
                ${department}
            </p>

            <p>
                <strong>Date:</strong>
                ${date}
            </p>

            <p>
                <strong>Doctor:</strong>
                ${doctor.name}
            </p>

            <p>
                <strong>Available Days:</strong>
                ${doctor.days}
            </p>

            <p>
                <strong>Visiting Hours:</strong>
                ${doctor.time}
            </p>

            <p>
                Your appointment request has been recorded for this demo.
            </p>
        `;

    } else {

        result.innerHTML = `
            <p>
                Doctor information is not available for this department.
            </p>
        `;
    }
}


// ===============================
// Emergency Guidance
// ===============================

function showEmergency() {

    const result = document.getElementById("emergencyResult");

    if (!result) {
        return;
    }

    result.innerHTML = `
        <h3>⚠️ Important</h3>

        <p>
            For serious or life-threatening symptoms,
            go to the nearest emergency department
            or contact your local emergency services.
        </p>

        <p>
            Do not delay emergency medical care.
        </p>
    `;
}
<!-- Token System -->
<section id="tokens">

    <h2>🎟️ Patient Token System</h2>

    <p>Take a token and check your position in the queue.</p>

    <button onclick="takeToken()">Take My Token</button>

    <div id="tokenResult"></div>

    <hr>

    <h3>Current Token: <span id="currentToken">0</span></h3>

    <button onclick="checkToken()">Check My Token</button>

    <div id="tokenStatus"></div>

</section>
