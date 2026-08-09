// ======================================================
// SOULSYNC
// institution-dashboard.js
// Part 4 - Load Analytics
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Institution Dashboard Loaded Successfully");

    // ==================================================
    // GET STUDENT DATA
    // ==================================================

    const studentData = JSON.parse(
        localStorage.getItem("studentData")
    );

    if (!studentData) {

        alert("No student data found.");

        window.location.href = "student-dashboard.html";

        return;

    }

    // ==================================================
    // STUDENT INFORMATION
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
    // SCORE CARDS
    // ==================================================

    document.getElementById("wellnessScoreDisplay").textContent =
        studentData.scores.wellnessScore;

    document.getElementById("academicScoreDisplay").textContent =
        studentData.scores.academicScore;

    document.getElementById("attendanceScoreDisplay").textContent =
        studentData.scores.attendanceScore;

    document.getElementById("riskLevelDisplay").textContent =
        studentData.scores.riskLevel;

    // ==================================================
    // ACADEMIC SUMMARY
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
    // ATTENDANCE
    // ==================================================

    document.getElementById("attendanceDisplay").textContent =
        studentData.attendance.attendance + "%";

    document.getElementById("missedDisplay").textContent =
        studentData.attendance.classesMissed;

    document.getElementById("punctualityDisplay").textContent =
        studentData.attendance.punctuality;

    // ==================================================
    // WELLBEING
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
    // TEACHER SUMMARY
    // ==================================================

    if(studentData.teacher){

        document.getElementById("teacherParticipationDisplay").textContent =
            studentData.teacher.participation;

        document.getElementById("teacherBehaviourDisplay").textContent =
            studentData.teacher.behaviour;

        document.getElementById("teacherCommunicationDisplay").textContent =
            studentData.teacher.communication;

        document.getElementById("teacherConcernDisplay").textContent =
            studentData.teacher.concernLevel;

    }

    // ==================================================
    // PARENT SUMMARY
    // ==================================================

    if(studentData.parent){

        document.getElementById("familyCommunicationDisplay").textContent =
            studentData.parent.familyCommunication;

        document.getElementById("emotionDisplay").textContent =
            studentData.parent.emotionalBehaviour;

        document.getElementById("parentConcernDisplay").textContent =
            studentData.parent.concernLevel;

        document.getElementById("parentRecommendationDisplay").textContent =
            studentData.parent.recommendation;

    }

    // ==================================================
    // AI INSIGHTS
    // ==================================================

    document.getElementById("overallRiskDisplay").textContent =
        studentData.scores.riskLevel;

    document.getElementById("academicInsight").textContent =
        studentData.scores.academicScore >= 75
        ? "Academic performance is satisfactory."
        : "Academic improvement is recommended.";

    document.getElementById("attendanceInsight").textContent =
        studentData.scores.attendanceScore >= 75
        ? "Attendance is satisfactory."
        : "Attendance requires monitoring.";

    document.getElementById("teacherInsight").textContent =
        studentData.teacher
        ? studentData.teacher.recommendation
        : "No teacher recommendation available.";

    document.getElementById("parentInsight").textContent =
        studentData.parent
        ? studentData.parent.recommendation
        : "No parent recommendation available.";

    document.getElementById("aiRecommendation").textContent =
        studentData.scores.recommendation;

    // ==================================================
    // GET FORM ELEMENTS
    // ==================================================

    const institutionForm =
        document.getElementById("institutionForm");

    const institutionDecision =
        document.getElementById("institutionDecision");

    const priorityLevel =
        document.getElementById("priorityLevel");

    const supportPlan =
        document.getElementById("supportPlan");

    const reviewTimeline =
        document.getElementById("reviewTimeline");

    const institutionNotes =
        document.getElementById("institutionNotes");

    const finalRecommendation =
        document.getElementById("finalRecommendation");

    console.log(studentData);

    // ==================================================
    // PART 5 STARTS BELOW
    // ==================================================
    // ======================================================
// PART 5 - SAVE INSTITUTION DECISION
// ======================================================

institutionForm.addEventListener("submit", function(event){

    event.preventDefault();

    // ==========================================
    // VALIDATION
    // ==========================================

    if(

        institutionDecision.value === "" ||
        priorityLevel.value === "" ||
        supportPlan.value === "" ||
        reviewTimeline.value === "" ||
        institutionNotes.value.trim() === ""

    ){

        alert("Please complete all institution details.");

        return;

    }

    // ==========================================
    // SAVE INSTITUTION DATA
    // ==========================================

    studentData.institution = {

        institutionDecision : institutionDecision.value,

        priorityLevel : priorityLevel.value,

        supportPlan : supportPlan.value,

        reviewTimeline : reviewTimeline.value,

        institutionNotes : institutionNotes.value.trim()

    };

    // ==========================================
    // GENERATE FINAL RECOMMENDATION
    // ==========================================

    let finalAIRecommendation = "";

    if(priorityLevel.value === "Critical"){

        finalAIRecommendation =
        "Immediate counselling intervention, mentor meeting and parent follow-up are strongly recommended.";

    }

    else if(priorityLevel.value === "High"){

        finalAIRecommendation =
        "Provide continuous monitoring with counselling and academic support.";

    }

    else if(priorityLevel.value === "Medium"){

        finalAIRecommendation =
        "Schedule regular mentor reviews and monitor student wellbeing.";

    }

    else{

        finalAIRecommendation =
        "Continue routine monitoring and encourage healthy academic and personal habits.";

    }

    // Update Recommendation

    studentData.scores.finalRecommendation =
        finalAIRecommendation;

    // Show Recommendation

    finalRecommendation.textContent =
        finalAIRecommendation;

    // ==========================================
    // SAVE TO LOCAL STORAGE
    // ==========================================

    localStorage.setItem(

        "studentData",

        JSON.stringify(studentData)

    );

    // ==========================================
    // SUCCESS MESSAGE
    // ==========================================

    console.log(studentData);

    console.log("Institution Decision Saved Successfully");

    alert(

        "Institution Decision Saved Successfully!\n\n" +

        "Final Recommendation Generated."

    );

    // ==========================================
    // REDIRECT
    // ==========================================

    setTimeout(()=>{

        window.location.href = "report.html";

    },1000);

});

// ======================================================
// RESET
// ======================================================

institutionForm.addEventListener("reset",()=>{

    console.log("Institution Form Reset");

});

// ======================================================
// READY
// ======================================================

console.log("Institution Dashboard Ready");

});