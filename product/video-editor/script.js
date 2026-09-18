(() => {
  'use strict';

  // ---------- State ----------
  let captions = []; // { id, start, end, text }
  let nextId = 1;

  // ---------- DOM ----------
  const videoInput = document.getElementById('videoInput');
  const videoPreview = document.getElementById('videoPreview');
  const captionOverlay = document.getElementById('captionOverlay');
  const videoFilter = document.getElementById('videoFilter');

  const capText = document.getElementById('capText');
  const capStart = document.getElementById('capStart');
  const capEnd = document.getElementById('capEnd');
  const addCaptionBtn = document.getElementById('addCaption');
  const captionRows = document.getElementById('captionRows');
  const clearCaptionsBtn = document.getElementById('clearCaptions');
  const srtInput = document.getElementById('srtInput');
  const exportSrtBtn = document.getElementById('exportSrt');

  const ttsText = document.getElementById('ttsText');
  const ttsVoice = document.getElementById('ttsVoice');
  const ttsRate = document.getElementById('ttsRate');
  const ttsRateVal = document.getElementById('ttsRateVal');
  const ttsPitch = document.getElementById('ttsPitch');
  const ttsPitchVal = document.getElementById('ttsPitchVal');
  const ttsPlayBtn = document.getElementById('ttsPlay');
  const ttsPauseBtn = document.getElementById('ttsPause');
  const ttsStopBtn = document.getElementById('ttsStop');
  const ttsToCaptionsBtn = document.getElementById('ttsToCaptions');
  const ttsStatus = document.getElementById('ttsStatus');

  const musicInput = document.getElementById('musicInput');
  const musicVolume = document.getElementById('musicVolume');
  const musicVolVal = document.getElementById('musicVolVal');
  const musicLoop = document.getElementById('musicLoop');
  const fxEcho = document.getElementById('fxEcho');
  const fxMuffle = document.getElementById('fxMuffle');
  const musicPlayBtn = document.getElementById('musicPlay');
  const musicStopBtn = document.getElementById('musicStop');

  const startExportBtn = document.getElementById('startExport');
  const stopExportBtn = document.getElementById('stopExport');
  const exportStatus = document.getElementById('exportStatus');
  const downloadLink = document.getElementById('downloadLink');

  // ---------- Utils ----------
  function fmtTime(s) {
    if (!isFinite(s)) return '0.0';
    return (Math.round(s * 10) / 10).toString();
  }

  function secondsToSrt(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    const ms = Math.round((sec - Math.floor(sec)) * 1000);
    const pad = (n, len = 2) => String(n).padStart(len, '0');
    return `${pad(h)}:${pad(m)}:${pad(s)},${pad(ms, 3)}`;
  }

  function srtToSeconds(str) {
    const m = str.match(/(\d+):(\d+):(\d+)[,.](\d+)/);
    if (!m) return 0;
    return (+m[1]) * 3600 + (+m[2]) * 60 + (+m[3]) + (+m[4]) / 1000;
  }

  // ---------- Video ----------
  videoInput.addEventListener('change', () => {
    const file = videoInput.files[0];
    if (!file) return;
    videoPreview.src = URL.createObjectURL(file);
  });

  videoFilter.addEventListener('change', () => {
    videoPreview.style.filter = videoFilter.value === 'none' ? '' : videoFilter.value;
  });

  videoPreview.addEventListener('timeupdate', () => {
    const t = videoPreview.currentTime;
    const active = captions.find(c => t >= c.start && t <= c.end);
    captionOverlay.innerHTML = active ? `<span>${escapeHtml(active.text)}</span>` : '';
  });

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- Captions ----------
  function renderCaptions() {
    captions.sort((a, b) => a.start - b.start);
    captionRows.innerHTML = captions.map(c => `
      <tr data-id="${c.id}">
        <td>${fmtTime(c.start)}s</td>
        <td>${fmtTime(c.end)}s</td>
        <td>${escapeHtml(c.text)}</td>
        <td><button data-action="del">remover</button></td>
      </tr>
    `).join('');
  }

  captionRows.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action="del"]');
    if (!btn) return;
    const id = Number(btn.closest('tr').dataset.id);
    captions = captions.filter(c => c.id !== id);
    renderCaptions();
  });

  addCaptionBtn.addEventListener('click', () => {
    const text = capText.value.trim();
    const start = parseFloat(capStart.value);
    const end = parseFloat(capEnd.value);
    if (!text || isNaN(start) || isNaN(end) || end <= start) {
      alert('Preencha o texto e os tempos corretamente (fim precisa ser maior que início).');
      return;
    }
    captions.push({ id: nextId++, start, end, text });
    renderCaptions();
    capText.value = '';
    capStart.value = '';
    capEnd.value = '';
  });

  clearCaptionsBtn.addEventListener('click', () => {
    if (captions.length && !confirm('Remover todas as legendas?')) return;
    captions = [];
    renderCaptions();
  });

  exportSrtBtn.addEventListener('click', () => {
    if (!captions.length) {
      alert('Não há legendas para exportar.');
      return;
    }
    const sorted = [...captions].sort((a, b) => a.start - b.start);
    const srt = sorted.map((c, i) =>
      `${i + 1}\n${secondsToSrt(c.start)} --> ${secondsToSrt(c.end)}\n${c.text}\n`
    ).join('\n');
    downloadBlob(new Blob([srt], { type: 'text/plain' }), 'legendas.srt');
  });

  srtInput.addEventListener('change', () => {
    const file = srtInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const blocks = reader.result.split(/\r?\n\r?\n/).filter(b => b.trim());
      const imported = [];
      for (const block of blocks) {
        const lines = block.split(/\r?\n/).filter(l => l.trim());
        const timeLine = lines.find(l => l.includes('-->'));
        if (!timeLine) continue;
        const [startStr, endStr] = timeLine.split('-->');
        const textLines = lines.slice(lines.indexOf(timeLine) + 1);
        imported.push({
          id: nextId++,
          start: srtToSeconds(startStr),
          end: srtToSeconds(endStr),
          text: textLines.join(' ').trim(),
        });
      }
      captions = captions.concat(imported);
      renderCaptions();
      srtInput.value = '';
    };
    reader.readAsText(file);
  });

  // ---------- Text-to-speech ----------
  let voices = [];
  function loadVoices() {
    voices = speechSynthesis.getVoices();
    const ptVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('pt'));
    const list = ptVoices.length ? ptVoices.concat(voices.filter(v => !ptVoices.includes(v))) : voices;
    ttsVoice.innerHTML = list.map((v, i) =>
      `<option value="${voices.indexOf(v)}">${v.name} (${v.lang})</option>`
    ).join('');
  }
  loadVoices();
  if ('onvoiceschanged' in speechSynthesis) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  ttsRate.addEventListener('input', () => ttsRateVal.textContent = `${ttsRate.value}x`);
  ttsPitch.addEventListener('input', () => ttsPitchVal.textContent = ttsPitch.value);

  function splitIntoChunks(text) {
    const sentences = text
      .replace(/\s+/g, ' ')
      .trim()
      .split(/(?<=[.!?;])\s+/);
    const chunks = [];
    let current = '';
    for (const sentence of sentences) {
      if ((current + ' ' + sentence).trim().length > 200 && current) {
        chunks.push(current.trim());
        current = sentence;
      } else {
        current = (current + ' ' + sentence).trim();
      }
    }
    if (current.trim()) chunks.push(current.trim());
    return chunks.filter(Boolean);
  }

  let ttsQueue = [];
  let ttsPlaying = false;

  function speakQueue() {
    if (!ttsQueue.length) {
      ttsPlaying = false;
      ttsStatus.textContent = 'Narração concluída.';
      return;
    }
    const chunk = ttsQueue.shift();
    const utter = new SpeechSynthesisUtterance(chunk);
    const selectedVoice = voices[Number(ttsVoice.value)];
    if (selectedVoice) utter.voice = selectedVoice;
    utter.rate = parseFloat(ttsRate.value);
    utter.pitch = parseFloat(ttsPitch.value);
    utter.onend = () => { if (ttsPlaying) speakQueue(); };
    utter.onerror = () => { if (ttsPlaying) speakQueue(); };
    ttsStatus.textContent = `Narrando: "${chunk.slice(0, 60)}${chunk.length > 60 ? '…' : ''}"`;
    speechSynthesis.speak(utter);
  }

  ttsPlayBtn.addEventListener('click', () => {
    const text = ttsText.value.trim();
    if (!text) { alert('Cole um texto para narrar.'); return; }
    speechSynthesis.cancel();
    ttsQueue = splitIntoChunks(text);
    ttsPlaying = true;
    speakQueue();
  });

  ttsPauseBtn.addEventListener('click', () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      ttsStatus.textContent = 'Narração pausada.';
    } else if (speechSynthesis.paused) {
      speechSynthesis.resume();
    }
  });

  ttsStopBtn.addEventListener('click', () => {
    ttsPlaying = false;
    ttsQueue = [];
    speechSynthesis.cancel();
    ttsStatus.textContent = 'Narração interrompida.';
  });

  ttsToCaptionsBtn.addEventListener('click', () => {
    const text = ttsText.value.trim();
    if (!text) { alert('Cole um texto primeiro.'); return; }
    const chunks = splitIntoChunks(text);
    const rate = parseFloat(ttsRate.value) || 1;
    const wordsPerMinute = 150 * rate;
    let cursor = videoPreview.currentTime || 0;
    for (const chunk of chunks) {
      const wordCount = chunk.split(/\s+/).filter(Boolean).length;
      const duration = Math.max(1.2, (wordCount / wordsPerMinute) * 60);
      captions.push({ id: nextId++, start: cursor, end: cursor + duration, text: chunk });
      cursor += duration;
    }
    renderCaptions();
    ttsStatus.textContent = `${chunks.length} legenda(s) gerada(s) a partir do texto (tempos estimados).`;
  });

  // ---------- Music + audio effects ----------
  let audioCtx = null;
  let musicEl = null;
  let musicSource = null;
  let musicGain = null;
  let musicDelay = null;
  let musicDelayFeedback = null;
  let musicFilter = null;

  function ensureAudioGraph() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    musicSource = audioCtx.createMediaElementSource(musicEl);
    musicGain = audioCtx.createGain();
    musicFilter = audioCtx.createBiquadFilter();
    musicFilter.type = 'lowpass';
    musicFilter.frequency.value = 22000; // effectively off by default
    musicDelay = audioCtx.createDelay();
    musicDelay.delayTime.value = 0.25;
    musicDelayFeedback = audioCtx.createGain();
    musicDelayFeedback.gain.value = 0.0; // off by default

    musicSource.connect(musicFilter);
    musicFilter.connect(musicGain);
    musicGain.connect(audioCtx.destination);

    // echo send/return loop
    musicGain.connect(musicDelay);
    musicDelay.connect(musicDelayFeedback);
    musicDelayFeedback.connect(musicDelay);
    musicDelayFeedback.connect(audioCtx.destination);
  }

  musicInput.addEventListener('change', () => {
    const file = musicInput.files[0];
    if (!file) return;
    if (!musicEl) {
      musicEl = new Audio();
      musicEl.crossOrigin = 'anonymous';
    }
    musicEl.src = URL.createObjectURL(file);
    musicEl.loop = musicLoop.checked;
    musicEl.volume = 1; // volume controlled via gain node once graph exists
    ensureAudioGraph();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  });

  musicVolume.addEventListener('input', () => {
    musicVolVal.textContent = `${Math.round(musicVolume.value * 100)}%`;
    if (musicGain) musicGain.gain.value = parseFloat(musicVolume.value);
    else if (musicEl) musicEl.volume = parseFloat(musicVolume.value);
  });

  musicLoop.addEventListener('change', () => {
    if (musicEl) musicEl.loop = musicLoop.checked;
  });

  fxEcho.addEventListener('change', () => {
    if (musicDelayFeedback) musicDelayFeedback.gain.value = fxEcho.checked ? 0.45 : 0.0;
  });

  fxMuffle.addEventListener('change', () => {
    if (musicFilter) musicFilter.frequency.value = fxMuffle.checked ? 600 : 22000;
  });

  musicPlayBtn.addEventListener('click', () => {
    if (!musicEl) { alert('Carregue um arquivo de música primeiro.'); return; }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    musicEl.play();
  });

  musicStopBtn.addEventListener('click', () => {
    if (!musicEl) return;
    musicEl.pause();
    musicEl.currentTime = 0;
  });

  // ---------- Export (tab capture + MediaRecorder) ----------
  let recorder = null;
  let recordedChunks = [];
  let captureStream = null;

  startExportBtn.addEventListener('click', async () => {
    if (!videoPreview.src) {
      alert('Carregue um vídeo primeiro.');
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      alert('Seu navegador não suporta gravação de tela. Use Chrome ou Edge atualizados.');
      return;
    }

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
        preferCurrentTab: true,
        selfBrowserSurface: 'include',
      });
    } catch (err) {
      exportStatus.textContent = 'Permissão de gravação negada ou cancelada.';
      return;
    }

    recordedChunks = [];
    const mimeCandidates = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'];
    const mimeType = mimeCandidates.find(t => MediaRecorder.isTypeSupported(t)) || '';

    recorder = new MediaRecorder(captureStream, mimeType ? { mimeType } : undefined);
    recorder.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.style.display = 'block';
      exportStatus.textContent = 'Gravação concluída! Baixe o vídeo abaixo.';
      captureStream.getTracks().forEach(t => t.stop());
      startExportBtn.disabled = false;
      stopExportBtn.disabled = true;
    };

    // Stop everything automatically if the user ends screen share from the browser UI
    captureStream.getVideoTracks()[0].addEventListener('ended', () => {
      if (recorder && recorder.state !== 'inactive') recorder.stop();
      videoPreview.pause();
    });

    videoPreview.currentTime = 0;
    if (musicEl) {
      musicEl.currentTime = 0;
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      musicEl.play();
    }

    recorder.start();
    exportStatus.textContent = 'Gravando... o vídeo vai tocar do início até o fim.';
    startExportBtn.disabled = true;
    stopExportBtn.disabled = false;
    downloadLink.style.display = 'none';

    videoPreview.play();

    const onEnded = () => {
      videoPreview.removeEventListener('ended', onEnded);
      if (recorder && recorder.state !== 'inactive') recorder.stop();
      if (musicEl) musicEl.pause();
    };
    videoPreview.addEventListener('ended', onEnded);
  });

  stopExportBtn.addEventListener('click', () => {
    if (recorder && recorder.state !== 'inactive') recorder.stop();
    videoPreview.pause();
    if (musicEl) musicEl.pause();
  });

})();
