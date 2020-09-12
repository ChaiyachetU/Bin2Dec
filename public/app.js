var app = new Vue({
  el: "#app",
  data: {
    binary: "",
  },
  computed: {
    handleBinaryInput() {
      const regExpNotBin = /[^01]/;
      return regExpNotBin.test(this.binary);
    },
    bin2dec() {
      if (!this.handleBinaryInput) {
        let binaryNumber = this.binary;
        let decimal = 0;
        for (var i = binaryNumber.length - 1; i >= 0; i--) {
          decimal +=
            parseInt(binaryNumber[i]) *
            Math.pow(2, binaryNumber.length - 1 - i);
        }
        return decimal.toString();
      } else {
        return "🙅‍♂️";
      }
    },
  },
});
