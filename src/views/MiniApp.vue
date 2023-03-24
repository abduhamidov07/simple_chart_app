<template>
  <main>
    <div class="miniapp">
      <h1>
        Siz bu mini application orqali o'z dangasaligingizni yengishingiz
        mumkin!
      </h1>
      <form @submit.prevent="submitForm">
        <div class="inputbox">
          <label for="input1">Qilinishi shart bo'lgan vazifalar</label>
          <input type="number" v-model="input1" id="input1" />
        </div>
        <div class="inputbox">
          <label for="input2">Siz yoqtirgan ishlaringiz(hobby)</label>
          <input type="number" v-model="input2" id="input2" />
        </div>
        <div class="inputbox">
          <label for="input3">Zararli odatlar(vaqtni o'g'irlaydigan)</label>
          <input type="number" v-model="input3" id="input3" />
        </div>
        <div class="inputbox">
          <label for="input4">Diagramma turini tanlang</label>
          <select id="input4" v-model="chartType">
            <option value="pie">Pie</option>
            <option value="polarArea">PolarArea</option>
            <option value="bar">Bar</option>
            <option value="doughnut">Doughnut</option>
            <option value="line">Line</option>
            <option value="radar">Radar</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <canvas ref="chart"></canvas>
      <h2>
        Bugun sizning {{ total }} ta qilishingiz zarur bolgan vazifalaringiz bor
        lekin sizning atigi {{ hours }} soat {{ minutes }} minut vaqtingiz
        qoldi. Siz buni barchasini uddalaysiz! Endi turingda ishingizni
        bajaring zero bu vaqtingiz yana qaytmaydi
      </h2>
    </div>
    <RouterLink to="/">Home</RouterLink>
  </main>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      chartType: "pie",
      chart: null,
      total: "",
      hours: 23 - new Date().getHours(),
      minutes: 60 - new Date().getMinutes(),
    };
  },
  methods: {
    submitForm() {
      const data = {
        labels: [
          `Qilinishi shart bo'lgan vazifalar`,
          "Siz yoqtirgan ishlaringiz(hobby)",
          `Zararli odatlar(vaqtni o'g'irlaydigan)`,
        ],
        datasets: [
          {
            label: "Chart Title",
            backgroundColor: [
              "rgba(0, 0, 255, 0.7)",
              "rgba(0, 255, 0, 0.7)",
              "rgba(255, 0, 0, 0.7)",
            ],
            data: [this.input1, this.input2, this.input3],
          },
        ],
      };

      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(this.$refs.chart, {
        type: this.chartType,
        data: data,
      });
      this.total = this.input1 + this.input2;
      this.input1 = "";
      this.input2 = "";
      this.input3 = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

main {
  display: flex;
  justify-content: center;
}

.miniapp {
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.miniapp h1, h2 {
  text-align: center;
  line-height: 38px;
}

.miniapp form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.miniapp .inputbox {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.inputbox input,
select {
  padding: 8px;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  outline: none;
}

form button {
  padding: 5px 0;
  border-radius: 8px;
  border: none;
  margin-top: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

@media screen and (max-width: 950px) {
  .miniapp {
    width: 80%;
  }
}
</style>
