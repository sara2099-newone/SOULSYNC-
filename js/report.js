// ======================================================
// SOULSYNC
// report.js
// Part 4 - Load Complete Report
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("SOULSYNC Report Loaded");

    // ==================================================
    // GET STUDENT DATA
    // ==================================================

    const studentData = JSON.parse(

        localStorage.getItem("studentData")

    );

    if (!studentData) {

        alert("No Report Data Found.");

        window.location.href = "student-dashboard.html";

        return;

    }

    // ==================================================
    // STUDENT INFORMATION
    // ==================================================

    document.getElementById("studentName").textContent =
        studentData.profile.studentName;

    document.getElementById("registerNumber").textContent =
        studentData.profile.registerNumber;

    document.getElementById("department").textContent =
        studentData.profile.department;

    document.getElementById("semester").textContent =
        studentData.profile.semester;

    // ==================================================
    // OVERALL SCORES
    // ==================================================

    document.getElementById("academicScore").textContent =
        studentData.scores.academicScore;

    document.getElementById("attendanceScore").textContent =
        studentData.scores.attendanceScore;

    document.getElementById("wellnessScore").textContent =
        studentData.scores.wellnessScore;

    document.getElementById("riskLevel").textContent =
        studentData.scores.riskLevel;

    // ==================================================
    // ACADEMIC DETAILS
    // ==================================================

    document.getElementById("internalMarks").textContent =
        studentData.academics.internalMarks + "%";

    document.getElementById("assignmentCompletion").textContent =
        studentData.academics.assignmentCompletion + "%";

    document.getElementById("academicConfidence").textContent =
        studentData.academics.academicConfidence + "/10";

    document.getElementById("studyHours").textContent =
        studentData.academics.studyHours + " hrs";

    // ==================================================
    // ATTENDANCE
    // ==================================================

    document.getElementById("attendance").textContent =
        studentData.attendance.attendance + "%";

    document.getElementById("classesMissed").textContent =
        studentData.attendance.classesMissed;

    document.getElementById("punctuality").textContent =
        studentData.attendance.punctuality;

    // ==================================================
    // WELLBEING
    // ==================================================

    document.getElementById("mood").textContent =
        studentData.wellbeing.mood;

    document.getElementById("stressLevel").textContent =
        studentData.wellbeing.stressLevel + "/10";

    document.getElementById("anxietyLevel").textContent =
        studentData.wellbeing.anxietyLevel + "/10";

    document.getElementById("sleepHours").textContent =
        studentData.wellbeing.sleepHours + " hrs";

    document.getElementById("energyLevel").textContent =
        studentData.wellbeing.energyLevel;

    // ==================================================
    // LIFESTYLE
    // ==================================================

    document.getElementById("waterIntake").textContent =
        studentData.lifestyle.waterIntake;

    document.getElementById("eatingHabits").textContent =
        studentData.lifestyle.eatingHabits;

    document.getElementById("exercise").textContent =
        studentData.lifestyle.exercise;

    document.getElementById("screenTime").textContent =
        studentData.lifestyle.screenTime + " hrs";

    document.getElementById("socialInteraction").textContent =
        studentData.lifestyle.socialInteraction;

    // ==================================================
    // PARTICIPATION
    // ==================================================

    document.getElementById("participation").textContent =
        studentData.participation.participation;

    document.getElementById("teamwork").textContent =
        studentData.participation.teamwork;

    document.getElementById("communication").textContent =
        studentData.participation.communication;

    document.getElementById("confidence").textContent =
        studentData.participation.confidence;

    document.getElementById("leadership").textContent =
        studentData.participation.leadership;

    // ==================================================
    // WEEKLY REFLECTION
    // ==================================================

    document.getElementById("weeklyReflection").textContent =
        studentData.reflection.weeklyReflection;

    document.getElementById("challenge").textContent =
        studentData.reflection.challenge;

    document.getElementById("comments").textContent =
        studentData.reflection.comments;

    document.getElementById("mentorSupport").textContent =
        studentData.reflection.mentorSupport;

    // ==================================================
    // TEACHER OBSERVATION
    // ==================================================

    if(studentData.teacher){

        document.getElementById("teacherParticipation").textContent =
            studentData.teacher.participation;

        document.getElementById("teacherBehaviour").textContent =
            studentData.teacher.behaviour;

        document.getElementById("teacherCommunication").textContent =
            studentData.teacher.communication;

        document.getElementById("teacherConcern").textContent =
            studentData.teacher.concernLevel;

        document.getElementById("teacherRecommendation").textContent =
            studentData.teacher.recommendation;

        document.getElementById("teacherNotes").textContent =
            studentData.teacher.teacherNotes;

    }

    // ==================================================
    // PARENT OBSERVATION
    // ==================================================

    if(studentData.parent){

        document.getElementById("sleepQuality").textContent =
            studentData.parent.sleepQuality;

        document.getElementById("familyCommunication").textContent =
            studentData.parent.familyCommunication;

        document.getElementById("emotionalBehaviour").textContent =
            studentData.parent.emotionalBehaviour;

        document.getElementById("parentConcernLevel").textContent =
            studentData.parent.concernLevel;

        document.getElementById("parentRecommendation").textContent =
            studentData.parent.recommendation;

        document.getElementById("parentNotes").textContent =
            studentData.parent.parentNotes;

    }

    // ==================================================
    // INSTITUTION DECISION
    // ==================================================

    if(studentData.institution){

        document.getElementById("institutionDecision").textContent =
            studentData.institution.institutionDecision;

        document.getElementById("priorityLevel").textContent =
            studentData.institution.priorityLevel;

        document.getElementById("supportPlan").textContent =
            studentData.institution.supportPlan;

        document.getElementById("reviewTimeline").textContent =
            studentData.institution.reviewTimeline;

        document.getElementById("institutionNotes").textContent =
            studentData.institution.institutionNotes;

    }

    // ==================================================
    // FINAL AI RECOMMENDATION
    // ==================================================

    document.getElementById("finalRecommendation").textContent =
        studentData.scores.finalRecommendation;

    console.log(studentData);

    // ==================================================
    // PART 5 STARTS BELOW
    // ==================================================
    // ======================================================
// PART 5 - PRINT & FINISH DEMO
// ======================================================

// Get Buttons

const printReport =
    document.getElementById("printReport");

const finishDemo =
    document.getElementById("finishDemo");

// ======================================================
// PRINT REPORT
// ======================================================

printReport.addEventListener("click", () => {

    window.print();

});

// ======================================================
// FINISH DEMO
// ======================================================

finishDemo.addEventListener("click", () => {

    const confirmFinish = confirm(

        "Are you sure you want to finish the SOULSYNC demo?"

    );

    if(!confirmFinish){

        return;

    }

    alert(

        "Thank you for exploring the SOULSYNC Live Demo!"

    );

    setTimeout(() => {

        window.location.href = "completion.html";

    },1000);

});

// ======================================================
// OPTIONAL - RISK LEVEL COLOR
// ======================================================

const riskElement =
    document.getElementById("riskLevel");

switch(studentData.scores.riskLevel){

    case "High":

        riskElement.style.color = "#dc2626";
        riskElement.style.fontWeight = "700";

        break;

    case "Medium":

        riskElement.style.color = "#f59e0b";
        riskElement.style.fontWeight = "700";

        break;

    default:

        riskElement.style.color = "#16a34a";
        riskElement.style.fontWeight = "700";

}

// ======================================================
// READY
// ======================================================

console.log("Report Ready");

console.log("Print Feature Ready");

console.log("Finish Demo Ready");

});