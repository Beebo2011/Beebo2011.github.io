// PRAYER TIMES
fetch("https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt")
  .then(res => res.json())
  .then(data => {
    const times = data.data.timings;
    const list = document.getElementById("prayerTimes");

    ["Fajr","Dhuhr","Asr","Maghrib","Isha"].forEach(prayer => {
      const li = document.createElement("li");
      li.textContent = `${prayer}: ${times[prayer]}`;
      list.appendChild(li);
    });
  });

// QURAN AYATS (Surah Al-Fatiha)
fetch("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=1")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("ayahs");

    data.verses.forEach(ayah => {
      const div = document.createElement("div");

      div.innerHTML = `
        <p class="ayah">${ayah.text_uthmani}</p>
        <button onclick="toggleTafsir(this)">Show Explanation</button>
        <p class="tafsir">This verse teaches guidance and mercy from Allah.</p>
      `;

      container.appendChild(div);
    });
  });

function toggleTafsir(btn) {
  const tafsir = btn.nextElementSibling;
  tafsir.style.display = tafsir.style.display === "none" ? "block" : "none";
}
