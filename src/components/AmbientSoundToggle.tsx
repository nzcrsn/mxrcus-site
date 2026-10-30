"use client";

import { useEffect, useRef, useState } from "react";

type SoundGraph = { context: AudioContext; master: GainNode; oscillators: OscillatorNode[] };

export function AmbientSoundToggle() {
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const graphRef = useRef<SoundGraph | null>(null);
  const stopTimerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (stopTimerRef.current !== null) window.clearTimeout(stopTimerRef.current);
    const graph = graphRef.current;
    if (graph) {
      graph.oscillators.forEach((oscillator) => { try { oscillator.stop(); } catch {} });
      void graph.context.close();
    }
  }, []);

  const toggleSound = async () => {
    if (playing && graphRef.current) {
      const graph = graphRef.current;
      graph.master.gain.cancelScheduledValues(graph.context.currentTime);
      graph.master.gain.setTargetAtTime(0, graph.context.currentTime, 0.12);
      setPlaying(false);
      stopTimerRef.current = window.setTimeout(() => {
        graph.oscillators.forEach((oscillator) => { try { oscillator.stop(); } catch {} });
        void graph.context.close();
        if (graphRef.current === graph) graphRef.current = null;
      }, 450);
      return;
    }
    try {
      if (stopTimerRef.current !== null) window.clearTimeout(stopTimerRef.current);
      const previous = graphRef.current;
      if (previous) {
        previous.oscillators.forEach((oscillator) => { try { oscillator.stop(); } catch {} });
        await previous.context.close();
        graphRef.current = null;
      }
      const context = new window.AudioContext();
      const master = context.createGain();
      const filter = context.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1800;
      master.gain.value = 0;
      filter.connect(master);
      master.connect(context.destination);
      const oscillators: OscillatorNode[] = [];
      [{ frequency: 130.81, volume: 0.32 }, { frequency: 196, volume: 0.22 }, { frequency: 261.63, volume: 0.12 }, { frequency: 329.63, volume: 0.06 }].forEach(({ frequency, volume }) => {
        const oscillator = context.createOscillator();
        const voiceGain = context.createGain();
        oscillator.type = frequency === 130.81 ? "triangle" : "sine";
        oscillator.frequency.value = frequency;
        voiceGain.gain.value = volume;
        oscillator.connect(voiceGain);
        voiceGain.connect(filter);
        oscillator.start();
        oscillators.push(oscillator);
      });
      master.gain.setTargetAtTime(0.55, context.currentTime, 0.25);
      await context.resume();
      graphRef.current = { context, master, oscillators };
      setUnavailable(false);
      setPlaying(true);
    } catch {
      setUnavailable(true);
      setPlaying(false);
    }
  };

  return <div className="ambient-sound-control">
    <button type="button" onClick={toggleSound} aria-pressed={playing} aria-label={playing ? "Detener atmósfera sonora" : "Reproducir atmósfera sonora"} className="ambient-sound-button">
      <span className={"ambient-sound-indicator" + (playing ? " is-playing" : "")} aria-hidden="true"><span /><span /><span /><span /></span>
      <span>{playing ? "Sonido activo" : "Activar sonido"}</span>
      <span className="ambient-sound-state" aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
    </button>
    <span className="ambient-sound-caption">{unavailable ? "El sonido no está disponible en este navegador" : "MUESTRA SONORA · ACTIVAR / DETENER"}</span>
  </div>;
}
