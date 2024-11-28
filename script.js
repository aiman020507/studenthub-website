// DOM Elements
const quoteForm = document.querySelector('#quote-form');
const quoteContainer = document.querySelector('.quotes');
const confessionForm = document.querySelector('#confession-form');
const confessionContainer = document.querySelector('.confession');
const leaderboardTable = document.querySelector('.leaderboard table');

// Add new quote
function addQuote(quote, author) {
    const quoteCard = document.createElement('div');
    quoteCard.classList.add('quote-card');
    quoteCard.innerHTML = `
        <p>"${quote}"</p>
        <p class="quote-author">- ${author}</p>
    `;
    quoteContainer.appendChild(quoteCard);
}

// Add new confession
function addConfession(confession) {
    const confessionCard = document.createElement('div');
    confessionCard.classList.add('quote-card');
    confessionCard.innerHTML = `<p>${confession}</p>`;
    confessionContainer.appendChild(confessionCard);
}

// Update leaderboard
function updateLeaderboard(students) {
    leaderboardTable.innerHTML = `
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
        </tr>
    `;
    
    students.sort((a, b) => b.score - a.score);
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.score}</td>
        `;
        leaderboardTable.appendChild(row);
    });
}

// Event Listeners
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const quote = e.target.quote.value;
        const author = e.target.author.value;
        if (quote && author) {
            addQuote(quote, author);
            e.target.reset();
        }
    });
}

if (confessionForm) {
    confessionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const confession = e.target.confession.value;
        if (confession) {
            addConfession(confession);
            e.target.reset();
        }
    });
}

// Calendar functionality
function createCalendar() {
    const calendar = document.querySelector('.calendar');
    if (calendar) {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        
        // Calendar generation logic here
        // This can be expanded based on specific calendar requirements
    }
}

// Initialize calendar if it exists
createCalendar();

// Sample data for testing
const sampleStudents = [
    { name: 'Alice Johnson', score: 95 },
    { name: 'Bob Smith', score: 92 },
    { name: 'Carol White', score: 88 },
    { name: 'David Brown', score: 85 },
    { name: 'Eve Wilson', score: 83 }
];

// Initialize leaderboard with sample data
updateLeaderboard(sampleStudents);
