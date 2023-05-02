import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   
import FocusTrap from 'primevue/focustrap';
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import Chip from 'primevue/chip';



export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('ToastService', ToastService);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('AvatarGroup', AvatarGroup);
    nuxtApp.vueApp.component('FocusTrap', FocusTrap);
    nuxtApp.vueApp.component('Checkbox', Checkbox);
    nuxtApp.vueApp.component('Password', Password);
    nuxtApp.vueApp.component('Chip', Chip);
  })