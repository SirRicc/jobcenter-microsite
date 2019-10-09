$(document).ready(function() {


  $(".img1").hover(function() {
    /*animate sideContent and set text*/
    $(".slideMain").css("width", "400px");
    $(".slideTitle").text("Was ich gelernt habe:");
    $(".slideDesc").text("Ich habe gelernt unter welchen Vorraussetzungen eine kommerzielle Website höhere Chanchen hat in diversen Suchmaschinen ein höheres Rating zu bekommen um mit mehr Klicks mehr Einkommen zu generieren sowie Grundlegende Kentnisse die benötig werden um einfache aber wirkende Seiten zu gestalten.");
    /*after animation make stuff visible*/
    setTimeout(function() {
      $(".slideTitle, .slideDesc").css("color", "black");
      $(".slideContent, .close").css("display", "block");
    }, 1000);
  });
  $(".img2").hover(function() {
    /*animate sideContent and set text*/
    $(".slideMain").css("width", "400px");
    $(".slideTitle").text("Arbeiten in der Web-Entwicklung:");
    $(".slideDesc").text("In unserem Ausflug in ein Unternehmen habe ich Einblick in die Teamstrukturen und Aufgabenbereiche von Entwicklern bekommen.");
    /*after animation make stuff visible*/
    setTimeout(function() {
      $(".slideTitle, .slideDesc").css("color", "black");
      $(".slideContent, .close").css("display", "block");
    }, 1000);
  });
  $(".img3").hover(function() {
    /*animate sideContent and set text*/
    $(".slideMain").css("width", "400px");
    $(".slideTitle").text("Dies haben wir in Eigenarbeit geschaffen:");
    $(".slideDesc").text("Unter dem folgenden Link finden Sie mein Projekt.");
     $(".slideDesc").append( "<p><a href='https://sirricc.github.io/landingPage/'>Google</a></p>" );
    /*after animation make stuff visible*/
    setTimeout(function() {
      $(".slideTitle, .slideDesc").css("color", "black");
      $(".slideContent, .close").css("display", "block");
    }, 1000);
  });

  /*event listener to close sideContent*/
  $(".close").click(function() {
    $(this).css("display", "none");
    $(".slideTitle, .slideDesc").css("color", "none");
    $(".slideContent, .close").css("display", "none");
    $(".slideMain").css("width", "20px");

  })


});
