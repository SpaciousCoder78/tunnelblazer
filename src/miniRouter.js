//small mini router to handle login and setup components

//importing components
import login from "./components/login.vue";
import setup from "./components/setup.vue";
import { EventBus } from "./exportBus";

export default{
    //registering the components
    components: {
        login,
        setup
    },
    //data function
    data(){
        return{
            activateSetup: false
        }
    },
    //defining methods
    created(){
        //enabling setup component
        EventBus.$on('setup-clicked', () => {
            this.activateSetup = true;
        });
    }
}