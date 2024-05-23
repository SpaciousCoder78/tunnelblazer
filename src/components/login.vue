

<!--Login component-->
<template>
    <div>
    
    <!--Login container-->
    <form >
      <!--login banner-->
      <h2 id="loginbanner">Login</h2>
      <!--User id field-->
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <!--Password field-->
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>
        </span>
        <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
      </div>
      <br><br>
      <!--Connect button-->
      <button type="submit" class="btn btn-dark" >Connect</button>
      <!--Setup button was moved from here to the app.vue 
      to make my minirouter actually work-->
      <br><br>
    </form>
      </div>

</template>

<script>
  import { EventBus } from '../exportBus';
  import { activateSetup } from '../miniRouter';
  import {inject} from 'vue';

  export default{
    setup(){
      const data = inject('configData');
      return {data};
    },
    methods:{
      setupClicked(){
        console.log(data);
        EventBus.emit('setup-clicked');
      }
    }
  }

</script>

<style>

button{
  margin:auto
}
#loginbanner{
  padding: 10%;
}
#banner{
  padding:5%;
  font-family:Dancing Script;
}
</style>