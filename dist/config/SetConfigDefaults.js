import './const.js';
import './ConfigStore.js';
import { SetBackgroundColor } from './backgroundcolor/SetBackgroundColor.js';
import { SetBanner } from './banner/SetBanner.js';
import { SetBatchSize } from './batchsize/SetBatchSize.js';
import { SetSize } from './size/SetSize.js';
import { SetDefaultOrigin } from './defaultorigin/SetDefaultOrigin.js';
import { SetMaxTextures } from './maxtextures/SetMaxTextures.js';

function SetConfigDefaults() {
    SetBackgroundColor(0);
    SetBatchSize(4096);
    SetBanner('Phaser', '4.0.0', 'https://phaser4.io');
    SetMaxTextures(0);
    SetDefaultOrigin(0.5, 0.5);
    SetSize(800, 600, 1);
}

export { SetConfigDefaults };
