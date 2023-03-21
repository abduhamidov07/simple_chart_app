<template>
  <div id="app">
    <div class="center">
      <div class="form">
        <h1>Sign Up Now!</h1>
        <form>
          <div class="inputbox">
            <input v-model="firstName" type="text" required />
            <span>Firstname</span>
          </div>
          <div class="inputbox">
            <input v-model="firstname" type="text" required />
            <span>Lastname</span>
          </div>
          <div class="inputbox">
            <input v-model="email" type="text" required />
            <span>Email</span>
          </div>
          <div class="inputbox">
            <input :type="passwordFieldTypeF" v-model="password" required />
            <span>Password</span>
            <button type="button" @click="switchF">
              <span v-if="showPassF">
                <i class="fa-regular fa-eye-slash"></i>
              </span>
              <span v-else>
                <i class="fa-regular fa-eye"></i>
              </span>
            </button>
          </div>
          <div class="inputbox">
            <input :type="passwordFieldTypeL" v-model="cPassword" required />
            <span>Confirm password</span>
            <button type="button" @click="switchL">
              <span v-if="showPassL">
                <i class="fa-regular fa-eye-slash"></i>
              </span>
              <span v-else>
                <i class="fa-regular fa-eye"></i>
              </span>
            </button>
          </div>
          <button type="submit" @click.prevent="login" class="submit-btn">
            submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
  import Swal from 'sweetalert2';
  
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      showPass: true,
      email: "",
      password: "",
      cPassword: "",
      passwordFieldTypeF: "password",
      passwordFieldTypeL: "password",
      // email: `${this.firstName}${this.lastName}@gmail.com`,
    };
  },
  methods: {
    login() {
      if (this.firstName != this.lastName && this.password == this.cPassword && this.email.replace(/@/, '').length != this.email.length) {
        localStorage.setItem("isLoggedIn", true);
        this.$router.push("/");
      } else {

      }
    },
    switchF() {
      (this.passwordFieldTypeF =
        this.passwordFieldTypeF === "password" ? "text" : "password"),
        (this.showPassF = !this.showPassF);
    },
    switchL() {
      (this.passwordFieldTypeL =
        this.passwordFieldTypeL === "password" ? "text" : "password"),
        (this.showPassL = !this.showPassL);
    },
  },
};
</script>

<!-- style sheet -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cuprum:wght@400;700&display=swap");

body {
  margin: 0;
  padding: 0;
}

.center {
  display: grid;
  place-items: center;
  height: 100vh;
  font-family: "Cuprum", sans-serif;
  /* background-color: #8BC6EC; */
/* background-image: linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% ); */
background-image: linear-gradient( 96.5deg,  rgba(39,103,187,1) 10.4%, rgba(16,72,144,1) 87.7% );
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 50px;
  backdrop-filter: blur(4px);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  box-shadow: 20px 20px 120px #000;
  border-radius: 10px;
  color: #fff;
}

.form form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.form h1 {
  font-size: 2.5rem;
  border-left: 5px solid dodgerblue;
  padding: 10px;
  color: #fff;
  letter-spacing: 5px;
  margin-bottom: 30px;
  font-weight: bold;
}

.form .inputbox {
  position: relative;
  width: 300px;
  height: 50px;
}

.form .inputbox button {
  position: absolute;
  right: 45px;
  margin-top: 4px;
  color: #fff;
  border: none;
  background: transparent;
}

.form input {
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  border: 2px solid #fff;
  color: #fff;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
}

.form .inputbox span {
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
}

.form .inputbox input:focus ~ span,
.form .inputbox input:valid ~ span {
  transform: translateX(-13px) translateY(-35px);
}

.info {
  text-align: start;
  width: 100%;
  margin-bottom: 30px;
}

.infoPass {
  display: flex;
  justify-content: space-between;
}

.infoPass button {
  background: transparent;
  border: none;
  color: #fff;
}

.form .submit-btn {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.2s;
}

.form .submit-btn:hover {
  background-color: rgb(207, 207, 207);
  letter-spacing: 3px;
}
</style>
