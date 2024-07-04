<!--
        File for setup component
-->
<template>
    <div id="setupanel">
        <form>
            <h2 id="setupbanner">Setup</h2>
            <!--Host Address-->
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                    <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </span>
                <input type="text" class="form-control" v-model="ip" placeholder="Host Address" aria-label="Host Address" aria-describedby="basic-addon1">
            </div>
            <!--Port-->
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ethernet" viewBox="0 0 16 16">
                    <path d="M14 13.5v-7a.5.5 0 0 0-.5-.5H12V4.5a.5.5 0 0 0-.5-.5h-1v-.5A.5.5 0 0 0 10 3H6a.5.5 0 0 0-.5.5V4h-1a.5.5 0 0 0-.5.5V6H2.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5M3.75 11h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25m2 0h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25m1.75.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zM9.75 11h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25m1.75.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
                    </svg>
                </span>
                <input type="text" class="form-control" v-model="port" placeholder="Port" aria-label="Port" aria-describedby="basic-addon1">
            </div>
            <!--Time out-->
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                    </svg>
                </span>
                <input type="text" class="form-control" v-model="timeout" placeholder="Timeout (Optional)" aria-label="Timeout(Optional)" aria-describedby="basic-addon1">
            </div>
            <!--Log File Path-->
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-txt" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-2v-1h2a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.928 15.849v-3.337h1.136v-.662H0v.662h1.134v3.337zm4.689-3.999h-.894L4.9 13.289h-.035l-.832-1.439h-.932l1.228 1.983-1.24 2.016h.862l.853-1.415h.035l.85 1.415h.907l-1.253-1.992zm1.93.662v3.337h-.794v-3.337H6.619v-.662h3.064v.662H8.546Z"/>
                </svg>
            </span>
                <input type="text" class="form-control" v-model="logpath" placeholder="Log File Path (Optional)" aria-label="Log File Path" aria-describedby="basic-addon1">
            </div>
            <br>

            <!--Save Configuration button-->
            <button type="submit" class="btn btn-dark" @click.prevent="saveData" >Save Configuration</button>
            <br><br>

        </form>
    </div>
</template>

<!-------------------------------------------JavaScript Area------------------------------>
<script>
    import { reactive, provide, ref } from 'vue';
    import fs from 'fs';

export default {
  setup() {
    const ip = ref('');
    const port = ref('');
    const timeout = ref('');
    const logpath = ref('');

    const data = reactive({
      ip: ip.value,
      port: port.value,
      timeout: timeout.value,
      logpath: logpath.value
    });

    console.log(data);
    provide('configData',data);

    const saveData = () => {
      data.ip = ip.value;
      data.port = port.value;
      data.timeout = timeout.value;
      data.logpath = logpath.value;
      console.log(data);
    
      

      /* use this later
      fs.writeFileSync('data.json', JSON.stringify(data));
      */

      /*

      ######################Code for client side###################
      
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href",     dataStr);
      downloadAnchorNode.setAttribute("download", "data.json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();*/
    };

    return { ip, port, timeout, logpath, saveData };
  }
};

</script>


<!---------------------------------------------CSS Area------------------------------------->
<style>
#setupbanner{
    padding: 10%;
}
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
#setuppanel {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-direction: column;
}
</style>