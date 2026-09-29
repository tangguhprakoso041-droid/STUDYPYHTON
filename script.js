// Database Materi Python Lengkap
const pythonModules = [
    {
        id: "pengenalan",
        title: "1. Pengenalan Python",
        content: `
            <h2 class="text-2xl font-bold text-yellow-400 mb-4">Pengenalan Python</h2>
            <p class="text-slate-300 mb-4">Python adalah bahasa pemrograman tingkat tinggi yang sangat populer karena sintaksnya yang ringkas dan mudah dipahami. Ditulis oleh Guido van Rossum pada tahun 1991.</p>
            <h3 class="text-lg font-bold text-white mb-2">Mengapa Belajar Python?</h3>
            <ul class="list-disc list-inside space-y-2 text-slate-300 mb-6">
                <li>Sintaks bersih dan mudah dipelajari mirip bahasa Inggris.</li>
                <li>Sangat serbaguna: Web Development, Data Science, AI, Automation, dan Game.</li>
                <li>Dukungan komunitas dan perpustakaan (library) yang luas.</li>
            </ul>
            <h3 class="text-lg font-bold text-white mb-2">Contoh Program Pertama:</h3>
            <pre class="bg-slate-950 p-4 rounded-lg text-green-400 font-mono text-sm border border-slate-700">print("Hello, World!")</pre>
        `
    },
    {
        id: "variabel-tipe-data",
        title: "2. Variabel & Tipe Data",
        content: `
            <h2 class="text-2xl font-bold text-yellow-400 mb-4">Variabel & Tipe Data</h2>
            <p class="text-slate-300 mb-4">Variabel digunakan untuk menyimpan data di dalam memori komputer.</p>
            <h3 class="text-lg font-bold text-white mb-2">Tipe Data Utama di Python:</h3>
            <div class="overflow-x-auto mb-6">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-700 text-yellow-400">
                            <th class="py-2 px-4">Tipe Data</th>
                            <th class="py-2 px-4">Penjelasan</th>
                            <th class="py-2 px-4">Contoh</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-300 text-sm">
                        <tr class="border-b border-slate-800"><td class="py-2 px-4 font-mono">int</td><td class="py-2 px-4">Bilangan bulat</td><td class="py-2 px-4 font-mono">x = 10</td></tr>
                        <tr class="border-b border-slate-800"><td class="py-2 px-4 font-mono">float</td><td class="py-2 px-4">Bilangan desimal</td><td class="py-2 px-4 font-mono">pi = 3.14</td></tr>
                        <tr class="border-b border-slate-800"><td class="py-2 px-4 font-mono">str</td><td class="py-2 px-4">Teks (String)</td><td class="py-2 px-4 font-mono">nama = "Tangguh"</td></tr>
                        <tr class="border-b border-slate-800"><td class="py-2 px-4 font-mono">bool</td><td class="py-2 px-4">Logika True/False</td><td class="py-2 px-4 font-mono">aktif = True</td></tr>
                    </tbody>
                </table>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Contoh Kode:</h3>
            <pre class="bg-slate-950 p-4 rounded-lg text-green-400 font-mono text-sm border border-slate-700"># Deklarasi variabel
umur = 16
tinggi = 170.5
is_student = True

print(type(umur))  # Output: &lt;class 'int'&gt;</pre>
        `
    },
    {
        id: "percabangan",
        title: "3. Percabangan (If / Else)",
        content: `
            <h2 class="text-2xl font-bold text-yellow-400 mb-4">Percabangan (If - Elif - Else)</h2>
            <p class="text-slate-300 mb-4">Percabangan digunakan untuk mengeksekusi blok kode tertentu berdasarkan kondisi logika.</p>
            <pre class="bg-slate-950 p-4 rounded-lg text-green-400 font-mono text-sm border border-slate-700 mb-4">nilai = 85

if nilai >= 90:
    print("Grade: A")
elif nilai >= 75:
    print("Grade: B")
else:
    print("Grade: C")</pre>
        `
    },
    {
        id: "perulangan",
        title: "4. Perulangan (Loops)",
        content: `
            <h2 class="text-2xl font-bold text-yellow-400 mb-4">Perulangan (For & While)</h2>
            <p class="text-slate-300 mb-4">Digunakan untuk menjalankan perintah berkali-kali secara otomatis.</p>
            <h3 class="text-lg font-bold text-white mb-2">1. For Loop:</h3>
            <pre class="bg-slate-950 p-4 rounded-lg text-green-400 font-mono text-sm border border-slate-700 mb-4">for i in range(5):
    print("Angka:", i)</pre>
            <h3 class="text-lg font-bold text-white mb-2">2. While Loop:</h3>
            <pre class="bg-slate-950 p-4 rounded-lg text-green-400 font-mono text-sm border border-slate-700">count = 0
while count < 3:
    print("Counting:", count)
    count += 1</pre>
        `
    },
    {
        id: "fungsi",
        title: "5. Fungsi (Functions)",
        content: `
            <h2 class="text-2xl font-bold text-yellow-400 mb-4">Fungsi (Def)</h2>
            <p class="text-slate-300 mb-4">Fungsi adalah blok kode terorganisir yang digunakan untuk melakukan satu tugas tertentu dan dapat dipanggil berulang kali.</p>
            <pre class="bg-slate-950 p-4 rounded-lg text-green-400 font-mono text-sm border border-slate-700">def sapa(nama):
    return f"Halo, {nama}! Selamat belajar Python."

# Memanggil fungsi
pesan = sapa("Tangguh")
print(pesan)</pre>
        `
    }
];

// Data Kuis
const quizData = [
    {
        question: "1. Kata kunci yang digunakan untuk membuat fungsi di Python adalah?",
        options: ["function", "def", "func", "create"],
        answer: 1
    },
    {
        question: "2. Manakah simbol yang digunakan untuk memberikan komentar satu baris di Python?",
        options: ["//", "/*", "#", "--"],
        answer: 2
    },
    {
        question: "3. Apa tipe data dari nilai `3.14`?",
        options: ["int", "string", "boolean", "float"],
        answer: 3
    }
];

// Inisialisasi Aplikasi
document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    loadModule(pythonModules[0].id);
    renderQuiz();
});

// Render Sidebar Menu
function renderMenu() {
    const menuContainer = document.getElementById("modul-menu");
    menuContainer.innerHTML = pythonModules.map(mod => `
        <button onclick="loadModule('${mod.id}')" id="menu-${mod.id}" 
            class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition text-slate-300 hover:bg-slate-700 flex items-center justify-between">
            <span>${mod.title}</span>
            <i class="fa-solid fa-chevron-right text-xs opacity-50"></i>
        </button>
    `).join('');
}

// Load Konten Modul
function loadModule(id) {
    const module = pythonModules.find(m => m.id === id);
    if (!module) return;

    // Highlight menu yang aktif
    pythonModules.forEach(m => {
        const btn = document.getElementById(`menu-${m.id}`);
        if (btn) btn.classList.remove("active-tab");
    });
    const activeBtn = document.getElementById(`menu-${id}`);
    if (activeBtn) activeBtn.classList.add("active-tab");

    // Tampilkan konten
    document.getElementById("materi-content").innerHTML = module.content;
}

// Interpreter Sederhana Python (Emulasi JS untuk Demonstrasi)
function runPythonCode() {
    const code = document.getElementById("code-input").value;
    const outputElement = document.getElementById("code-output");
    outputElement.textContent = "Menjalankan kode...\n";

    let logs = [];
    
    try {
        // Parsing dasar perintah print & variabel sederhana secara aman
        const lines = code.split("\n");
        let env = {};

        lines.forEach(line => {
            let trimmed = line.trim();
            if (trimmed.startsWith("#") || trimmed === "") return;

            // Penanganan print() sederhana
            if (trimmed.startsWith("print(")) {
                let content = trimmed.substring(6, trimmed.lastIndexOf(")")).trim();
                
                // Evaluasi f-string sederhana atau string biasa
                if (content.startsWith('f"') || content.startsWith("f'")) {
                    let str = content.substring(2, content.length - 1);
                    str = str.replace(/\{(\w+)\}/g, (_, key) => env[key] !== undefined ? env[key] : `{${key}}`);
                    logs.push(str);
                } else if ((content.startsWith('"') && content.endsWith('"')) || (content.startsWith("'") && content.endsWith("'"))) {
                    logs.push(content.slice(1, -1));
                } else if (env[content] !== undefined) {
                    logs.push(env[content]);
                } else {
                    try {
                        logs.push(eval(content));
                    } catch (e) {
                        logs.push(content);
                    }
                }
            } 
            // Penanganan variabel sederhana (misal: x = 10)
            else if (trimmed.includes("=")) {
                let parts = trimmed.split("=");
                let key = parts[0].trim();
                let val = parts[1].trim();
                env[key] = isNaN(val) ? val.replace(/['"]/g, "") : Number(val);
            }
        });

        if (logs.length > 0) {
            outputElement.textContent = logs.join("\n");
        } else {
            outputElement.textContent = "Kode berhasil dijalankan tanpa output.";
        }
    } catch (err) {
        outputElement.textContent = "Error pada sintaks:\n" + err.message;
    }
}

// Render Kuis
function renderQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = quizData.map((q, idx) => `
        <div class="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <p class="font-semibold text-white mb-3">${q.question}</p>
            <div class="space-y-2">
                ${q.options.map((opt, oIdx) => `
                    <label class="flex items-center space-x-3 cursor-pointer text-slate-300 hover:text-white text-sm">
                        <input type="radio" name="quiz-${idx}" value="${oIdx}" class="text-blue-500 focus:ring-0">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Cek Jawaban Kuis
function checkQuiz() {
    let score = 0;
    quizData.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="quiz-${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    const resultDiv = document.getElementById("quiz-result");
    resultDiv.classList.remove("hidden");
    if (score === quizData.length) {
        resultDiv.className = "mt-4 font-bold text-lg text-green-400";
        resultDiv.textContent = `Sempurna! Skor Anda: ${score} / ${quizData.length} (100%)`;
    } else {
        resultDiv.className = "mt-4 font-bold text-lg text-yellow-400";
        resultDiv.textContent = `Skor Anda: ${score} / ${quizData.length}. Pelajari materi lagi untuk hasil sempurna!`;
    }
}
