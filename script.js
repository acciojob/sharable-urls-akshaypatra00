 const form = document.getElementById("form");
    const url = document.getElementById("url");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const year = document.getElementById("year").value;

      let baseUrl = "https://localhost:8080/";
      let params = [];

      if (name) params.push(`name=${name}`);
      if (year) params.push(`year=${year}`);

      if (params.length > 0) {
        baseUrl += "?" + params.join("&");
      }

      url.textContent = baseUrl;
    });
