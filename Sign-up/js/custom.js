
$(document).ready(function() {
	'use strict';


  var progress = document.querySelectorAll('.form-steps');
  var progressUnit = 100 / progress.length;
  var progressWidth = 20;
  var currentStep = 1;

  $('.total-step').html(progress.length);
  $('.current-step').html(currentStep);

  $('.progress-bar').width(progressWidth + '%');

  $('.form-steps .step-btn').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.form-steps').next().addClass('active');
    $(this).parents('.form-steps').removeClass('active');
    progressWidth += progressUnit;

    $('.progress-bar').width(progressWidth + '%');

    currentStep++;
    $('.current-step').html(currentStep);

  })

  $('.form-steps .prev').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.form-steps').prev().addClass('active');
    $(this).parents('.form-steps').removeClass('active');

    progressWidth -= progressUnit;

    $('.progress-bar').width(progressWidth + '%');

    currentStep--;
    $('.current-step').html(currentStep);

  })


})

$('#nameField').css('display','none'); // Hide the text input box in default
function myFunction() {
   if($('#showField').prop('checked')) {
         $('#nameField').css('display','block');
       } else {
         $('#nameField').css('display','none');
       }
}
$('#nameField1').css('display','none'); // Hide the text input box in default
function myFunctionone() {
   if($('#showField1').prop('checked')) {
         $('#nameField1').css('display','block');
       } else {
         $('#nameField1').css('display','none');
       }
}
$('#nameField2').css('display','none'); 
function myFunctiontwo() {
   if($('#showField2').prop('checked')) {
         $('#nameField2').css('display','block');
       } else {
         $('#nameField2').css('display','none');
       }
}
$('#nameField3').css('display','none'); // Hide the text input box in default
function myFunctionthree() {
   if($('#showField3').prop('checked')) {
         $('#nameField3').css('display','block');
       } else {
         $('#nameField3').css('display','none');
       }
}
$("#seeAnotherFieldGroup").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldGroupDiv').show();
    $('#otherField1').attr('required', '');
    $('#otherField1').attr('data-error', 'This field is required.');
    $('#otherField2').attr('required', '');
    $('#otherField2').attr('data-error', 'This field is required.');
    $('#otherField3').attr('required', '');
    $('#otherField3').attr('data-error', 'This field is required.');
    $('#otherField4').attr('required', '');
    $('#otherField4').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldGroupDiv').hide();
    $('#otherField1').removeAttr('required');
    $('#otherField1').removeAttr('data-error');
    $('#otherField2').removeAttr('required');
    $('#otherField2').removeAttr('data-error');
    $('#otherField3').removeAttr('required');
    $('#otherField3').removeAttr('data-error');
    $('#otherField4').removeAttr('required');
    $('#otherField4').removeAttr('data-error');
  }
});
$("#seeAnotherFieldGroup").trigger("change");

$("#seeAnotherFieldGroupone").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldGroupDivone').show();
    $('#otherField5').attr('required', '');
    $('#otherField5').attr('data-error', 'This field is required.');
    $('#otherField6').attr('required', '');
    $('#otherField6').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldGroupDivone').hide();
    $('#otherField5').removeAttr('required');
    $('#otherField5').removeAttr('data-error');
    $('#otherField6').removeAttr('required');
    $('#otherField6').removeAttr('data-error');
  }
});
$("#seeAnotherFieldGroupone").trigger("change");

$("#seeAnotherFieldGrouptwo").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldGroupDivtwo').show();
    $('#otherField5').attr('required', '');
    $('#otherField5').attr('data-error', 'This field is required.');
    $('#otherField6').attr('required', '');
    $('#otherField6').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldGroupDivtwo').hide();
    $('#otherField5').removeAttr('required');
    $('#otherField5').removeAttr('data-error');
    $('#otherField6').removeAttr('required');
    $('#otherField6').removeAttr('data-error');
  }
});
$("#seeAnotherFieldGrouptwo").trigger("change");