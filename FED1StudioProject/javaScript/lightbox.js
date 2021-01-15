//<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
//XML reference that gives us intellisense
//The /// indicates an XML comment
//Extensible Markup Language (XML) - generic data interchange WebGLShaderPrecisionFormat



//Custom Lightbox//
//When a user clicks on a thumbnail image, display the lightbox container and insert//<img>
$('.thumb').on('click', function () {
    //Find the source attribute of the img tag that was clicked and store that as a variable.
    var imgSrc = $(this).attr("src");

    //Plug an <img> into the #lightbox-content
    $('#lightbox-content').html('<img src="' + imgSrc + '" class="img-responsive"/>');

    //Make the lightbox visible by fading in
    $('#lightbox-container').fadeIn(500);

    //When the user cliucks anywhere in the lightbox-container, we want to fadeOut()
    $('#lightbox-container').on('click', function () {
        $(this).fadeOut(500);
    });
});