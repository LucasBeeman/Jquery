$(document).ready(function (){
    $('#cart').on('click', () => {
      $('#cartMenu').show();
        $('.dropdown').on('mouseleave', () =>{
      $('#cartMenu').hide()
    })
    })
    $('#account').on('click', () => {
      $('#accountMenu').show();
        $('.dropdown').on('mouseleave', () =>{
      $('#accountMenu').hide()
    })
    })
    $('#help').on('click', () => {
      $('#helpMenu').show();
        $('.dropdown').on('mouseleave', () =>{
      $('#helpMenu').hide()
    })
    })
  });