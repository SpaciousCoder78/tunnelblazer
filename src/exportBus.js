//Eventbus file

/*Somehow, I got errors whenever I tried to import vue but 
I think copilot was giving me suggestions from Vue 2 so it kept failing
so I asked it again and it told me use an npm package called mitt and it got working*/


//importing createEmitter
import createEmitter from 'mitt';

//creating event bus
export const EventBus = createEmitter();
