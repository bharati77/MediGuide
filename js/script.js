// MOBILE MENU

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("show");

}


// HOME SEARCH

function searchDoctor() {

    const search =
        document.getElementById("homeSearch").value.trim();

    if (search === "") {

        alert("Please enter doctor name or department.");

        return;
    }

    window.location.href =
        "doctors.html?search=" +
        encodeURIComponent(search);

}


// DOCTOR FILTER

function filterDoctors() {

    const search =
        document.getElementById("doctorSearch")
        .value
        .toLowerCase();

    const status =
        document.getElementById("statusFilter")
        .value;

    const doctors =
        document.querySelectorAll(".doctor-item");

    doctors.forEach(function(doctor) {

        const name =
            doctor.getAttribute("data-name");

        const doctorStatus =
            doctor.getAttribute("data-status");

        const searchMatch =
            name.includes(search);

        const statusMatch =
            status === "all" ||
            doctorStatus === status;

        if (searchMatch && statusMatch) {

            doctor.style.display = "block";

        } else {

            doctor.style.display = "none";

        }

    });

}


// TOKEN GENERATOR
async function generateToken(event) {

    event.preventDefault();

    const name =
        document.getElementById("patientName").value;

    const department =
        document.getElementById("department").value;

    const doctor =
        document.getElementById("doctor").value;

    const result =
        document.getElementById("tokenResult");

    try {

        const response = await fetch(
    "https://mediguide-backend-1exq.onrender.com/api/patient-tokens",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    department: department,
                    doctor: doctor
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "Token generation failed"
            );
        }

        result.innerHTML = `

            <div style="
                background:#e5f7eb;
                padding:20px;
                border-radius:10px;
            ">

                <h2>🎫 Token Generated</h2>

               <h1>${data.patientToken.tokenNumber}</h1>

                <p>
                    Patient:
                    <b>${name}</b>
                </p>

                <p>
                    Department:
                    <b>${department}</b>
                </p>

                <p>
                    Doctor:
                    <b>${doctor}</b>
                </p>

                <p>
                    Please wait for your token number.
                </p>

            </div>

        `;

    } catch (error) {

        result.innerHTML = `

            <div style="
                background:#ffe5e5;
                padding:20px;
                border-radius:10px;
            ">

                <h2>❌ Error</h2>

                <p>${error.message}</p>

            </div>

        `;

    }

}
// ===============================
// BACKEND: DOCTOR AVAILABILITY
// ===============================

const BACKEND_URL = "https://mediguide-backend-1exq.onrender.com";

async function loadDoctorsFromBackend() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/doctors`);
        const data = await response.json();

        if (!data.success || !Array.isArray(data.doctors)) {
            console.error("Doctor data could not be loaded.");
            return;
        }

        console.log("Doctors loaded from backend:", data.doctors);

        data.doctors.forEach(doctor => {
            const doctorName = doctor.name.toLowerCase();

            document.querySelectorAll("body *").forEach(element => {
                if (
                    element.children.length === 0 &&
                    element.textContent.trim().toLowerCase() === doctorName
                ) {
                    if (element.parentElement.querySelector(".backend-availability")) {
                        return;
                    }

                    const status = document.createElement("span");
                    status.className = "backend-availability";

                    status.textContent = doctor.available
                        ? " ● Available"
                        : " ● Not Available";

                    status.style.marginLeft = "10px";
                    status.style.fontWeight = "600";
                    status.style.color = doctor.available ? "green" : "red";

                    element.parentElement.appendChild(status);
                }
            });
        });

    } catch (error) {
        console.error("Backend connection error:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadDoctorsFromBackend);
