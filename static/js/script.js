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



$(document).ready(function () {
    $('#id_update').click(function (e) {
        e.preventDefault();
        let form_data = new FormData();
        form_data.data = $('#updateImageForm').serialize();
        form_data.photo = $("#photo")[0].files[0];

        $.ajax({
            url: "{% url 'update_image' %}",
            type: 'POST',
            processData: false,
            contentType: false,
            data: form_data,
            success: function(data){
                    alert('Success!');
                    // $("#serializeForm")[0].reset();
                    },
            error: function(data, errorThrown){
                    alert('request failed :'+errorThrown);
                    }
        });
    });
});

