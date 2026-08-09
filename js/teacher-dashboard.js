// ======================================================
// SOULSYNC
// teacher-dashboard.js
// Part 1
// ======================================================

// Wait until page loads

document.addEventListener("DOMContentLoaded", () => {

    console.log("Teacher Dashboard Loaded Successfully");

    // ==================================================
    // GET STUDENT DATA
    // ==================================================

    const studentData = JSON.parse(localStorage.getItem("studentData"));

    if (!studentData) {

        alert("No student data found.");

        window.location.href = "student-dashboard.html";

        return;

    }

    // ==================================================
    // DISPLAY STUDENT PROFILE
    // ==================================================

    document.getElementById("studentNameDisplay").textContent =
        studentData.profile.studentName;

    document.getElementById("registerDisplay").textContent =
        studentData.profile.registerNumber;

    document.getElementById("departmentDisplay").textContent =
        studentData.profile.department;

    document.getElementById("semesterDisplay").textContent =
        studentData.profile.semester;

    // ==================================================
    // DISPLAY ACADEMIC DETAILS
    // ==================================================

    document.getElementById("marksDisplay").textContent =
        studentData.academics.internalMarks + "%";

    document.getElementById("assignmentDisplay").textContent =
        studentData.academics.assignmentCompletion + "%";

    document.getElementById("confidenceDisplay").textContent =
        studentData.academics.academicConfidence + "/10";

    document.getElementById("studyDisplay").textContent =
        studentData.academics.studyHours + " hrs";

    // ==================================================
    // DISPLAY ATTENDANCE
    // ==================================================

    document.getElementById("attendanceDisplay").textContent =
        studentData.attendance.attendance + "%";

    document.getElementById("missedDisplay").textContent =
        studentData.attendance.classesMissed;

    document.getElementById("punctualityDisplay").textContent =
        studentData.attendance.punctuality;

    // ==================================================
    // DISPLAY WELLBEING
    // ==================================================

    document.getElementById("moodDisplay").textContent =
        studentData.wellbeing.mood;

    document.getElementById("stressDisplay").textContent =
        studentData.wellbeing.stressLevel + "/10";

    document.getElementById("sleepDisplay").textContent =
        studentData.wellbeing.sleepHours + " hrs";

    document.getElementById("energyDisplay").textContent =
        studentData.wellbeing.energyLevel;

    // ==================================================
    // GET FORM
    // ==================================================

    const teacherForm =
        document.getElementById("teacherForm");

    // ==================================================
    // GET INPUTS
    // ==================================================

    const teacherParticipation =
        document.getElementById("teacherParticipation");

    const teacherBehaviour =
        document.getElementById("teacherBehaviour");

    const teacherCommunication =
        document.getElementById("teacherCommunication");

    const teacherTeamwork =
        document.getElementById("teacherTeamwork");

    const teacherConfidence =
        document.getElementById("teacherConfidence");

    const teacherLeadership =
        document.getElementById("teacherLeadership");

    const attention =
        document.getElementById("attention");

    const assignmentSubmission =
        document.getElementById("assignmentSubmission");

    const facultyInteraction =
        document.getElementById("facultyInteraction");

    const peerInteraction =
        document.getElementById("peerInteraction");

    const engagementScore =
        document.getElementById("engagementScore");

    const performanceScore =
        document.getElementById("performanceScore");

    const teacherNotes =
        document.getElementById("teacherNotes");

    const concernLevel =
        document.getElementById("concernLevel");

    const teacherRecommendation =
        document.getElementById("teacherRecommendation");

    console.log(studentData);

    // ==================================================
    // PART 2 STARTS BELOW
    // ==================================================
    // ======================================================
// PART 2 - SAVE OBSERVATION
// ======================================================

teacherForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // ==============================
    // VALIDATION
    // ==============================

    if (

        teacherParticipation.value === "" ||
        teacherBehaviour.value === "" ||
        teacherCommunication.value === "" ||
        teacherTeamwork.value === "" ||
        teacherConfidence.value === "" ||
        teacherLeadership.value === "" ||
        attention.value === "" ||
        assignmentSubmission.value === "" ||
        facultyInteraction.value === "" ||
        peerInteraction.value === "" ||
        teacherNotes.value.trim() === "" ||
        concernLevel.value === "" ||
        teacherRecommendation.value === ""

    ){

        alert("Please complete all teacher observations.");

        return;

    }

    // ==============================
    // SAVE OBSERVATIONS
    // ==============================

    studentData.teacher = {

        participation: teacherParticipation.value,

        behaviour: teacherBehaviour.value,

        communication: teacherCommunication.value,

        teamwork: teacherTeamwork.value,

        confidence: teacherConfidence.value,

        leadership: teacherLeadership.value,

        attention: attention.value,

        assignmentSubmission: assignmentSubmission.value,

        facultyInteraction: facultyInteraction.value,

        peerInteraction: peerInteraction.value,

        engagementScore: Number(engagementScore.value),

        performanceScore: Number(performanceScore.value),

        teacherNotes: teacherNotes.value.trim(),

        concernLevel: concernLevel.value,

        recommendation: teacherRecommendation.value

    };

    // ==============================
    // UPDATE RISK LEVEL
    // ==============================

    if (

        concernLevel.value === "High" ||

        Number(engagementScore.value) <= 3 ||

        Number(performanceScore.value) <= 3

    ){

        studentData.scores.riskLevel = "High";

    }

    else if (

        concernLevel.value === "Medium" ||

        Number(engagementScore.value) <= 6 ||

        Number(performanceScore.value) <= 6

    ){

        studentData.scores.riskLevel = "Medium";

    }

    else{

        studentData.scores.riskLevel = "Low";

    }

    // ==============================
    // SAVE UPDATED DATA
    // ==============================

    localStorage.setItem(

        "studentData",

        JSON.stringify(studentData)

    );

    // ==============================
    // DISPLAY RESULT
    // ==============================

    console.log(studentData);

    console.log("Teacher Observation Saved Successfully");

    alert(

        "Teacher Observation Saved Successfully!\n\n" +

        "Updated Risk Level : " +

        studentData.scores.riskLevel

    );

    // ==============================
    // REDIRECT
    // ==============================

    setTimeout(()=>{

        window.location.href="parent-dashboard.html";

    },1000);

});

// ======================================================
// RESET
// ======================================================

teacherForm.addEventListener("reset",()=>{

    console.log("Teacher Form Reset");

});

console.log("Teacher Dashboard Ready");

});
