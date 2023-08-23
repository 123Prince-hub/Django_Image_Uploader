$('.building-link').click(function(){
    $('#building-img').attr("src", $(this).attr("data-img"));
    $('#building-name').html($(this).attr("data-title"));
});



// Selct check box  >>>>>>>>>>>>>>>>>
let arr = [];
$('.img_checkbox').change(function(){
    if (this.checked) {
        let checkbox_value = this.value;
        arr.push(checkbox_value);
        if (arr.length > 1){
            $('#delete_btn').css('display', 'block');
        };
    }else{
        let checkbox_value = this.value;
        arr = arr.filter(function(item) {
            return item !== checkbox_value
        })
        if (arr.length <= 1){
            $('#delete_btn').css('display', 'none');
        }
    }  
})



// $(document).ready(function () {
    $('#id_update').click(function (e) {
        e.preventDefault();
        let form_data = new FormData();
        // console.log(form_data, "=============");
        // form_data.data = $('#updateImageForm').serialize();
        // console.log(form_data, "************");
        // form_data.photo = $("#photo")[0].files[0];
        // console.log(form_data, "-------------");
    
        $.ajax({
            url: "/update_image/",
            type: 'GET',
            data: {"form_data":form_data},
            processData: false,  // Don't process data
            contentType: false,  // Don't set content type
            success: function(data) {
                console.log('Success! ' + data);
                // $("#updateImageForm")[0].reset();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Request failed: ' + errorThrown);
            }
        });
    });
    
// });

