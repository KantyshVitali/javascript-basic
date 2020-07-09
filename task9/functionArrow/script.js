function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

let ask_ = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
  
ask_(
    "Вы согласны?",
    () =>{ alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);
