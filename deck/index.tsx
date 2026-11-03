import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import './deck.css';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { initialLive, timeline, type Live } from './timeline';
import { Intro } from './scenes/01-Intro';
import { Mcp } from './scenes/02-Mcp';
import { Compare } from './scenes/03-Compare';
import { Demos } from './scenes/04-Demos';
import { Close } from './scenes/05-Close';

/** Every layer of the stage, back to front. All stay mounted; each shows itself for its own scene. */
function Stage() {
  return (
    <>
      <Intro />
      <Mcp />
      <Compare />
      <Demos />
      <Close />
    </>
  );
}

export default defineDeck<Live>({
  id: 'devfest-santiago-devtools-mcp',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  initialLive,
  timeline,
  fonts: [
    '400 100px "Inter Variable"',
    '600 100px "Inter Variable"',
    '400 32px "JetBrains Mono Variable"',
  ],
  qrUrl: config.qrUrl,
});
