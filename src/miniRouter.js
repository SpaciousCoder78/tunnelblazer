//minirouter for routing between login and setup components

//importing stuff
import { ref, onMounted } from 'vue';
import { EventBus } from './exportBus';

//making activate setup as false by default to make login appear
export const activateSetup = ref(false);


//turning the activatesetup to true to make login disappear
onMounted(() => {
  EventBus.on('setup-clicked', () => {
    activateSetup= true;
  });
});

