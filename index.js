function openPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
    document.body.classList.remove('no-scroll');
}
// PopUp HBO MAX
document.getElementById('open-popuphbo').addEventListener('click', function () {
    openPopup('popupH');
});

document.getElementById('close-popupH').addEventListener('click', function () {
    closePopup('popupH');
});

// PopUp NETFLIX
document.getElementById('open-second-popup').addEventListener('click', function () {
    openPopup('second-popup');
});

document.getElementById('close-popup2').addEventListener('click', function () {
    closePopup('second-popup');
});

// PopUp PRIME VIDEO
document.getElementById('open-third-popup').addEventListener('click', function () {
    openPopup('third-popup');
});

document.getElementById('close-popup3').addEventListener('click', function () {
    closePopup('third-popup');
});

// Categorias

// CAT AÇÃO
document.getElementById("open-popupC1").addEventListener("click", function () {
    document.getElementById("popupC1").classList.remove("hidden");
});
document.getElementById("close-popupC1").addEventListener("click", function () {
    document.getElementById("popupC1").classList.add("hidden");
});
document.getElementById("close-popupC1S").addEventListener("click", function () {
    document.getElementById("popupC1").classList.add("hidden");
});

//Switch Card

function mostrarSerieContent() {
    document.getElementById("FilmeContent").classList.add("hidden");
    document.getElementById("SerieContent").classList.remove("hidden");
}
function mostrarFilmeContent() {
    document.getElementById("SerieContent").classList.add("hidden");
    document.getElementById("FilmeContent").classList.remove("hidden");
}

// CAT AVENTURA
document.getElementById("open-popupC2").addEventListener("click", function () {
    document.getElementById("popupC2").classList.remove("hidden");
});
document.getElementById("close-popupC2").addEventListener("click", function () {
    document.getElementById("popupC2").classList.add("hidden");
});
document.getElementById("close-popupC2S").addEventListener("click", function () {
    document.getElementById("popupC2").classList.add("hidden");
});

//Switch Card2
function mostrarSerieContent2() {
    document.getElementById("FilmeContent2").classList.add("hidden");
    document.getElementById("SerieContent2").classList.remove("hidden");
}
function mostrarFilmeContent2() {
    document.getElementById("SerieContent2").classList.add("hidden");
    document.getElementById("FilmeContent2").classList.remove("hidden");
}

// CAT COMÉDIA
document.getElementById("open-popupC3").addEventListener("click", function () {
    document.getElementById("popupC3").classList.remove("hidden");
});
document.getElementById("close-popupC3").addEventListener("click", function () {
    document.getElementById("popupC3").classList.add("hidden");
});
document.getElementById("close-popupC3S").addEventListener("click", function () {
    document.getElementById("popupC3").classList.add("hidden");
});

//Switch Card3
function mostrarSerieContent3() {
    document.getElementById("FilmeContent3").classList.add("hidden");
    document.getElementById("SerieContent3").classList.remove("hidden");
}
function mostrarFilmeContent3() {
    document.getElementById("SerieContent3").classList.add("hidden");
    document.getElementById("FilmeContent3").classList.remove("hidden");
}

// CAT FICÇÃO
document.getElementById("open-popupC4").addEventListener("click", function () {
    document.getElementById("popupC4").classList.remove("hidden");
});
document.getElementById("close-popupC4").addEventListener("click", function () {
    document.getElementById("popupC4").classList.add("hidden");
});
document.getElementById("close-popupC4S").addEventListener("click", function () {
    document.getElementById("popupC4").classList.add("hidden");
});

//Switch Card4
function mostrarSerieContent4() {
    document.getElementById("FilmeContent4").classList.add("hidden");
    document.getElementById("SerieContent4").classList.remove("hidden");
}
function mostrarFilmeContent4() {
    document.getElementById("SerieContent4").classList.add("hidden");
    document.getElementById("FilmeContent4").classList.remove("hidden");
}

// CAT ROMANCE
document.getElementById("open-popupC5").addEventListener("click", function () {
    document.getElementById("popupC5").classList.remove("hidden");
});
document.getElementById("close-popupC5").addEventListener("click", function () {
    document.getElementById("popupC5").classList.add("hidden");
});
document.getElementById("close-popupC5S").addEventListener("click", function () {
    document.getElementById("popupC5").classList.add("hidden");
});

//Switch Card5
function mostrarSerieContent5() {
    document.getElementById("FilmeContent5").classList.add("hidden");
    document.getElementById("SerieContent5").classList.remove("hidden");
}
function mostrarFilmeContent5() {
    document.getElementById("SerieContent5").classList.add("hidden");
    document.getElementById("FilmeContent5").classList.remove("hidden");
}

// CAT TERROR
document.getElementById("open-popupC6").addEventListener("click", function () {
    document.getElementById("popupC6").classList.remove("hidden");
});
document.getElementById("close-popupC6").addEventListener("click", function () {
    document.getElementById("popupC6").classList.add("hidden");
});
document.getElementById("close-popupC6S").addEventListener("click", function () {
    document.getElementById("popupC6").classList.add("hidden");
});

//Switch Card6
function mostrarSerieContent6() {
    document.getElementById("FilmeContent6").classList.add("hidden");
    document.getElementById("SerieContent6").classList.remove("hidden");
}
function mostrarFilmeContent6() {
    document.getElementById("SerieContent6").classList.add("hidden");
    document.getElementById("FilmeContent6").classList.remove("hidden");
}