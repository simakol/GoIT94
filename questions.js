const list = document.querySelector(".js-list");

getQuestionsService()
  .then((data) => (list.innerHTML = createMarkup(data)))
  .catch((err) => console.error(err));

function getQuestionsService() {
  const URL = "http://127.0.0.1:3000/api";
  const ENDPOINT = "getAll";

  return axios.get(`${URL}/${ENDPOINT}`).then(({ data }) => data);
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, phone, email, comment }) =>
        `<li class="card" data-id="${_id}">
    <div class="card-content">
        <h2 class="card-name">Name: ${name}</h2>
        <div>Phone: <span class="card-phone">${phone}</span></div>
        <div>Email: <span class="card-email"> ${email}</span></div>
        <div> <span class="card-comment">${comment}</span></div>
    </div>
</li>`
    )
    .join("");
}
