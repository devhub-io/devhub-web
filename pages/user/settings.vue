<template>
  <section id="content">
    <div class="single-product-area">
      <div class="container">
        <h1>Account Settings</h1>
        <div class="row">
          <div class="col-md-8 card card-body">
            <h2>Emails</h2>
            <p><input type="text" class="form-control" placeholder="email"></p>
            <button type="button" class="btn btn-primary btn-sm button-delete">Update Email Preferences</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 card card-body">
            <h2>Accounts</h2>
            <p>Connected Accounts</p>
            <button type="button" class="btn btn-primary btn-sm button-delete"><i class="fab fa-github"/> Username</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 card card-body">
            <h2>Account deletion</h2>
            <p>Delete your account and all related private data</p>
            <button type="button" class="btn btn-danger btn-sm button-delete">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  h1 {
    font-size: 1.8rem;
    margin-bottom: 0;
  }
  h2 {
    font-size: 1.3rem;
    margin-bottom: 0;
  }
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
  p {
    line-height: 1.5rem;
  }
  .button-delete {
    color: #fff;
    height: 2rem;
    line-height: 2rem;
    padding: 0;
    font-size: 1rem;
    width: 180px;
  }
</style>
