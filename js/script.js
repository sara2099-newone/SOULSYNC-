// =============================
// FAQ SEARCH
// =============================

const faqSearch = document.getElementById("faqSearch");
const searchBtn = document.getElementById("searchBtn");

if (faqSearch && searchBtn) {

    function searchFAQ() {

        const searchText = faqSearch.value.trim().toLowerCase();

        const keywords = {
            "stress": "stress",
            "anxiety": "anxiety",
            "depression": "depression",
            "counselling": "counselling",
            "counseling": "counselling",
            "privacy": "privacy",
            "support": "support",
            "mindscope": "mindscope"
        };

        let found = false;

        for (let key in keywords) {
            if (searchText.includes(key)) {

                const target = document.getElementById(keywords[key]);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            alert("No matching question found.");
        }
    }

    searchBtn.addEventListener("click", searchFAQ);

    faqSearch.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchFAQ();
        }
    });

}