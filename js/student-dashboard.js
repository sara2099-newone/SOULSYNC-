// ======================================================
// SOULSYNC
// student-dashboard.js
// Part 1 - Initialization
// ======================================================

// Wait until the page is fully loaded

document.addEventListener("DOMContentLoaded", () => {

    console.log("Student Dashboard Loaded Successfully");

// ======================================================
// FORM
// ======================================================

const studentForm = document.getElementById("studentForm");

// ======================================================
// STUDENT PROFILE
// ======================================================

const studentName = document.getElementById("studentName");
const registerNumber = document.getElementById("registerNumber");
const department = document.getElementById("department");
const year = document.getElementById("year");
const semester = document.getElementById("semester");
const mentor = document.getElementById("mentor");

// ======================================================
// ACADEMIC INFORMATION
// ======================================================

const internalMarks = document.getElementById("internalMarks");
const academicConfidence = document.getElementById("academicConfidence");
const assignmentCompletion = document.getElementById("assignmentCompletion");
const studyHours = document.getElementById("studyHours");

// ======================================================
// ATTENDANCE
// ======================================================

const attendance = document.getElementById("attendance");
const classesMissed = document.getElementById("classesMissed");
const punctuality = document.getElementById("punctuality");

// ======================================================
// WELLBEING
// ======================================================

const mood = document.getElementById("mood");
const stressLevel = document.getElementById("stressLevel");
const anxietyLevel = document.getElementById("anxietyLevel");
const sleepHours = document.getElementById("sleepHours");
const energyLevel = document.getElementById("energyLevel");

// ======================================================
// LIFESTYLE
// ======================================================

const waterIntake = document.getElementById("waterIntake");
const eatingHabits = document.getElementById("eatingHabits");
const exercise = document.getElementById("exercise");
const screenTime = document.getElementById("screenTime");
const socialInteraction = document.getElementById("socialInteraction");

// ======================================================
// CLASSROOM PARTICIPATION
// ======================================================

const participation = document.getElementById("participation");
const teamwork = document.getElementById("teamwork");
const communication = document.getElementById("communication");
const confidence = document.getElementById("confidence");
const leadership = document.getElementById("leadership");

// ======================================================
// WEEKLY REFLECTION
// ======================================================

const weeklyReflection = document.getElementById("weeklyReflection");
const challenge = document.getElementById("challenge");
const comments = document.getElementById("comments");
const mentorSupport = document.getElementById("mentorSupport");

// ======================================================
// CREATE STUDENT OBJECT
// ======================================================

let studentData = {

    profile: {},

    academics: {},

    attendance: {},

    wellbeing: {},

    lifestyle: {},

    participation: {},

    reflection: {},

    scores: {}

};

console.log(studentData);

// ======================================================
// END OF PART 1
// PART 2 STARTS BELOW
// ======================================================
// ======================================================
// PART 2 - FORM VALIDATION
// ======================================================

// Form Submit

studentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // =============================
    // REQUIRED FIELD VALIDATION
    // =============================

    if (
        studentName.value.trim() === "" ||
        registerNumber.value.trim() === "" ||
        department.value === "" ||
        year.value === "" ||
        semester.value === "" ||
        mentor.value.trim() === "" ||
        internalMarks.value === "" ||
        assignmentCompletion.value === "" ||
        studyHours.value === "" ||
        attendance.value === "" ||
        classesMissed.value === "" ||
        punctuality.value === "" ||
        mood.value === "" ||
        sleepHours.value === "" ||
        energyLevel.value === "" ||
        waterIntake.value === "" ||
        eatingHabits.value === "" ||
        exercise.value === "" ||
        screenTime.value === "" ||
        socialInteraction.value === "" ||
        participation.value === "" ||
        teamwork.value === "" ||
        communication.value === "" ||
        confidence.value === "" ||
        leadership.value === "" ||
        weeklyReflection.value.trim() === "" ||
        challenge.value.trim() === "" ||
        comments.value.trim() === "" ||
        mentorSupport.value === ""
    ) {

        alert("Please complete all fields before generating the dashboard.");

        return;

    }

    // =============================
    // NUMBER VALIDATION
    // =============================

    if (
        Number(internalMarks.value) < 0 ||
        Number(internalMarks.value) > 100
    ) {

        alert("Internal Marks must be between 0 and 100.");

        internalMarks.focus();

        return;

    }

    if (
        Number(assignmentCompletion.value) < 0 ||
        Number(assignmentCompletion.value) > 100
    ) {

        alert("Assignment Completion must be between 0 and 100.");

        assignmentCompletion.focus();

        return;

    }

    if (
        Number(attendance.value) < 0 ||
        Number(attendance.value) > 100
    ) {

        alert("Attendance must be between 0 and 100.");

        attendance.focus();

        return;

    }

    if (Number(studyHours.value) > 24) {

        alert("Study Hours cannot exceed 24.");

        studyHours.focus();

        return;

    }

    if (Number(sleepHours.value) > 24) {

        alert("Sleep Hours cannot exceed 24.");

        sleepHours.focus();

        return;

    }

    if (Number(screenTime.value) > 24) {

        alert("Screen Time cannot exceed 24.");

        screenTime.focus();

        return;

    }

    // =============================
    // VALIDATION SUCCESS
    // =============================

    console.log("Validation Successful");

    // Part 3 starts here
    // ======================================================
// PART 3 - CREATE STUDENT DATA OBJECT
// ======================================================

// Student Profile

studentData.profile = {

    studentName: studentName.value.trim(),
    registerNumber: registerNumber.value.trim(),
    department: department.value,
    year: year.value,
    semester: semester.value,
    mentor: mentor.value.trim()

};

// ======================================================
// ACADEMICS
// ======================================================

studentData.academics = {

    internalMarks: Number(internalMarks.value),
    academicConfidence: Number(academicConfidence.value),
    assignmentCompletion: Number(assignmentCompletion.value),
    studyHours: Number(studyHours.value)

};

// ======================================================
// ATTENDANCE
// ======================================================

studentData.attendance = {

    attendance: Number(attendance.value),
    classesMissed: Number(classesMissed.value),
    punctuality: punctuality.value

};

// ======================================================
// WELLBEING
// ======================================================

studentData.wellbeing = {

    mood: mood.value,
    stressLevel: Number(stressLevel.value),
    anxietyLevel: Number(anxietyLevel.value),
    sleepHours: Number(sleepHours.value),
    energyLevel: energyLevel.value

};

// ======================================================
// LIFESTYLE
// ======================================================

studentData.lifestyle = {

    waterIntake: waterIntake.value,
    eatingHabits: eatingHabits.value,
    exercise: exercise.value,
    screenTime: Number(screenTime.value),
    socialInteraction: socialInteraction.value

};

// ======================================================
// PARTICIPATION
// ======================================================

studentData.participation = {

    participation: participation.value,
    teamwork: teamwork.value,
    communication: communication.value,
    confidence: confidence.value,
    leadership: leadership.value

};

// ======================================================
// WEEKLY REFLECTION
// ======================================================

studentData.reflection = {

    weeklyReflection: weeklyReflection.value.trim(),
    challenge: challenge.value.trim(),
    comments: comments.value.trim(),
    mentorSupport: mentorSupport.value

};

// ======================================================
// CALCULATE SCORES
// ======================================================

// Academic Score

const academicScore = Math.round(

(
studentData.academics.internalMarks +
studentData.academics.assignmentCompletion +
(studentData.academics.academicConfidence * 10)

) / 3

);

// Attendance Score

const attendanceScore =
studentData.attendance.attendance;

// Wellness Score

const wellnessScore = Math.round(

(
(11 - studentData.wellbeing.stressLevel) * 10 +
(11 - studentData.wellbeing.anxietyLevel) * 10 +
(studentData.wellbeing.sleepHours * 10)

) / 3

);

// ======================================================
// DETERMINE RISK LEVEL
// ======================================================

let riskLevel = "Low";

if(

attendanceScore < 75 ||

studentData.wellbeing.stressLevel >= 8 ||

studentData.wellbeing.anxietyLevel >= 8

){

    riskLevel = "High";

}

else if(

attendanceScore < 85 ||

studentData.wellbeing.stressLevel >= 6 ||

studentData.wellbeing.anxietyLevel >= 6

){

    riskLevel = "Medium";

}

// ======================================================
// SAVE SCORES
// ======================================================

studentData.scores = {

    academicScore,

    attendanceScore,

    wellnessScore,

    riskLevel

};

// ======================================================
// SAVE TO LOCAL STORAGE
// ======================================================

localStorage.setItem(

    "studentData",

    JSON.stringify(studentData)

);

// ======================================================
// VERIFY
// ======================================================

console.log(studentData);

console.log("Student Data Saved Successfully");

// ======================================================
// PART 4 STARTS BELOW
// ======================================================
// ======================================================
// PART 4 - SOULSYNC INTELLIGENCE ENGINE
// ======================================================

// Generate Recommendation

let recommendation = "";

// High Risk

if (riskLevel === "High") {

    recommendation =
        "Immediate mentor meeting is recommended. Student may require academic and wellbeing support.";

}

// Medium Risk

else if (riskLevel === "Medium") {

    recommendation =
        "Monitor the student's progress closely and encourage regular mentor interaction.";

}

// Low Risk

else {

    recommendation =
        "Student is progressing well. Continue maintaining healthy academic and wellbeing habits.";

}

// Save Recommendation

studentData.scores.recommendation = recommendation;

// Update Local Storage

localStorage.setItem(

    "studentData",

    JSON.stringify(studentData)

);

// ======================================================
// SUCCESS MESSAGE
// ======================================================

alert(

    "Dashboard Generated Successfully!\n\n" +

    "Academic Score : " + academicScore +

    "\nAttendance Score : " + attendanceScore +

    "\nWellbeing Score : " + wellnessScore +

    "\nRisk Level : " + riskLevel

);

// ======================================================
// REDIRECT TO TEACHER DASHBOARD
// ======================================================

setTimeout(() => {

    window.location.href = "teacher-dashboard.html";

}, 1000);

});

});
// ======================================================
// PART 5 - RESET & HELPER FUNCTIONS
// ======================================================

// Reset Button

studentForm.addEventListener("reset", () => {

    console.log("Form Reset Successfully");

});

// ======================================================
// HELPER FUNCTION
// ======================================================

function getRiskColor(level){

    switch(level){

        case "High":
            return "#dc2626";

        case "Medium":
            return "#f59e0b";

        default:
            return "#16a34a";

    }

}

// ======================================================
// DISPLAY IN CONSOLE
// ======================================================

console.log("================================");

console.log("SOULSYNC Student Dashboard");

console.log("Risk Level :", riskLevel);

console.log("Academic Score :", academicScore);

console.log("Attendance Score :", attendanceScore);

console.log("Wellbeing Score :", wellnessScore);

console.log("Recommendation :", recommendation);

console.log("================================");

// ======================================================
// DEMO COMPLETED
// ======================================================

console.log("Redirecting to Teacher Dashboard...");
