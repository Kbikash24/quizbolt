import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const QUESTIONS = [
      {
        cat: "Science",
        q: "What gas do plants absorb from the air to make food?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correct: 1,
      },
      {
        cat: "Science",
        q: "How many bones are in the adult human body?",
        options: ["186", "206", "226", "246"],
        correct: 1,
      },
      {
        cat: "Science",
        q: "What planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        correct: 2,
      },
      {
        cat: "Science",
        q: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2,
      },
      {
        cat: "Science",
        q: "What part of the cell contains its genetic material?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Cytoplasm"],
        correct: 1,
      },
      {
        cat: "Geography",
        q: "What is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
        correct: 2,
      },
      {
        cat: "Geography",
        q: "Which country has the most time zones?",
        options: ["Russia", "USA", "France", "China"],
        correct: 2,
      },
      {
        cat: "Geography",
        q: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        correct: 2,
      },
      {
        cat: "Geography",
        q: "Mount Kilimanjaro is located on which continent?",
        options: ["Asia", "Africa", "South America", "Australia"],
        correct: 1,
      },
      {
        cat: "Geography",
        q: "Which desert is the largest in the world?",
        options: ["Sahara", "Gobi", "Antarctic", "Arabian"],
        correct: 2,
      },
      {
        cat: "Movies & TV",
        q: "Which movie features the song 'Let It Go'?",
        options: ["Moana", "Tangled", "Frozen", "Encanto"],
        correct: 2,
      },
      {
        cat: "Movies & TV",
        q: "Who directed the movie 'Jaws'?",
        options: [
          "George Lucas",
          "Steven Spielberg",
          "Martin Scorsese",
          "James Cameron",
        ],
        correct: 1,
      },
      {
        cat: "Movies & TV",
        q: "In 'Friends', what is the name of Ross's pet monkey?",
        options: ["Marcel", "George", "Chandler", "Gunther"],
        correct: 0,
      },
      {
        cat: "Movies & TV",
        q: "What is the highest-grossing film of all time (unadjusted)?",
        options: ["Titanic", "Avengers: Endgame", "Avatar", "Star Wars"],
        correct: 2,
      },
      {
        cat: "Movies & TV",
        q: "Which streaming show is set in the fictional town of Hawkins?",
        options: [
          "Dark",
          "The Umbrella Academy",
          "Stranger Things",
          "Wednesday",
        ],
        correct: 2,
      },
      {
        cat: "History",
        q: "In what year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        correct: 1,
      },
      {
        cat: "History",
        q: "Who was the first President of the United States?",
        options: [
          "Thomas Jefferson",
          "John Adams",
          "George Washington",
          "Abraham Lincoln",
        ],
        correct: 2,
      },
      {
        cat: "History",
        q: "The Great Wall of China was primarily built to defend against whom?",
        options: [
          "Mongol invaders",
          "Roman legions",
          "Japanese forces",
          "Persian armies",
        ],
        correct: 0,
      },
      {
        cat: "History",
        q: "Which ancient civilization built the pyramids of Giza?",
        options: ["Mesopotamians", "Egyptians", "Aztecs", "Greeks"],
        correct: 1,
      },
      {
        cat: "History",
        q: "The Berlin Wall fell in which year?",
        options: ["1985", "1987", "1989", "1991"],
        correct: 2,
      },
      {
        cat: "Sports",
        q: "How many players are on a standard soccer team on the field?",
        options: ["9", "10", "11", "12"],
        correct: 2,
      },
      {
        cat: "Sports",
        q: "In which sport would you perform a 'slam dunk'?",
        options: ["Volleyball", "Basketball", "Tennis", "Badminton"],
        correct: 1,
      },
      {
        cat: "Sports",
        q: "How often are the Summer Olympic Games held?",
        options: [
          "Every 2 years",
          "Every 3 years",
          "Every 4 years",
          "Every 5 years",
        ],
        correct: 2,
      },
      {
        cat: "Sports",
        q: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Argentina", "Italy", "Brazil"],
        correct: 3,
      },
      {
        cat: "Sports",
        q: "In tennis, what is a score of zero called?",
        options: ["Nil", "Love", "Zero", "Duck"],
        correct: 1,
      },
      {
        cat: "General",
        q: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correct: 2,
      },
      {
        cat: "General",
        q: "How many strings does a standard guitar have?",
        options: ["4", "5", "6", "7"],
        correct: 2,
      },
      {
        cat: "General",
        q: "What is the largest mammal in the world?",
        options: ["African elephant", "Blue whale", "Giraffe", "Polar bear"],
        correct: 1,
      },
      {
        cat: "General",
        q: "Which language has the most native speakers worldwide?",
        options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
        correct: 3,
      },
      {
        cat: "General",
        q: "What color do you get by mixing blue and yellow paint?",
        options: ["Purple", "Orange", "Green", "Brown"],
        correct: 2,
      },
    ];

    const OPT_META = [
      { cls: "c0", glyph: "▲" },
      { cls: "c1", glyph: "◆" },
      { cls: "c2", glyph: "●" },
      { cls: "c3", glyph: "■" },
    ];
    const DURATION = 15000;

    let S = {
      view: "landing",
      role: null,
      code: null,
      playerId: null,
      playerName: "",
      room: null,
      players: [],
      answered: false,
      chosenIdx: null,
      error: "",
      lastSeenQIndex: null,
      pollHandle: null,
      timerHandle: null,
      numQuestions: 10,
      lastPhase: null,
      lastCountdownSecond: null,
      lastLobbyPlayerCount: null,
    };

    const SOUND = {
      ctx: null,
      enabled: true,
      timerAudio: null,
      revealAudio: null,
    };

    function escapeHtml(str) {
      return String(str).replace(/[&<>"']/g, (c) => {
        return {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[c];
      });
    }
    function shuffle(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    function genCode() {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
      let c = "";
      for (let i = 0; i < 4; i += 1)
        c += chars[Math.floor(Math.random() * chars.length)];
      return c;
    }
    function computePoints(elapsed, duration) {
      const frac = Math.max(0, 1 - elapsed / duration);
      return Math.round(500 + 500 * frac);
    }

    function ensureAudioContext() {
      if (!SOUND.enabled) return null;
      if (!SOUND.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return null;
        SOUND.ctx = new AudioCtx();
      }
      if (SOUND.ctx.state === "suspended") {
        SOUND.ctx.resume();
      }
      return SOUND.ctx;
    }

    function playTone({
      freq = 440,
      duration = 0.12,
      type = "sine",
      gain = 0.04,
      delay = 0,
    }) {
      const ctx = ensureAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const amp = ctx.createGain();
      const start = ctx.currentTime + delay;
      const end = start + duration;

      osc.type = type;
      osc.frequency.setValueAtTime(freq, start);

      amp.gain.setValueAtTime(0.0001, start);
      amp.gain.exponentialRampToValueAtTime(gain, start + 0.01);
      amp.gain.exponentialRampToValueAtTime(0.0001, end);

      osc.connect(amp);
      amp.connect(ctx.destination);
      osc.start(start);
      osc.stop(end + 0.01);
    }

    function getAudioElement(kind, src) {
      if (!SOUND.enabled) return null;
      if (!SOUND[kind]) {
        const audio = new Audio(src);
        audio.preload = "auto";
        SOUND[kind] = audio;
      }
      return SOUND[kind];
    }

    function playAudioFile(kind, src) {
      const audio = getAudioElement(kind, src);
      if (!audio) return false;
      try {
        audio.currentTime = 0;
        const p = audio.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {});
        }
        return true;
      } catch {
        return false;
      }
    }

    function playClickSound() {
      playTone({ freq: 520, duration: 0.06, type: "triangle", gain: 0.02 });
    }

    function playOptionSelectSound() {
      playTone({ freq: 560, duration: 0.05, type: "triangle", gain: 0.03 });
      playTone({
        freq: 720,
        duration: 0.06,
        type: "triangle",
        gain: 0.025,
        delay: 0.04,
      });
    }

    function playQuestionStartSound() {
      playTone({ freq: 440, duration: 0.08, type: "triangle", gain: 0.03 });
      playTone({
        freq: 660,
        duration: 0.11,
        type: "triangle",
        gain: 0.035,
        delay: 0.08,
      });
    }

    function playPlayerJoinSound() {
      playTone({ freq: 740, duration: 0.06, type: "triangle", gain: 0.03 });
      playTone({
        freq: 988,
        duration: 0.09,
        type: "triangle",
        gain: 0.035,
        delay: 0.06,
      });
    }

    function playRevealSound() {
      const ok = playAudioFile("revealAudio", "/sounds/reveal.mp3");
      if (!ok) {
        playTone({ freq: 480, duration: 0.07, type: "square", gain: 0.025 });
        playTone({
          freq: 360,
          duration: 0.1,
          type: "square",
          gain: 0.02,
          delay: 0.06,
        });
      }
    }

    function playCorrectSound() {
      playTone({ freq: 587, duration: 0.08, type: "sine", gain: 0.035 });
      playTone({
        freq: 784,
        duration: 0.12,
        type: "sine",
        gain: 0.045,
        delay: 0.08,
      });
    }

    function playWrongSound() {
      playTone({ freq: 320, duration: 0.12, type: "sawtooth", gain: 0.03 });
      playTone({
        freq: 240,
        duration: 0.14,
        type: "sawtooth",
        gain: 0.03,
        delay: 0.08,
      });
    }

    function playCountdownTickSound() {
      const ok = playAudioFile("timerAudio", "/sounds/timer.mp3");
      if (!ok) {
        playTone({ freq: 900, duration: 0.04, type: "square", gain: 0.018 });
      }
    }

    function playGameOverSound() {
      playTone({ freq: 523, duration: 0.08, type: "triangle", gain: 0.03 });
      playTone({
        freq: 659,
        duration: 0.1,
        type: "triangle",
        gain: 0.035,
        delay: 0.08,
      });
      playTone({
        freq: 784,
        duration: 0.12,
        type: "triangle",
        gain: 0.04,
        delay: 0.17,
      });
    }

    function parseStoredRecord(raw) {
      if (raw == null) return null;
      if (typeof raw === "string") {
        try {
          return JSON.parse(raw);
        } catch {
          return null;
        }
      }
      if (typeof raw === "object") return raw;
      return null;
    }

    function getRemainingMs() {
      if (!S.room || !S.room.duration) return DURATION;
      if (!S.room.startTime) return S.room.duration;
      const elapsed = Date.now() - S.room.startTime;
      return Math.max(0, S.room.duration - elapsed);
    }

    function getTimerUiState() {
      const duration = S.room && S.room.duration ? S.room.duration : DURATION;
      const remaining = getRemainingMs();
      const secs = Math.max(0, Math.ceil(remaining / 1000));
      const circumference = 2 * Math.PI * 26;
      const frac = Math.max(0, remaining / duration);
      return {
        secs,
        dash: `${circumference * frac} ${circumference}`,
        stroke: secs <= 5 ? "var(--coral)" : "var(--gold)",
      };
    }

    async function storageGet(key) {
      try {
        const res = await fetch(`/api/storage/${encodeURIComponent(key)}`);
        if (res.status === 404) return null;
        const data = await res.json();
        return data.value;
      } catch {
        return null;
      }
    }
    async function storageSet(key, value) {
      try {
        const res = await fetch(`/api/storage/${encodeURIComponent(key)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value }),
        });
        return await res.json();
      } catch {
        return null;
      }
    }
    async function storageList(prefix) {
      try {
        const res = await fetch(
          `/api/storage?prefix=${encodeURIComponent(prefix)}`,
        );
        const data = await res.json();
        return data && data.keys ? data.keys : [];
      } catch {
        return [];
      }
    }

    function app() {
      return document.getElementById("qb-app");
    }

    function stopTimerLoop() {
      if (S.timerHandle) {
        clearInterval(S.timerHandle);
        S.timerHandle = null;
      }
    }

    function startTimerLoop() {
      stopTimerLoop();
      S.timerHandle = setInterval(() => {
        const numEl = document.getElementById("qb-ring-num");
        const barEl = document.getElementById("qb-ring-bar");
        if (!numEl || !barEl || !S.room || !S.room.startTime) return;
        const elapsed = Date.now() - S.room.startTime;
        const remaining = Math.max(0, S.room.duration - elapsed);
        const secs = Math.ceil(remaining / 1000);
        numEl.textContent = String(secs);
        const circumference = 2 * Math.PI * 26;
        const frac = Math.max(0, remaining / S.room.duration);
        barEl.setAttribute(
          "stroke-dasharray",
          `${circumference * frac} ${circumference}`,
        );
        barEl.style.stroke = secs <= 5 ? "var(--coral)" : "var(--gold)";
        if (
          (S.view === "playerQuestion" || S.view === "hostQuestion") &&
          secs > 0 &&
          secs <= 5 &&
          secs !== S.lastCountdownSecond
        ) {
          S.lastCountdownSecond = secs;
          playCountdownTickSound();
        }
        if (remaining <= 0 && S.role === "player" && !S.answered) {
          S.lastCountdownSecond = null;
          S.answered = true;
          S.chosenIdx = -1;
          render();
        }
      }, 200);
    }

    function render() {
      const root = app();
      if (!root) return;
      root.innerHTML = VIEWS[S.view] ? VIEWS[S.view]() : VIEWS.landing();
      if (S.view === "hostQuestion" || S.view === "playerQuestion") {
        startTimerLoop();
      } else {
        stopTimerLoop();
      }
    }

    function startPolling() {
      stopPolling();
      S.pollHandle = setInterval(pollTick, 1500);
      pollTick();
    }

    function stopPolling() {
      if (S.pollHandle) {
        clearInterval(S.pollHandle);
        S.pollHandle = null;
      }
    }

    async function refreshRoom() {
      const raw = await storageGet(`room:${S.code}`);
      const room = parseStoredRecord(raw);
      if (room) S.room = room;
    }

    async function refreshPlayers() {
      const keys = await storageList(`player:${S.code}:`);
      const players = [];
      for (const k of keys) {
        const raw = await storageGet(k);
        const p = parseStoredRecord(raw);
        if (p) {
          const pid = k.slice(`player:${S.code}:`.length);
          players.push({
            id: pid,
            name: p.name,
            score: p.score || 0,
            lastCorrect: p.lastCorrect,
            lastPoints: p.lastPoints,
          });
        }
      }
      players.sort((a, b) => b.score - a.score);
      S.players = players;
    }

    async function refreshAnsweredCount() {
      if (!S.room || S.room.qIndex == null) return;
      const keys = await storageList(`ans:${S.code}:${S.room.qIndex}:`);
      S.room.answeredCount = keys.length;
    }

    function syncViewToPhase() {
      if (!S.room) return;
      if (S.role === "host") {
        if (S.room.phase === "lobby") S.view = "hostLobby";
        else if (S.room.phase === "question") S.view = "hostQuestion";
        else if (S.room.phase === "reveal") S.view = "hostReveal";
        else if (S.room.phase === "finished") S.view = "hostFinished";
      } else if (S.role === "player") {
        if (S.room.phase === "lobby") S.view = "playerLobby";
        else if (S.room.phase === "question") S.view = "playerQuestion";
        else if (S.room.phase === "reveal") S.view = "playerReveal";
        else if (S.room.phase === "finished") S.view = "playerFinished";
      }
    }

    async function pollTick() {
      if (!S.code) return;
      const previousPhase = S.lastPhase;
      await refreshRoom();
      if (!S.room) {
        render();
        return;
      }

      if (S.room.qIndex !== S.lastSeenQIndex) {
        S.answered = false;
        S.chosenIdx = null;
        S.lastSeenQIndex = S.room.qIndex;
      }

      if (S.role === "host") {
        if (S.room.phase === "lobby" || S.room.phase === "finished")
          await refreshPlayers();
        if (S.room.phase === "question") await refreshAnsweredCount();

        if (S.room.phase === "lobby") {
          if (S.lastLobbyPlayerCount == null) {
            S.lastLobbyPlayerCount = S.players.length;
          } else if (S.players.length > S.lastLobbyPlayerCount) {
            playPlayerJoinSound();
            S.lastLobbyPlayerCount = S.players.length;
          } else {
            S.lastLobbyPlayerCount = S.players.length;
          }
        } else {
          S.lastLobbyPlayerCount = null;
        }
      } else {
        if (
          S.room.phase === "lobby" ||
          S.room.phase === "finished" ||
          S.room.phase === "reveal"
        )
          await refreshPlayers();
      }

      const nextPhase = S.room.phase;
      if (nextPhase !== previousPhase) {
        S.lastPhase = nextPhase;
        S.lastCountdownSecond = null;
        if (nextPhase === "question") {
          playQuestionStartSound();
        } else if (nextPhase === "reveal") {
          playRevealSound();
          if (S.role === "player") {
            const stats = S.room.revealStats || { correctIdx: null };
            const isCorrect =
              S.chosenIdx !== -1 && S.chosenIdx === stats.correctIdx;
            if (isCorrect) playCorrectSound();
            else playWrongSound();
          }
        } else if (nextPhase === "finished") {
          playGameOverSound();
        }
      }

      syncViewToPhase();
      render();
    }

    async function createRoom() {
      playClickSound();
      S.error = "";
      let code = genCode();
      for (let i = 0; i < 6; i += 1) {
        const existing = await storageGet(`room:${code}`);
        if (!existing) break;
        code = genCode();
      }
      const pool = shuffle(QUESTIONS).slice(0, S.numQuestions);
      const room = {
        phase: "lobby",
        qIndex: -1,
        startTime: null,
        duration: DURATION,
        questions: pool,
        createdAt: Date.now(),
      };
      await storageSet(`room:${code}`, JSON.stringify(room));
      S.code = code;
      S.room = room;
      S.role = "host";
      S.view = "hostLobby";
      S.lastSeenQIndex = -1;
      S.lastPhase = room.phase;
      S.lastLobbyPlayerCount = 0;
      render();
      startPolling();
    }

    async function hostStart() {
      playQuestionStartSound();
      if (!S.players || S.players.length === 0) return;
      S.room.phase = "question";
      S.room.qIndex = 0;
      S.room.startTime = Date.now();
      S.room.answeredCount = 0;
      await storageSet(`room:${S.code}`, JSON.stringify(S.room));
      render();
    }

    async function hostReveal() {
      playRevealSound();
      const code = S.code;
      const qIndex = S.room.qIndex;
      const keys = await storageList(`ans:${code}:${qIndex}:`);
      const correctIdx = S.room.questions[qIndex].correct;
      let answeredCount = 0;
      let correctCount = 0;
      for (const k of keys) {
        const raw = await storageGet(k);
        const a = parseStoredRecord(raw);
        if (!a) continue;
        answeredCount += 1;
        const isCorrect = a.choice === correctIdx;
        if (isCorrect) correctCount += 1;
        const pts = isCorrect ? computePoints(a.time, S.room.duration) : 0;
        const pid = k.slice(`ans:${code}:${qIndex}:`.length);
        const pRaw = await storageGet(`player:${code}:${pid}`);
        const p = parseStoredRecord(pRaw);
        if (p) {
          p.score = (p.score || 0) + pts;
          p.lastPoints = pts;
          p.lastCorrect = isCorrect;
          await storageSet(`player:${code}:${pid}`, JSON.stringify(p));
        }
      }
      S.room.phase = "reveal";
      S.room.revealStats = { answeredCount, correctCount, correctIdx };
      await storageSet(`room:${code}`, JSON.stringify(S.room));
      await refreshPlayers();
      render();
    }

    async function hostNext() {
      const nextIdx = S.room.qIndex + 1;
      if (nextIdx >= S.room.questions.length) {
        playClickSound();
        S.room.phase = "finished";
      } else {
        playQuestionStartSound();
        S.room.phase = "question";
        S.room.qIndex = nextIdx;
        S.room.startTime = Date.now();
        S.room.answeredCount = 0;
        delete S.room.revealStats;
      }
      await storageSet(`room:${S.code}`, JSON.stringify(S.room));
      render();
    }

    function hostNewGame() {
      stopPolling();
      stopTimerLoop();
      S = {
        view: "hostSetup",
        role: null,
        code: null,
        playerId: null,
        playerName: "",
        room: null,
        players: [],
        answered: false,
        chosenIdx: null,
        error: "",
        lastSeenQIndex: null,
        pollHandle: null,
        timerHandle: null,
        numQuestions: 10,
        lastPhase: null,
        lastCountdownSecond: null,
        lastLobbyPlayerCount: null,
      };
      render();
    }

    async function joinRoom(name, codeInput) {
      playClickSound();
      S.error = "";
      const code = (codeInput || "").toUpperCase().trim();
      const trimmedName = (name || "").trim().slice(0, 20);
      if (!trimmedName) {
        S.error = "Enter your name to join.";
        render();
        return;
      }
      if (code.length !== 4) {
        S.error = "Room codes are 4 letters.";
        render();
        return;
      }
      const raw = await storageGet(`room:${code}`);
      if (!raw) {
        S.error = "No room found with that code.";
        render();
        return;
      }
      const room = parseStoredRecord(raw);
      if (!room) {
        S.error = "Room data is corrupted. Create a new room.";
        render();
        return;
      }
      const playerId = `p_${Math.random().toString(36).slice(2, 9)}`;
      const player = { name: trimmedName, score: 0, joinedAt: Date.now() };
      await storageSet(`player:${code}:${playerId}`, JSON.stringify(player));
      S.code = code;
      S.playerId = playerId;
      S.playerName = trimmedName;
      S.role = "player";
      S.room = room;
      S.lastSeenQIndex = room.qIndex;
      S.lastPhase = room.phase;
      syncViewToPhase();
      render();
      startPolling();
    }

    async function playerAnswer(idx) {
      if (S.answered || S.room.phase !== "question") return;
      playOptionSelectSound();
      S.answered = true;
      S.chosenIdx = idx;
      const elapsed = Date.now() - (S.room.startTime || Date.now());
      await storageSet(
        `ans:${S.code}:${S.room.qIndex}:${S.playerId}`,
        JSON.stringify({
          choice: idx,
          time: Math.min(elapsed, S.room.duration),
        }),
      );
      render();
    }

    function goLanding() {
      playClickSound();
      stopPolling();
      stopTimerLoop();
      S = {
        view: "landing",
        role: null,
        code: null,
        playerId: null,
        playerName: "",
        room: null,
        players: [],
        answered: false,
        chosenIdx: null,
        error: "",
        lastSeenQIndex: null,
        pollHandle: null,
        timerHandle: null,
        numQuestions: 10,
        lastPhase: null,
        lastCountdownSecond: null,
        lastLobbyPlayerCount: null,
      };
      render();
    }
    function goHostSetup() {
      playClickSound();
      S.view = "hostSetup";
      S.error = "";
      render();
    }
    function goJoinForm() {
      playClickSound();
      S.view = "joinForm";
      S.error = "";
      render();
    }
    function setNumQuestions(n) {
      playClickSound();
      S.numQuestions = n;
      render();
    }

    function leaderboardRows() {
      const players = S.players || [];
      if (!players.length) return '<p class="qb-footnote">No players yet.</p>';
      return `<div class="qb-lb">${players
        .map(
          (p, i) => `
        <div class="qb-lb-row">
          <div class="qb-lb-rank">${i + 1}</div>
          <div class="qb-avatar">${escapeHtml((p.name || "?")[0].toUpperCase())}</div>
          <div class="qb-lb-name">${escapeHtml(p.name)}</div>
          <div class="qb-lb-score">${p.score}</div>
        </div>
      `,
        )
        .join("")}</div>`;
    }

    function leaderboardBlock(title) {
      return `<div class="qb-card"><label class="qb-label">${title}</label>${leaderboardRows()}</div>`;
    }

    function podiumBlock() {
      const players = S.players || [];
      if (players.length === 0) return "";
      const top3 = players.slice(0, 3);
      const medals = ["🥇", "🥈", "🥉"];
      const classes = ["gold", "silver", "bronze"];
      return `<div class="qb-podium">
        ${top3
          .map(
            (p, i) => `
          <div class="qb-pod ${classes[i]}">
            <div class="med">${medals[i]}</div>
            <div class="nm">${escapeHtml(p.name)}</div>
            <div class="sc">${p.score} pts</div>
          </div>
        `,
          )
          .join("")}
      </div>`;
    }

    const VIEWS = {
      landing() {
        return `
          <div class="qb-eyebrow"><span class="bolt">⚡</span> LIVE MULTIPLAYER TRIVIA</div>
          <h1 class="qb-logo">QUIZ<span>BOLT</span></h1>
          <p class="qb-sub">A fast trivia clash you can play right inside a Google Meet call. One person hosts and shares this page's link in the chat - everyone else joins from their own phone or laptop with a 4-letter code.</p>
          <div class="qb-card" style="display:flex;flex-direction:column;gap:12px;">
            <button class="qb-btn" onclick="goHostSetup()">Host a game</button>
            <button class="qb-btn secondary" onclick="goJoinForm()">Join a game</button>
          </div>
          <p class="qb-footnote">Room codes, names and scores are shared with everyone who opens this game link.</p>
        `;
      },
      hostSetup() {
        const opts = [5, 10, 15];
        return `
          <div class="qb-eyebrow"><span class="bolt">⚡</span> HOST SETUP</div>
          <h1 class="qb-logo">Set up the clash</h1>
          <div class="qb-card">
            <label class="qb-label">Number of questions</label>
            <div class="qb-row" style="margin-bottom:6px;">
              ${opts.map((n) => `<button class="qb-btn ${S.numQuestions === n ? "" : "ghost"}" onclick="setNumQuestions(${n})">${n}</button>`).join("")}
            </div>
            <p class="qb-footnote" style="margin:14px 0 18px;text-align:left;">Mixed categories - 15 seconds per question - players answer on their own device.</p>
            <button class="qb-btn" onclick="createRoom()">Create room</button>
            <div style="height:10px;"></div>
            <button class="qb-btn ghost" onclick="goLanding()">Back</button>
          </div>
        `;
      },
      hostLobby() {
        const players = S.players || [];
        const tiles = (S.code || "----")
          .split("")
          .map((ch) => `<div class="qb-tile">${ch}</div>`)
          .join("");
        return `
          <div class="qb-eyebrow"><span class="bolt">⚡</span> WAITING TO START</div>
          <h1 class="qb-logo">Room code</h1>
          <div class="qb-card" style="text-align:center;">
            <div class="qb-code-tiles">${tiles}</div>
            <p class="qb-sub" style="margin-top:10px;">Share this code in your Meet chat. Everyone opens this same game link and enters it to join.</p>
          </div>
          <div class="qb-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <label class="qb-label" style="margin:0;">Players joined</label>
              <span class="qb-count">${players.length}</span>
            </div>
            <div class="qb-players">
              ${
                players.length
                  ? players
                      .map(
                        (p) =>
                          `<div class="qb-chip"><div class="qb-avatar">${escapeHtml((p.name || "?")[0].toUpperCase())}</div>${escapeHtml(p.name)}</div>`,
                      )
                      .join("")
                  : '<span class="qb-footnote">Nobody has joined yet.</span>'
              }
            </div>
          </div>
          <button class="qb-btn" ${players.length === 0 ? "disabled" : ""} onclick="hostStart()">Start game</button>
          <button class="qb-btn ghost" onclick="goLanding()">Cancel</button>
        `;
      },
      hostQuestion() {
        const q = S.room.questions[S.room.qIndex];
        const total = S.room.questions.length;
        const answeredCount = S.room.answeredCount || 0;
        const playerCount = (S.players || []).length;
        const timer = getTimerUiState();
        return `
          <div class="qb-card">
            <div class="qb-qtop">
              <div>
                <div class="qb-qmeta">Question ${S.room.qIndex + 1} / ${total} - ${escapeHtml(q.cat)}</div>
              </div>
              <div class="qb-ring-wrap">
                <svg viewBox="0 0 64 64">
                  <circle class="qb-ring-track" cx="32" cy="32" r="26"></circle>
                  <circle id="qb-ring-bar" class="qb-ring-bar" cx="32" cy="32" r="26" stroke-dasharray="${timer.dash}" style="stroke:${timer.stroke};"></circle>
                </svg>
                <div class="qb-ring-num" id="qb-ring-num">${timer.secs}</div>
              </div>
            </div>
            <div class="qb-question">${escapeHtml(q.q)}</div>
            <div class="qb-opts">
              ${q.options
                .map(
                  (opt, i) => `
                <div class="qb-opt ${OPT_META[i].cls}">
                  <span class="glyph">${OPT_META[i].glyph}</span> ${escapeHtml(opt)}
                </div>
              `,
                )
                .join("")}
            </div>
            <div class="qb-status">${answeredCount} / ${playerCount} answered</div>
            <button class="qb-btn" onclick="hostReveal()">Reveal answer</button>
          </div>
        `;
      },
      hostReveal() {
        const q = S.room.questions[S.room.qIndex];
        const stats = S.room.revealStats || {
          answeredCount: 0,
          correctCount: 0,
          correctIdx: q.correct,
        };
        const total = S.room.questions.length;
        const isLast = S.room.qIndex + 1 >= total;
        return `
          <div class="qb-card">
            <div class="qb-qmeta" style="margin-bottom:10px;">Question ${S.room.qIndex + 1} / ${total} - ${escapeHtml(q.cat)}</div>
            <div class="qb-question">${escapeHtml(q.q)}</div>
            <div class="qb-opts">
              ${q.options
                .map(
                  (opt, i) => `
                <div class="qb-opt ${OPT_META[i].cls} ${i === stats.correctIdx ? "correct-flag" : "locked"}">
                  <span class="glyph">${OPT_META[i].glyph}</span> ${escapeHtml(opt)}
                </div>
              `,
                )
                .join("")}
            </div>
            <div class="qb-status">${stats.correctCount} / ${stats.answeredCount} got it right</div>
            <button class="qb-btn" onclick="hostNext()">${isLast ? "See final results" : "Next question"}</button>
          </div>
          ${leaderboardBlock("Standings")}
        `;
      },
      hostFinished() {
        return `
          <div class="qb-eyebrow"><span class="bolt">⚡</span> GAME OVER</div>
          <h1 class="qb-logo">Final results</h1>
          ${podiumBlock()}
          <div class="qb-card">${leaderboardRows()}</div>
          <button class="qb-btn" onclick="hostNewGame()">Host a new game</button>
        `;
      },
      joinForm() {
        return `
          <div class="qb-eyebrow"><span class="bolt">⚡</span> JOIN A GAME</div>
          <h1 class="qb-logo">Enter the clash</h1>
          <div class="qb-card">
            <div class="qb-field">
              <label class="qb-label">Your name</label>
              <input class="qb-input" id="qb-join-name" maxlength="20" placeholder="e.g. Priya" />
            </div>
            <div class="qb-field">
              <label class="qb-label">Room code</label>
              <input class="qb-input code" id="qb-join-code" maxlength="4" placeholder="ABCD" />
            </div>
            ${S.error ? `<div class="qb-error">${escapeHtml(S.error)}</div>` : ""}
            <button class="qb-btn" onclick="submitJoin()">Join</button>
            <div style="height:10px;"></div>
            <button class="qb-btn ghost" onclick="goLanding()">Back</button>
          </div>
        `;
      },
      playerLobby() {
        return `
          <div class="qb-eyebrow"><span class="bolt">⚡</span> YOU'RE IN</div>
          <h1 class="qb-logo">Hang tight, ${escapeHtml(S.playerName)}</h1>
          <div class="qb-card" style="text-align:center;">
            <p class="qb-sub">Waiting for the host to start the game...</p>
            <div class="qb-badge" style="margin-top:12px;">Room ${escapeHtml(S.code)}</div>
          </div>
          <div class="qb-card">
            <label class="qb-label">Players in this room</label>
            <div class="qb-players">
              ${(S.players || [])
                .map(
                  (p) =>
                    `<div class="qb-chip"><div class="qb-avatar">${escapeHtml((p.name || "?")[0].toUpperCase())}</div>${escapeHtml(p.name)}</div>`,
                )
                .join("")}
            </div>
          </div>
        `;
      },
      playerQuestion() {
        const q = S.room.questions[S.room.qIndex];
        const total = S.room.questions.length;
        const timer = getTimerUiState();
        return `
          <div class="qb-card">
            <div class="qb-qtop">
              <div class="qb-qmeta">Question ${S.room.qIndex + 1} / ${total}</div>
              <div class="qb-ring-wrap">
                <svg viewBox="0 0 64 64">
                  <circle class="qb-ring-track" cx="32" cy="32" r="26"></circle>
                  <circle id="qb-ring-bar" class="qb-ring-bar" cx="32" cy="32" r="26" stroke-dasharray="${timer.dash}" style="stroke:${timer.stroke};"></circle>
                </svg>
                <div class="qb-ring-num" id="qb-ring-num">${timer.secs}</div>
              </div>
            </div>
            <div class="qb-question">${escapeHtml(q.q)}</div>
            <div class="qb-opts">
              ${q.options
                .map(
                  (opt, i) => `
                <button class="qb-opt ${OPT_META[i].cls} ${S.answered ? "locked" : ""} ${S.chosenIdx === i ? "chosen" : ""}"
                  ${S.answered ? "disabled" : ""} onclick="playerAnswer(${i})">
                  <span class="glyph">${OPT_META[i].glyph}</span> ${escapeHtml(opt)}
                </button>
              `,
                )
                .join("")}
            </div>
            <div class="qb-status">${S.answered ? (S.chosenIdx === -1 ? "Time's up!" : "Locked in! Waiting for the host...") : "Tap your answer"}</div>
          </div>
        `;
      },
      playerReveal() {
        const q = S.room.questions[S.room.qIndex];
        const stats = S.room.revealStats || { correctIdx: q.correct };
        const me = (S.players || []).find((p) => p.id === S.playerId);
        const wasCorrect = S.chosenIdx === stats.correctIdx;
        return `
          <div class="qb-card">
            <div class="qb-reveal-banner ${wasCorrect ? "good" : "bad"}">
              ${S.chosenIdx === -1 ? "Time's up" : wasCorrect ? `Correct! +${me && me.lastPoints != null ? me.lastPoints : ""} pts` : "Not quite"}
            </div>
            <div class="qb-opts">
              ${q.options
                .map(
                  (opt, i) => `
                <div class="qb-opt ${OPT_META[i].cls} ${i === stats.correctIdx ? "correct-flag" : "locked"}">
                  <span class="glyph">${OPT_META[i].glyph}</span> ${escapeHtml(opt)}
                </div>
              `,
                )
                .join("")}
            </div>
            ${
              me
                ? `<div class="qb-status">Your score: <span style="color:var(--gold);font-family:'IBM Plex Mono',monospace;">${me.score}</span></div>`
                : ""
            }
          </div>
        `;
      },
      playerFinished() {
        const me = (S.players || []).find((p) => p.id === S.playerId);
        const rank = me
          ? S.players.findIndex((p) => p.id === S.playerId) + 1
          : null;
        return `
          <div class="qb-eyebrow"><span class="bolt">⚡</span> GAME OVER</div>
          <h1 class="qb-logo">Nice playing!</h1>
          ${podiumBlock()}
          ${
            me
              ? `<div class="qb-card" style="text-align:center;">You finished <b>#${rank}</b> with <span style="color:var(--gold);font-family:'IBM Plex Mono',monospace;">${me.score}</span> points.</div>`
              : ""
          }
          <div class="qb-card">${leaderboardRows()}</div>
          <button class="qb-btn ghost" onclick="goLanding()">Leave</button>
        `;
      },
    };

    function submitJoin() {
      const nameEl = document.getElementById("qb-join-name");
      const codeEl = document.getElementById("qb-join-code");
      const name = nameEl ? nameEl.value : "";
      const code = codeEl ? codeEl.value : "";
      joinRoom(name, code);
    }

    window.goLanding = goLanding;
    window.goHostSetup = goHostSetup;
    window.goJoinForm = goJoinForm;
    window.setNumQuestions = setNumQuestions;
    window.createRoom = createRoom;
    window.hostStart = hostStart;
    window.hostReveal = hostReveal;
    window.hostNext = hostNext;
    window.hostNewGame = hostNewGame;
    window.submitJoin = submitJoin;
    window.playerAnswer = playerAnswer;

    render();

    return () => {
      stopPolling();
      stopTimerLoop();
      delete window.goLanding;
      delete window.goHostSetup;
      delete window.goJoinForm;
      delete window.setNumQuestions;
      delete window.createRoom;
      delete window.hostStart;
      delete window.hostReveal;
      delete window.hostNext;
      delete window.hostNewGame;
      delete window.submitJoin;
      delete window.playerAnswer;
    };
  }, []);

  return (
    <>
      <Head>
        <title>QuizBolt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div id="qb-root">
        <div className="qb-wrap" id="qb-app" />
      </div>

      <style jsx global>{`
        :root {
          --ink: #14102b;
          --panel: #1e1840;
          --panel-light: #2a2358;
          --violet: #7c6cf0;
          --violet-deep: #5a4bc7;
          --gold: #ffc857;
          --coral: #ff5d6c;
          --mint: #4cd9c0;
          --mist: #b7b2d9;
          --white: #f5f3ff;
          --ring-track: #332b63;
        }
        * {
          box-sizing: border-box;
        }
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          margin: 0;
        }
        #qb-root {
          font-family: "Inter", sans-serif;
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(124, 108, 240, 0.25),
              transparent 45%
            ),
            radial-gradient(
              circle at 85% 85%,
              rgba(255, 93, 108, 0.18),
              transparent 45%
            ),
            var(--ink);
          color: var(--white);
          min-height: 100vh;
          padding: 28px 16px 40px;
          display: flex;
          justify-content: center;
          position: relative;
          overflow-x: hidden;
        }
        .qb-wrap {
          width: 100%;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .qb-eyebrow {
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mist);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .qb-eyebrow .bolt {
          color: var(--gold);
        }
        h1.qb-logo {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 40px;
          line-height: 1;
          margin: 0;
          letter-spacing: -0.01em;
        }
        h1.qb-logo span {
          color: var(--gold);
        }
        .qb-sub {
          color: var(--mist);
          font-size: 15px;
          line-height: 1.5;
          margin: 0;
        }
        .qb-card {
          background: var(--panel);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 26px;
          box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.6);
        }
        .qb-btn {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 16px;
          border: none;
          border-radius: 14px;
          padding: 16px 20px;
          cursor: pointer;
          transition:
            transform 0.12s ease,
            filter 0.12s ease;
          color: var(--ink);
          background: var(--gold);
          width: 100%;
        }
        .qb-btn:hover {
          filter: brightness(1.06);
          transform: translateY(-1px);
        }
        .qb-btn:active {
          transform: translateY(0);
        }
        .qb-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none;
          filter: none;
        }
        .qb-btn.secondary {
          background: var(--panel-light);
          color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .qb-btn.ghost {
          background: transparent;
          color: var(--mist);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .qb-row {
          display: flex;
          gap: 12px;
        }
        .qb-row > * {
          flex: 1;
        }
        .qb-input {
          font-family: "Inter", sans-serif;
          font-size: 16px;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: var(--ink);
          color: var(--white);
          width: 100%;
          outline: none;
        }
        .qb-input:focus {
          border-color: var(--violet);
        }
        .qb-input.code {
          font-family: "IBM Plex Mono", monospace;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-align: center;
          font-size: 22px;
        }
        label.qb-label {
          font-size: 12px;
          color: var(--mist);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
          display: block;
        }
        .qb-field {
          margin-bottom: 16px;
        }
        .qb-error {
          color: var(--coral);
          font-size: 14px;
          margin-top: 6px;
        }
        .qb-code-tiles {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin: 6px 0 4px;
        }
        .qb-tile {
          font-family: "IBM Plex Mono", monospace;
          font-weight: 600;
          font-size: 34px;
          width: 56px;
          height: 64px;
          background: var(--ink);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: qbFlip 0.5s ease both;
        }
        @keyframes qbFlip {
          from {
            transform: rotateX(90deg);
            opacity: 0;
          }
          to {
            transform: rotateX(0);
            opacity: 1;
          }
        }
        .qb-players {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }
        .qb-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--panel-light);
          border-radius: 999px;
          padding: 8px 14px 8px 8px;
          font-size: 14px;
        }
        .qb-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--violet);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 13px;
          flex-shrink: 0;
        }
        .qb-count {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          color: var(--gold);
        }
        .qb-qtop {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }
        .qb-qmeta {
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          color: var(--mist);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .qb-question {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 1.25;
          margin: 6px 0 22px;
        }
        .qb-ring-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
        }
        .qb-ring-wrap svg {
          transform: rotate(-90deg);
          width: 64px;
          height: 64px;
        }
        .qb-ring-track {
          fill: none;
          stroke: var(--ring-track);
          stroke-width: 6;
        }
        .qb-ring-bar {
          fill: none;
          stroke: var(--gold);
          stroke-width: 6;
          stroke-linecap: round;
          transition:
            stroke-dasharray 0.2s linear,
            stroke 0.2s linear;
        }
        .qb-ring-num {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 16px;
        }
        .qb-opts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .qb-opt {
          border-radius: 14px;
          padding: 16px 14px;
          text-align: left;
          border: 2px solid transparent;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          color: var(--ink);
          transition:
            transform 0.1s ease,
            filter 0.1s ease,
            opacity 0.1s ease;
        }
        .qb-opt:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }
        .qb-opt .glyph {
          font-size: 18px;
          line-height: 1;
          flex-shrink: 0;
        }
        .qb-opt.c0 {
          background: var(--coral);
        }
        .qb-opt.c1 {
          background: var(--violet);
          color: var(--white);
        }
        .qb-opt.c2 {
          background: var(--gold);
        }
        .qb-opt.c3 {
          background: var(--mint);
        }
        .qb-opt.locked {
          opacity: 0.45;
          cursor: default;
          transform: none;
          filter: none;
        }
        .qb-opt.chosen {
          border-color: var(--white);
        }
        .qb-opt.correct-flag {
          outline: 3px solid var(--white);
        }
        .qb-opt:disabled {
          cursor: default;
        }
        .qb-status {
          text-align: center;
          padding: 8px 0;
          color: var(--mist);
          font-size: 14px;
        }
        .qb-badge {
          display: inline-block;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12px;
          background: var(--panel-light);
          color: var(--mist);
          padding: 5px 10px;
          border-radius: 999px;
        }
        .qb-reveal-banner {
          text-align: center;
          padding: 18px;
          border-radius: 14px;
          margin-bottom: 16px;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          font-size: 20px;
        }
        .qb-reveal-banner.good {
          background: rgba(76, 217, 192, 0.15);
          color: var(--mint);
          border: 1px solid rgba(76, 217, 192, 0.35);
        }
        .qb-reveal-banner.bad {
          background: rgba(255, 93, 108, 0.12);
          color: var(--coral);
          border: 1px solid rgba(255, 93, 108, 0.3);
        }
        .qb-lb {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 6px;
        }
        .qb-lb-row {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--panel-light);
          padding: 10px 14px;
          border-radius: 12px;
        }
        .qb-lb-rank {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
          color: var(--mist);
          width: 22px;
        }
        .qb-lb-name {
          flex: 1;
          font-weight: 600;
        }
        .qb-lb-score {
          font-family: "IBM Plex Mono", monospace;
          color: var(--gold);
        }
        .qb-podium {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 10px;
          margin: 20px 0 8px;
        }
        .qb-pod {
          flex: 1;
          max-width: 140px;
          border-radius: 14px 14px 0 0;
          text-align: center;
          padding: 14px 8px 12px;
        }
        .qb-pod .med {
          font-size: 26px;
        }
        .qb-pod .nm {
          font-weight: 700;
          font-family: "Space Grotesk", sans-serif;
          margin: 4px 0 2px;
          font-size: 14px;
        }
        .qb-pod .sc {
          font-family: "IBM Plex Mono", monospace;
          font-size: 13px;
          color: var(--ink);
          opacity: 0.75;
        }
        .qb-pod.gold {
          background: var(--gold);
          height: 150px;
          order: 2;
        }
        .qb-pod.silver {
          background: #d9d6ee;
          height: 118px;
          order: 1;
        }
        .qb-pod.bronze {
          background: #e3a469;
          height: 96px;
          order: 3;
        }
        .qb-footnote {
          font-size: 12px;
          color: var(--mist);
          opacity: 0.7;
          text-align: center;
          line-height: 1.5;
        }
        @media (max-width: 420px) {
          .qb-question {
            font-size: 20px;
          }
          .qb-tile {
            width: 44px;
            height: 52px;
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}
