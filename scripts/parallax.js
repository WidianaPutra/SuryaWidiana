$(document).ready(function () {
  setTimeout(function () {
    $(".information").css({
      scale: 1,
      transition: "scale 1.5s",
    });
  }, 200);
  setTimeout(function () {
    $(".photo").css({
      transform: "scale(1)",
      transition: "transform 1s",
    });
  }, 500);
});

$(document).scroll(function () {
  const scrollValue = $(this).scrollTop();
  const tinggiDokumen = $(document).height();
  const tinggiJendela = $(window).height();

  const persScroll = (scrollValue / (tinggiDokumen - tinggiJendela)) * 100;
  // console.log(`Tinggi Jendela: ${persScroll}%`);

  $(".contain-beranda").css({
    transform: `translateY(${scrollValue / 1.5}px)`,
    zIndex: 0,
  });

  if (persScroll >= 18) {
    $(".container-navigation-bar").css({
      backgroundColor: "#007bff",
      borderBottom: "1px solid #Fff",
      transition: "all 1s",
    });

    $("#nav").css({
      backgroundColor: "#007bff",
      transition: "all 1s",
    });
  } else {
    $(".container-navigation-bar").css({
      backgroundColor: "transparent",
      transiton: "all 1s",
      border: "none",
    });

    $("#nav").css({
      backgroundColor: "transparent",
      transition: "all 1s",
    });
  }

  //about
  if (persScroll >= 15) {
    $(".about-img").css({
      transform: "translate(0%)",
      transition: "1.5s",
    });
    $(".informasi-detail-about").css({
      transform: "translate(0%)",
      transition: "1.5s",
    });
  }

  // skills
  const persen = [60, 56, 65, 43, 43, 27, 67, 66, 65, 82, 84];
  const skill = $("div.skill");
  let color = "";

  if (persScroll >= 45) {
    skill.each(function (i, el) {
      if (persen[i] >= 80) color = "#007bff";
      if (persen[i] < 80 && persen[i] >= 55) color = "#28a745";
      if (persen[i] < 54) color = "#da373d";

      $(el).css({
        width: persen[i] + "%",
        // transition: "width 1s esse",
      });
    });
  }
});
