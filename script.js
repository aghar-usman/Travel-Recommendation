function generateRecommendation() {
    const name = document.getElementById("name").value || "Traveler";
    const place = document.getElementById("place").value;
    const experience = document.getElementById("experience").value;
    const budget = document.getElementById("budget").value;

    // Place emojis
    const placeEmojis = { Mountains: "🌄", Beach: "🌊" };

    // Data
    const data = {
        Beach: {
            Adventure: {
                Low: { destination: "Goa, India", activities: "surfing, beach volleyball", img: "goa.jpg" },
                Medium: { destination: "Bali, Indonesia", activities: "snorkeling, parasailing", img: "bali.jpg" },
                High: { destination: "Maldives", activities: "scuba diving, jet skiing", img: "maldives.jpg" }
            },
            Relaxation: {
                Low: { destination: "Pondicherry, India", activities: "relaxing beach walks, yoga retreats", img: "pondicherry.jpg" },
                Medium: { destination: "Phuket, Thailand", activities: "spa resorts, sunset cruises", img: "phuket.jpg" },
                High: { destination: "Santorini, Greece", activities: "luxury cruises, wine tasting", img: "santorini.jpg" }
            }
        },
        Mountains: {
            Adventure: {
                Low: { destination: "Manali, India", activities: "hiking, river rafting", img: "manali.jpg" },
                Medium: { destination: "Nepal", activities: "mountaineering, trekking", img: "nepal.jpg" },
                High: { destination: "Swiss Alps, Switzerland", activities: "skiing, snowboarding", img: "swissalps.jpg" }
            },
            Relaxation: {
                Low: { destination: "Coorg, India", activities: "coffee plantation tours, nature walks", img: "coorg.jpg" },
                Medium: { destination: "Shimla, India", activities: "nature walks, cozy cottages", img: "shimla.jpg" },
                High: { destination: "Aspen, USA", activities: "luxury mountain retreats, spa resorts", img: "aspen.jpg" }
            }
        }
    };

    // Explicitly check for each level in the data object
    let result = null;
    if (data[place] && data[place][experience] && data[place][experience][budget]) {
        result = data[place][experience][budget];
    }

    const output = document.getElementById("output");
    const card = document.getElementById("recommendation-card");
    const img = document.getElementById("destination-img");
    const loading = document.getElementById("loading");

    // If result is null, show an error message
    if (!result) {
        output.innerHTML = "Invalid selection. Please ensure all fields are filled correctly.";
        return;
    }

    // Show Loading Animation
    card.style.display = "none";
    loading.style.display = "block";
    document.body.className = place === "Mountains" ? "mountains-bg" : "beach-bg";

    setTimeout(() => {
        loading.style.display = "none";
        output.innerHTML = `
            Hey ${name}! Based on your love for ${place} ${placeEmojis[place]} and your desire for ${experience.toLowerCase()}, 
            we recommend <strong>${result.destination}</strong>. Enjoy activities like ${result.activities}.
        `;
        img.src = result.img;
        img.style.width = "200px";
        img.style.height = "auto";
        card.style.display = "block";
    }, 1500);
}