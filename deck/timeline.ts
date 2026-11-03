import type { Position, TimelineHost } from 'beatdeck';

/** Automatic sub-state. Deterministic from Position alone. */
export interface Live {
  ready: boolean;
}

export function initialLive(_pos: Position): Live {
  return { ready: true };
}

export function timeline(_pos: Position, _host: TimelineHost<Live>) {
  // All beats in this talk are speaker-driven (1 click = 1 beat) for maximum stage control.
}
