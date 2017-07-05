function toggle_visibility(id) 
{
    window.alert("clicked")
    var e = document.getElementById(id);
    var computed_style = window.getComputedStyle(e)
    if (computed_style.display == 'block' || computed_style.display=='')
    {
        e.style.display = 'none';
    }
    else 
    {
        e.style.display = 'block';
    }
}

function hide_visibility(id)
{
    var e = document.getElementById(id);
    var computed_style = window.getComputedStyle(e)
    if (computed_style.display == 'block' || computed_style.display=='')
    {
        e.style.display = 'none';
    }
}
