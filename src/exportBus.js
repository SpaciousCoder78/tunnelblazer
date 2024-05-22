import * as Vue from 'vue';
import createEmitter from 'mitt';
//export const EventBus = new Vue();
export const EventBus = createEmitter();
