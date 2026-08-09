// ======================================================
// SOULSYNC
// parent-dashboard.js
// Part 4 - Load Student Data
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Parent Dashboard Loaded Successfully");

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

    const parentForm =
        document.getElementById("parentForm");

    // ==================================================
    // HOME OBSERVATION
    // ==================================================

    const sleepQuality =
        document.getElementById("sleepQuality");

    const homeEating =
        document.getElementById("homeEating");

    const physicalActivity =
        document.getElementById("physicalActivity");

    const homeScreenTime =
        document.getElementById("homeScreenTime");

    const familyCommunication =
        document.getElementById("familyCommunication");

    const familyTime =
        document.getElementById("familyTime");

    // ==================================================
    // EMOTIONAL WELLBEING
    // ==================================================

    const emotionalBehaviour =
        document.getElementById("emotionalBehaviour");

    const homeConfidence =
        document.getElementById("homeConfidence");

    const homeStress =
        document.getElementById("homeStress");

    const sleepPattern =
        document.getElementById("sleepPattern");

    const happinessLevel =
        document.getElementById("happinessLevel");

    const parentConcern =
        document.getElementById("parentConcern");

    // ==================================================
    // PARENT NOTES
    // ==================================================

    const parentNotes =
        document.getElementById("parentNotes");

    const parentConcernLevel =
        document.getElementById("parentConcernLevel");

    const parentRecommendation =
        document.getElementById("parentRecommendation");

    console.log(studentData);

    // ==================================================
    // PART 5 STARTS BELOW
    // ======================================================
    // ======================================================
// PART 5 - SAVE PARENT OBSERVATION
// ======================================================

parentForm.addEventListener("submit", function(event){

    event.preventDefault();

    // ==========================================
    // VALIDATION
    // ==========================================

    if(

        sleepQuality.value === "" ||
        homeEating.value === "" ||
        physicalActivity.value === "" ||
        homeScreenTime.value === "" ||
        familyCommunication.value === "" ||
        familyTime.value === "" ||
        emotionalBehaviour.value === "" ||
        homeConfidence.value === "" ||
        homeStress.value === "" ||
        sleepPattern.value === "" ||
        parentNotes.value.trim() === "" ||
        parentConcernLevel.value === "" ||
        parentRecommendation.value === ""

    ){

        alert("Please complete all parent observations.");

        return;

    }

    // ==========================================
    // SAVE PARENT OBSERVATION
    // ==========================================

    studentData.parent = {

        sleepQuality : sleepQuality.value,

        homeEating : homeEating.value,

        physicalActivity : physicalActivity.value,

        homeScreenTime : Number(homeScreenTime.value),

        familyCommunication : familyCommunication.value,

        familyTime : familyTime.value,

        emotionalBehaviour : emotionalBehaviour.value,

        homeConfidence : homeConfidence.value,

        homeStress : homeStress.value,

        sleepPattern : sleepPattern.value,

        happinessLevel : Number(happinessLevel.value),

        parentConcern : Number(parentConcern.value),

        parentNotes : parentNotes.value.trim(),

        concernLevel : parentConcernLevel.value,

        recommendation : parentRecommendation.value

    };

    // ==========================================
    // UPDATE RISK LEVEL
    // ==========================================

    if(

        parentConcernLevel.value === "High" ||

        Number(parentConcern.value) >= 8 ||

        homeStress.value === "Almost Daily"

    ){

        studentData.scores.riskLevel = "High";

    }

    else if(

        parentConcernLevel.value === "Medium" ||

        Number(parentConcern.value) >= 6 ||

        homeStress.value === "Frequently"

    ){

        studentData.scores.riskLevel = "Medium";

    }

    // ==========================================
    // UPDATE FINAL RECOMMENDATION
    // ==========================================

    studentData.scores.parentRecommendation =
        parentRecommendation.value;

    // ==========================================
    // SAVE TO LOCAL STORAGE
    // ==========================================

    localStorage.setItem(

        "studentData",

        JSON.stringify(studentData)

    );

    // ==========================================
    // SUCCESS
    // ==========================================

    console.log(studentData);

    console.log("Parent Observation Saved Successfully");

    alert(

        "Parent Feedback Saved Successfully!\n\n" +

        "Current Risk Level : " +

        studentData.scores.riskLevel

    );

    // ==========================================
    // REDIRECT
    // ==========================================

    setTimeout(()=>{

        window.location.href="institution-dashboard.html";

    },1000);

});

// ======================================================
// RESET
// ======================================================

parentForm.addEventListener("reset",()=>{

    console.log("Parent Form Reset");

});

console.log("Parent Dashboard Ready");

});
