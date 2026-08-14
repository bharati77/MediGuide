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

function generateToken(event) {

    event.preventDefault();

    const name =
        document.getElementById("patientName").value;

    const department =
        document.getElementById("department").value;

    const doctor =
        document.getElementById("doctor").value;

    const token =
        Math.floor(Math.random() * 50) + 1;

    const result =
        document.getElementById("tokenResult");

    result.innerHTML = `

        <div style="
            background:#e5f7eb;
            padding:20px;
            border-radius:10px;
        ">

            <h2>🎫 Token Generated</h2>

            <h1>${token}</h1>

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

}


// READ SEARCH FROM URL

window.addEventListener("DOMContentLoaded", function() {

    const params =
        new URLSearchParams(window.location.search);

    const search =
        params.get("search");

    const input =
        document.getElementById("doctorSearch");

    if (search && input) {

        input.value = search;

        filterDoctors();

    }

});
