<template>
  <div>
    <main>
      <div class="row">
        <div class="colm-logo">
          <img src="@/assets/img/logo.svg" alt="Logo" id="loginLogo" height="100px" />
        </div>
        <div class="colm-form">
          <form action="">
            <div class="form-container">
              <input type="text" placeholder="E-Posta" />
              <input type="password" placeholder="Şifre" />
              <button class="btn-login">Giriş Yap</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #e6e6e6;
  color: #1c1e21;
}

main {
  height: 90vh;
  width: 100vw;
  position: relative;
  margin: 0 auto;
}

.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.colm-logo {
  text-align: center;
  margin-bottom: 25px;
}

.colm-form {
  flex: 0 0 40%;
  text-align: center;
}

.colm-logo img {
  max-width: 400px;
}

.colm-logo h2 {
  font: 26px;
  font-weight: 400;
  padding: 0 30px;
  line-height: 32px;
}

.colm-form .form-container {
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding: 20px;
  max-width: 400px;
}

.colm-form .form-container input,
.colm-form .form-container .btn-login {
  width: 100%;
  margin: 5px 0;
  height: 45px;
  vertical-align: middle;
  font-size: 14px;
  border-radius: 5px;
}

.colm-form .form-container input {
  border: 1px solid #dddfe2;
  color: #1d2129;
  padding: 0 8px;
  outline: none;
}

.colm-form .form-container input:focus {
  border: 0.1px solid #8cbeff;
}

.colm-form .form-container .btn-login {
  background-color: #1877f2;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 0 16px;
  color: #ffffff;
  font-weight: 500;
}
.colm-form .form-container .btn-login:hover {
  background-color: #0154c2;
}

.colm-form .form-container a {
  display: block;
  color: #1877f2;
  font-size: 14px;
  text-decoration: none;
  padding: 10px 0 20px;
  border-bottom: 1px solid #dadde1;
}

.colm-form .form-container a:hover {
  text-decoration: underline;
}

.colm-form .form-container .btn-new {
  background-color: #42b72a;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  line-height: 48px;
  padding: 0 16px;
  color: #ffffff;
  font-weight: 500;
  margin-top: 20px;
}
.colm-form .form-container .btn-new:hover {
  background-color: #1ba100;
}

.colm-form p {
  font-size: 14px;
}

.colm-form p a {
  text-decoration: none;
  color: #1c1e21;
  font-weight: 600;
}

.colm-form p a:hover {
  text-decoration: underline;
}

.footer-contents {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

footer ol {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 10px 0;
}

footer ol:first-child {
  border-bottom: 1px solid #dddfe2;
}

footer ol:first-child li:last-child button {
  background-color: #f5f6f7;
  border: 1px solid #ccd0d5;
  outline: none;
  color: #4b4f56;
  padding: 0 8px;
  font-weight: 700;
  font-size: 16px;
}

footer ol li {
  padding-right: 15px;
  font-size: 12px;
  color: #385898;
}

footer ol li a {
  text-decoration: none;
  color: #385898;
}

footer ol li a:hover {
  text-decoration: underline;
}

footer small {
  font-size: 11px;
}
</style>
