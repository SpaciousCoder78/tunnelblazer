import { ref, onMounted } from 'vue';
import { EventBus } from './exportBus';

export const activateSetup = ref(false);

onMounted(() => {
  EventBus.on('setup-clicked', () => {
    activateSetup.value = true;
  });
});

