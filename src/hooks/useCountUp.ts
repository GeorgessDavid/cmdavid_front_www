'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseCountUpOptions {
    /** Raw value string from the API, e.g. "1500", "24+", "2.5k" */
    value: string;
    duration?: number; // ms
}

interface CountUpResult {
    display: string;
    ref: React.RefObject<HTMLSpanElement | null>;
}

function parseValue(raw: string): { number: number; suffix: string } {
    const cleaned = raw.trim();
    // Extract trailing non-numeric suffix (e.g. "+", "k", "k+")
    const match = cleaned.match(/^([\d.,]+)([^\d]*)$/);
    if (!match) return { number: 0, suffix: cleaned };
    const num = parseFloat(match[1].replace(',', '.'));
    const suffix = match[2] ?? '';
    return { number: isNaN(num) ? 0 : num, suffix };
}

function formatNumber(value: number, isDecimal: boolean): string {
    if (isDecimal) return value.toFixed(1);
    return Math.round(value).toString();
}

export function useCountUp({ value, duration = 1800 }: UseCountUpOptions): CountUpResult {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        if (!isInView) return;

        const { number: target, suffix } = parseValue(value);
        const isDecimal = !Number.isInteger(target);
        const startTime = performance.now();

        // ease-out-expo
        const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

        let raf: number;
        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = target * ease(progress);
            setDisplay(formatNumber(current, isDecimal) + suffix);
            if (progress < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [isInView, value, duration]);

    return { display, ref };
}
