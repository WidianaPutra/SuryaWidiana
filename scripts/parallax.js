setTimeout(function () {
  $(".photo").css({
    transform: "scale(1)",
    transition: "transform 1s",
  });
}, 500);

$(document).scroll(function () {
  const scrollValue = $(this).scrollTop();
  const tinggiDokumen = $(document).height();
  const tinggiJendela = $(window).height();

  const persScroll = (scrollValue / (tinggiDokumen - tinggiJendela)) * 100;

  console.log(`Tinggi Jendela: ${persScroll}%`);

  // console.log(scrollValue);
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
  if (persScroll >= 21) {
    $(".about-img").css({
      transform: "translate(0%)",
      transition: "1.5s",
    });
    $(".informasi-detail-about").css({
      transform: "translate(0%)",
      transition: "1.5s",
    });
  }

  //project
  if (persScroll >= 36) {
    $(".img1").css({ transform: "scale(1)" });
  }
  if (persScroll >= 45) {
    $(".img2").css({ transform: "scale(1)" });
  }
  if (persScroll >= 60) {
    $(".img3").css({ transform: "scale(1)" });
  }
  if (persScroll >= 71) {
    $(".img4").css({ transform: "scale(1)" });
  }
});
