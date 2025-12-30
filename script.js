function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "Lavender") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong password 💔");
  }
}
