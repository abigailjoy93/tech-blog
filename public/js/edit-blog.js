async function editFormHandler(event) {
  event.preventDefault();
  const blogTitle = document.querySelector("#blogTitle").value;
  const blogContents = document.querySelector("#blogContents").value;
  const blogAuthor = document.querySelector("#blogAuthor").value;
  const blogDate = document.querySelector("#blogDate").value;

  const id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];

  const response = await fetch(`/api/blog/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      blogTitle,
      blogContents,
      blogAuthor,
      blogDate,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace(`/blog/${id}`);
  } else {
    alert("Failed to edit post");
  }
}

document.querySelector(".edit-dish-form").addEventListener("submit", editFormHandler);
