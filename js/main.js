$(document).ready(function() {

  const title1 = "Was ich gelernt habe:";
  const description1 = "Ich habe gelernt unter welchen Voraussetzungen eine kommerzielle Website höhere Chancen hat in diversen Suchmaschinen ein höheres Rating zu bekommen um mit mehr Klicks mehr Einkommen zu generieren sowie grundlegende Kenntnisse die genötigt werden um einfache aber wirkende Seiten zu gestalten."
  const title2 = "Arbeiten in der Web-Entwicklung:";
  const description2 = "In unserem Ausflug in ein Unternehmen habe ich Einblick in die Teamstrukturen und Aufgabenbereiche von Entwicklern bekommen.";

  const title3 = "Dies haben ich in Eigenarbeit geschaffen:";
  const description3 = "Unter dem folgenden Link finden Sie meine Projekte.";

  function setup(title, desc) {
    $(".slideMain").css("width", "33%");
    $(".slideTitle").text(title);
    $(".slideDesc").text(desc);
    setTimeout(function() {
      $(".slideTitle, .slideDesc").css("color", "black");
      $(".slideContent, .close").css("display", "block");
    }, 1000);
  };

  $(".img1").hover(function() {
    setup(title1, description1);
  });

  $(".img2").hover(function() {
    setup(title2, description2);
  });

  $(".img3").hover(function() {
    setup(title3, description3);
    $(".slideDesc").append("<p><a href='https://sirricc.github.io/landing-page/'>Meine Projekte</a></p>");
  });

  $(".close").click(function() {
    $(this).css("display", "none");
    $(".slideTitle, .slideDesc").css("color", "none");
    $(".slideContent, .close").css("display", "none");
    $(".slideMain").css("width", "20px");
  });

});
