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


function startGuidance() {

    alert("Welcome to MediGuide! Healthcare guidance starts here.");

}


function findGuidance() {

    let concern = document
        .getElementById("healthConcern")
        .value
        .toLowerCase();

    let result = document.getElementById("guidanceResult");

    if (concern === "") {

        result.innerHTML = "Please enter your health concern.";

    } else if (
        concern.includes("skin") ||
        concern.includes("rash") ||
        concern.includes("acne")
    ) {

        result.innerHTML =
            "Suggested Department: Dermatology";

    } else if (
        concern.includes("eye") ||
        concern.includes("vision")
    ) {

        result.innerHTML =
            "Suggested Department: Ophthalmology";

    } else if (
        concern.includes("ear") ||
        concern.includes("throat")
    ) {

        result.innerHTML =
            "Suggested Department: ENT";

    } else if (
        concern.includes("fever") ||
        concern.includes("cold") ||
        concern.includes("cough")
    ) {

        result.innerHTML =
            "Suggested Department: General Medicine";

    } else {

        result.innerHTML =
            "No matching category found. Please consult a qualified healthcare professional.";

    }
}


function showSpecialists() {

    let result = document.getElementById("specialistResult");

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


function showHospitals() {

    let result = document.getElementById("hospitalResult");

    result.innerHTML = `
        <div class="hospital">
            <h3>City Care Hospital</h3>
            <p>Location: Nagpur</p>
            <p>Departments: General Medicine, Dermatology, Cardiology</p>
            <p>Contact: 00000 00000</p>
        </div>

        <div class="hospital">
            <h3>Health Plus Hospital</h3>
            <p>Location: Nagpur</p>
            <p>Departments: Pediatrics, ENT, Ophthalmology</p>
            <p>Contact: 00000 00000</p>
        </div>
    `;
}


function bookAppointment(event) {

    event.preventDefault();

    let name = document.getElementById("patientName").value;
    let department = document.getElementById("department").value;
    let date = document.getElementById("appointmentDate").value;

    let result = document.getElementById("appointmentResult");

    let doctor = doctors[department];

    if (doctor) {

        result.innerHTML = `
            <h3>Appointment Request Submitted</h3>

            <p><strong>Patient:</strong> ${name}</p>

            <p><strong>Department:</strong> ${department}</p>

            <p><strong>Doctor:</strong> ${doctor.name}</p>

            <p><strong>Date:</strong> ${date}</p>

            <p><strong>Doctor Available:</strong> ${doctor.days}</p>

            <p><strong>Visiting Hours:</strong> ${doctor.time}</p>

            <p>Your appointment request has been recorded for this demo.</p>
        `;

    } else {

        result.innerHTML = `
            <p>Doctor information is not available for this department.</p>
        `;
    }
}


function showEmergency() {

    let result = document.getElementById("emergencyResult");

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
