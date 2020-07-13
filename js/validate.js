(function($, Drupal)
{
  function validateTextfield()
  {
    var textfield = $("#edit-nombre");
    if(!textfield.val().length)
    {
      textfield.css("border-color", "red");
      return false;
    }
    if(!textfield.val().match(/^[a-zA-Z]+$/))
    {
      alert("Solo se permiten caracteres entre la A y la Z");
      textfield.css("border-color", "Orange");
      return false;
    }
    return true;
  }
  function submitListener()
  {
    $("#edit-submit").once("serempre-crud-form-registro", function()
    {
      $(this).click(function(e)
      {
        if(!validateTextfield())
        {
          e.preventDefault();
        }
      });
    });
  }
  Drupal.behaviors.myFormValidation = {
    attach:function()
    {
      submitListener();
    }
  };
})(jQuery, Drupal);

