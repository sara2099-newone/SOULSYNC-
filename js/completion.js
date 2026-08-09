// ======================================================
// SOULSYNC
// completion.js
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("SOULSYNC Demo Completed");

    // ==================================================
    // BUTTONS
    // ==================================================

    const startDemo =
        document.getElementById("startDemo");

    const homeButton =
        document.getElementById("homeButton");

    const clearData =
        document.getElementById("clearData");

    // ==================================================
    // START NEW DEMO
    // ==================================================

    startDemo.addEventListener("click", () => {

        if(confirm("Start a new SOULSYNC Demo?")){

            localStorage.removeItem("studentData");

            window.location.href =
                "student-dashboard.html";

        }

    });

    // ==================================================
    // RETURN HOME
    // ==================================================

    homeButton.addEventListener("click", () => {

        window.location.href = "index.html";

    });

    // ==================================================
    // CLEAR DEMO DATA
    // ==================================================

    clearData.addEventListener("click", () => {

        const confirmClear = confirm(

            "This will delete all demo data.\n\nDo you want to continue?"

        );

        if(!confirmClear){

            return;

        }

        localStorage.removeItem("studentData");

        alert("Demo data cleared successfully!");

    });

    // ==================================================
    // SUCCESS ANIMATION
    // ==================================================

    const successCard =
        document.querySelector(".success-card");

    if(successCard){

        successCard.style.opacity = "0";

        successCard.style.transform = "translateY(40px)";

        setTimeout(() => {

            successCard.style.transition =
                "all 0.8s ease";

            successCard.style.opacity = "1";

            successCard.style.transform =
                "translateY(0)";

        },300);

    }

    // ==================================================
    // DISPLAY FINAL SUMMARY
    // ==================================================

    const studentData =
        JSON.parse(localStorage.getItem("studentData"));

    if(studentData){

        console.log("========== SOULSYNC ==========");

        console.log("Student :",
            studentData.profile.studentName);

        console.log("Academic Score :",
            studentData.scores.academicScore);

        console.log("Attendance Score :",
            studentData.scores.attendanceScore);

        console.log("Wellness Score :",
            studentData.scores.wellnessScore);

        console.log("Risk Level :",
            studentData.scores.riskLevel);

        console.log("Final Recommendation :",
            studentData.scores.finalRecommendation);

        console.log("==============================");

    }

    console.log("SOULSYNC Demo Ready");

});