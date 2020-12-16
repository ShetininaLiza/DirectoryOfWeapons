
const search_form = document.getElementById('search');
const edit_form = document.getElementById('edit');

function SearchByName(event)
{
  event.preventDefault();
  if (search_form.elements.s.value == "")
    return;
  Swal.fire("Поиск\n" + search_form.elements.s.value);
  console.log(search_form.elements.s.value);
  console.log(new FormData(search_form));
};

function UpdateData(event)
{
  event.preventDefault();
  console.log("UpdateData");
  let real_name = edit_form.elements.real_name.value;
  let name = edit_form.elements.name.value;
  let country = edit_form.elements.country.value;
  let desc = edit_form.elements.desc.value;
  console.log(real_name + " " + name + " " + country + " " + desc);
  if (name != real_name)
  {
    Swal.fire({
      icon: 'error',
      title: 'Ошибка',
      text: 'Редактировать название '+real_name+' нельзя.',
      confirmButtonText:'ОК',
    });
  }
  else
  {
    Swal.fire({
      icon: 'success',
      title: 'Готово',
      text: 'Редактирование '+real_name+' прошло успешно.',
      confirmButtonText:'ОК',
    });
  }
}

window.onload = function()
{
//alert("Hello");

//Swal.fire('Hello');

//console.log('Hello');

  search_form.addEventListener('submit', SearchByName);
  
  if (edit_form)
    edit_form.addEventListener('submit', UpdateData);
}
