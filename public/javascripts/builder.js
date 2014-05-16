if ($("#builder").length) {
  function selectAllComponents(e) {
    var checkboxes = $(e.target).parent().parent().find('ul li input');
    checkboxes.prop("checked", !checkboxes.prop("checked"));
  }

  $(".select-all").on("click", selectAllComponents);
}
