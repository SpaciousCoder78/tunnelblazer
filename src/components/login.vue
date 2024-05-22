<template>
    <div>
    
    <!--Login container-->
    <div class="container my-5">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
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
        <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
      </div>
      <br><br>
      <!--Connect button-->
      <button type="submit" class="btn btn-primary" >Connect</button>
      <!--Setup button-->
      <button type="button" class="btn btn-primary">Setup</button>
      <br><br>
    </form>
      </div>
    </div>
    
  </div>
</template>

<style>

button{
  margin-right:16px
}
#loginbanner{
  padding: 10%;
}
#banner{
  padding:5%;
  font-family:Dancing Script;
}
</style>