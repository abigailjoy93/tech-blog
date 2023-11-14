async function newFormHandler(event) {
  event.preventDefault();

  const blogTitle = document.querySelector("#blogTitle").value;
  const blogContents = document.querySelector("#blogContents").value;
  const blogAuthor = document.querySelector("#blogAuthor").value;
  const blogDate = document.querySelector("#blogDate").value;

  const response = await fetch(`/api/Blogs`, {
    method: "POST",
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
    document.location.replace("/");
  } else {
    alert("Failed to create blog");
  }
}

document.querySelector(".new-blog-form").addEventListener("submit", newFormHandler);
