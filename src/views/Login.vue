<template>
  <div id="app">
    <div class="center">
      <div class="form">
        <h1>Login Now!</h1>
        <form>
          <div class="inputbox">
            <input v-model="email" type="text" required />
            <span>Email</span>
          </div>
          <div class="inputbox">
            <input :type="passwordFieldType" v-model="password" required />
            <span>Password</span>
            <button type="button" @click="switchV">
              <span v-if="showPass">
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
        <p>
          Don't have your account
          <RouterLink class="link" to="/signup">Sign Up</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import Swal from "sweetalert2"

export default {
  data() {
    return {
      showPass: true,
      email: "",
      password: "",
      passwordFieldType: "password",
    };
  },
  methods: {
    login() {
      if (this.email.replace(/@/, '').length != this.email.length && this.password.length >= 8) {
        localStorage.setItem("isLoggedIn", true);
        this.$router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    switchV() {
      (this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password"),
        (this.showPass = !this.showPass);
    },
  },
};
</script>

<!-- style sheet -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cuprum:wght@400;700&display=swap");

.center {
  display: grid;
  place-items: center;
  height: 100vh;
  font-family: "Cuprum", sans-serif;
  background-image: linear-gradient(
    109.6deg,
    rgba(62, 161, 219, 1) 11.2%,
    rgba(93, 52, 236, 1) 100.2%
  );
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px;
  backdrop-filter: blur(4px);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  box-shadow: 20px 20px 120px #000;
  border-radius: 10px;
  color: #fff;
}

.form p {
  font-weight: 400;
  font-size: 18px;
  color: #fff;
}

.form p > .link {
  color: #fff;
}

.form form {
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
}

.form h1 {
  font-size: 2.5rem;
  border-left: 5px solid azure;
  padding: 10px;
  color: #fff;
  letter-spacing: 5px;
  margin-bottom: 50px;
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
